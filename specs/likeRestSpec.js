import FavoriteRestaurantReviewIdb from '../src/scripts/data/favorite-db';
import * as TestFactories from './helpers/testFactories';

describe('Like Restaurant', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div class="like-favorite" id="likeButtonTemplate"></div>';
    };

    beforeEach(() => {
        addLikeButtonContainer();
    });
    // harus menunjukkan tombol suka ketika restoran belum disukai sebelumnya
    it('should show a like button when the restaurant has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        expect(document.querySelector('[aria-label="like this restaurant"]'))
            .toBeTruthy();
    });
    // tidak boleh menampilkan tombol tidak suka saat film belum disukai sebelumnya
    it('should not show the unlike button when the movie has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        expect(document.querySelector('[aria-label="unlike this restaurant"]'))
            .toBeFalsy();
    });
    // harus bisa menyukai restoran
    it('should be able to like the restaurant', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteRestaurantReviewIdb.getAdd(1);

        expect(restaurant).toEqual({ id: 1 });

        FavoriteRestaurantReviewIdb.deleteAllItem(1);
    });

    // sebaiknya tidak menambahkan restoran lagi jika sudah disukai
    it('should not add a restaurant again when its already liked', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
        // Tambahkan restaurant dengan ID 1 ke daftar restauran yang disukai
        await FavoriteRestaurantReviewIdb.putRestaurant({ id: 1 });
        // Simulasikan pengguna menekan tombol suka di restaurant
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        // tidak ada rest yang ganda
        expect(await FavoriteRestaurantReviewIdb.getAll()).toEqual([{ id: 1 }]);

        FavoriteRestaurantReviewIdb.deleteAllItem(1);
    });

    // tidak boleh menambahkan restoran ketika tidak memiliki id
    // // menggunakan metode xit, bukan it
    it('should not add a restaurant when it has no id', async () => {
        await TestFactories.createLikeButtonPresenterWithResto({});

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantReviewIdb.getAll()).toEqual([]);
    });
});