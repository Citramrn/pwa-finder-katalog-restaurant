import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(database) {
        database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
    },
});

const FavoriteRestaurantReviewIdb = {
    async getAdd(id) {
        if (!id) {
            return;
        }

        return (await dbPromise).get(OBJECT_STORE_NAME, id);
    },

    async getAll() {
        return (await dbPromise).getAll(OBJECT_STORE_NAME);
    },

    async putRestaurant(detail) {
        if (!detail.hasOwnProperty('id')) {
            return;
        }

        return (await dbPromise).put(OBJECT_STORE_NAME, detail);
    },

    async deleteAllItem(id) {
        return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    }
};

export default FavoriteRestaurantReviewIdb;