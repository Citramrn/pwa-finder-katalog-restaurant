import API_ENDPOINT from '../globals/api-endpoint';

class Splieted {
    static async listEndpoint() {
        const response = await fetch(API_ENDPOINT.LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detailEndpoint(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }
}

export default Splieted;