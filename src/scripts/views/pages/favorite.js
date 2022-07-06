import FavoriteRestodb from '../../data/favorite-db';
import { createListRestaurant } from '../template/create-template';
import { createEmptyFavorites } from '../template/create-empty';

const Like = {
    async render() {
        return `
         <div class="jumbotron jumbotron-fluid" id="hero">
                <div class="content">
                    <h2>RESTAURANT REVIEWS</h2>
                    <p class="lead">RestView stands for Restaurant Review Website this displays
                            the favorite place and the best place with cheap and expensive but quality badget
                    </p>
                </div>
        </div>
        
        <section class="content-main">
            <div class="favorites_restaurants">
                    <div id="restaurantEmpty" class="restaurants-empty"></div>
                    <div class="wrapper-grid" id="favorites">
                    </div>
            </div>
        </section>
        `;
    },

    async afterRender() {
        const resto = await FavoriteRestodb.getAll();
        const listFavorite = document.querySelector('#favorites');
        const empty = document.getElementById('restaurantEmpty');

        resto.forEach((restaurant) => {
            listFavorite.innerHTML += createListRestaurant(restaurant);
        });

        if (resto === undefined || resto.length === 0) {
            empty.innerHTML += createEmptyFavorites();
        }
    }
};

export default Like;