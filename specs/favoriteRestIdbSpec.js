import { itActsAsFavoriteRestModel } from './contract/favoriteRestContract';
import FavoriteRestaurantReviewIdb from '../src/scripts/data/favorite-db';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await FavoriteRestaurantReviewIdb.getAll()).forEach(async (restaurants) => {
            await FavoriteRestaurantReviewIdb.deleteAllItem(restaurants.id);
        });
    });

    itActsAsFavoriteRestModel(FavoriteRestaurantReviewIdb);
});
