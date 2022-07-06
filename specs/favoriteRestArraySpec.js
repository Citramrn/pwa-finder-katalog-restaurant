/* eslint-disable no-const-assign */
import { itActsAsFavoriteRestModel } from './contract/favoriteRestContract';

let favoriteRestaurant = [];

const favoriteRestaurantArray = {
    getAdd(id) {
        if (!id) {
            return;
        }

        return favoriteRestaurant.find((restauran) => restauran.id === id);
    },

    getAll() {
        return favoriteRestaurant;
    },

    putRestaurant(restauran) {
        if (!restauran.hasOwnProperty('id')) {
            return;
        }

        if (this.getAdd(restauran.id)) {
            return;
        }

        favoriteRestaurant.push(restauran);
    },

    deleteAllItem(id) {
        favoriteRestaurant = favoriteRestaurant.filter((restauran) => restauran.id !== id);
    },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
    afterEach(() => favoriteRestaurant = []);

    itActsAsFavoriteRestModel(favoriteRestaurantArray);
});
