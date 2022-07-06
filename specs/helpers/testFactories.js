import LikeButtonPresenter from '../../src/scripts/utils/likes-presenter';
import FavoriteRestaurantReviewIdb from '../../src/scripts/data/favorite-db';

const createLikeButtonPresenterWithResto = async (detail) => {
    await LikeButtonPresenter.init({
        likeButtonTemplate: document.getElementById('likeButtonTemplate'),
        favoriteRestaurant: FavoriteRestaurantReviewIdb,
        detail,
    });
};

export { createLikeButtonPresenterWithResto };