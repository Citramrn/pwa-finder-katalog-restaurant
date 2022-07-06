import API_ENDPOINT from '../../globals/api-endpoint';

const createListRestaurant = (data) => `
    <a href="${`/#/detail/${data.id}`}" class="click-detail">
        <div class="container">
            <div class="banner-img">
                <img class="lazyload" data-src=${API_ENDPOINT.IMAGE.SMALL}${data.pictureId} alt=${data.name}/>
                <p class="rating">⭐️${data.rating}</p>
                </div>
            <div class="content-text">
                <h3 class="name">${data.name}</h3>
                <p class="city">📍${data.city}</p>
                <p class="description">${data.description}</p>
            </div>
        </div >
    </a>
    `;

const createLikeRestaurantButtonTemplate = () => `
            <button aria-label="like this restaurant" id="likeButton" class="like">
                <i class="fa fa-heart-o" aria-hidden="true"></i>
            </button>
        `;

const createUnlikeRestaurantButtonTemplate = () => `
            <button aria-label="unlike this restaurant" id="likeButton" class="like">
                <i class="fa fa-heart" aria-hidden="true"></i>
            </button>
        `;

export {
    createListRestaurant,
    createLikeRestaurantButtonTemplate,
    createUnlikeRestaurantButtonTemplate
};
