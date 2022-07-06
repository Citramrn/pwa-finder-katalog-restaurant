import CONFIG from '../globals/config';

const CacheHelper = {
    async cachingAppShell(requests) {
        const cache = await this._cachesOpen();
        cache.addAll(requests);
    },

    async deleteAppCache() {
        const cacheNames = await caches.keys();
        cacheNames
            .filter((name) => name !== CONFIG.CACHE_NAME)
            .map((filterName) => caches.delete(filterName));
    },

    async revalidateCache(request) {
        const response = await caches.match(request);

        if (response) {
            return response;
        }

        return this._fetchRequest(request);
    },

    async _cachesOpen() {
        return caches.open(CONFIG.CACHE_NAME);
    },

    async _fetchRequest(request) {
        const fetchRequests = await fetch(request);

        if (!fetchRequests || fetchRequests.status !== 200) {
            return fetchRequests;
        }

        await this._addCache(request);
        return fetchRequests;
    },

    async _addCache(request) {
        const caches = await this._cachesOpen();
        caches.add(request);
    },
};

export default CacheHelper;