import FavoriteRestaurantReviewIdb from '../src/scripts/data/favorite-db';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="like-favorite" id="likeButtonTemplate"></div>';
};

describe('Unliking A Restaurant', () => {
    beforeEach(async () => {
        addLikeButtonContainer();
        await FavoriteRestaurantReviewIdb.putRestaurant({ id: 1 });
    });

    afterEach(async () => {
        await FavoriteRestaurantReviewIdb.deleteAllItem(1);
    });

    // harus ditampilkan tidak seperti widget ketika restoran disukai
    it('should display unlike widget when the restaurant has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        expect(document.querySelector('[aria-label="unlike this restaurant"]'))
            .toBeTruthy();
    });

    // seharusnya tidak ditampilkan seperti widget ketika restoran telah disukai
    it('should not display like widget when the restaurant has been liked', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        expect(document.querySelector('[aria-label="like this restaurant"]'))
            .toBeFalsy();
    });

    // harus dapat menghapus restoran yang disukai dari daftar
    it('should be able to remove liked restaurant from the list', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantReviewIdb.getAll()).toEqual([]);
    });

    // tidak boleh membuat kesalahan jika restoran yang tidak disukai tidak ada dalam daftar
    it('should not throw an error if the unliked restaurant is not on the list', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        // hapus dulu film dari daftar film yang disukai
        await FavoriteRestaurantReviewIdb.deleteAllItem(1);

        // kemudian, simulasikan pengguna menekan widget batal menyukai film
        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantReviewIdb.getAll()).toEqual([]);
    });
});