import TheListHome from '../../data/list-api';
import UrlParser from '../../routes/url-parser';
import { createDetailRestaurant } from '../template/create-detail';
import { createListRestaurant } from '../template/create-template';
import LikeButtonPresenter from '../../utils/likes-presenter';
import FavoriteRestaurantReviewIdb from '../../data/favorite-db';

const Detail = {
    async render() {
        return `
            <div class="detail-content" id="restaurant"></div>

            <div class="like-favorite" id="likeButtonTemplate"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const detail = await TheListHome.detailEndpoint(url.id);
        const withDetail = document.querySelector('#restaurant');
        withDetail.innerHTML = createDetailRestaurant(detail.restaurant);
        console.log(detail.restaurant);

        LikeButtonPresenter.init({
            likeButtonTemplate: document.getElementById('likeButtonTemplate'),
            favoriteRestaurant: FavoriteRestaurantReviewIdb,
            detail: {
                id: url.id,
                pictureId: detail.restaurant.pictureId,
                name: detail.restaurant.name,
                description: detail.restaurant.description,
                rating: detail.restaurant.rating,
                city: detail.restaurant.city
            }
        });
    }

};

export default Detail;