import { createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate } from '../views/template/create-template';

const LikeButtonPresenter = {
    async init({ likeButtonTemplate, favoriteRestaurant, detail }) {
        this._likeButtonTemplate = likeButtonTemplate;
        this._detail = detail;
        this._favoriteRestaurant = favoriteRestaurant;

        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._detail;

        if (await this._exitRestaurant(id)) {
            this._renderUnlike();
        } else {
            this._renderLike();
        }
    },

    async _exitRestaurant(id) {
        const detail = await this._favoriteRestaurant.getAdd(id);
        return !!detail;
    },

    _renderUnlike() {
        this._likeButtonTemplate.innerHTML = createUnlikeRestaurantButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await this._favoriteRestaurant.deleteAllItem(this._detail.id);
            this._renderButton();
        });
    },

    _renderLike() {
        this._likeButtonTemplate.innerHTML = createLikeRestaurantButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await this._favoriteRestaurant.putRestaurant(this._detail);
            this._renderButton();
        });
    },

};

export default LikeButtonPresenter;
