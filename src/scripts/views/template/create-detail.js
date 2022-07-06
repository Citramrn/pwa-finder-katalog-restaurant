import API_ENDPOINT from '../../globals/api-endpoint';

const createDetailRestaurant = (data) => `
         <div class="flex-container">
                <div class="main-content">
                    <div class="text_one">
                        <h1>ADDRESS</h1>
                        <p>${data.name}</p>
                        <p>📍${data.city}</p>
                        <p>${data.address}</p>
                        <p>⭐️${data.rating}</p>
                    </div>
                    <br>
                    <div class="text_two">
                        <h1>FOOD</h1>
                        <p>${data.menus.foods[0].name}</p>
                        <p>${data.menus.foods[1].name}</p>
                        <p>${data.menus.foods[2].name}</p>
                    </div>
                    <br>
                    <div class="text_three">
                        <h1>DRINKS</h1>
                        <p>${data.menus.drinks[0].name}</p>
                        <p>${data.menus.drinks[1].name}</p>
                        <p>${data.menus.drinks[2].name}</p>
                    </div>
                    <br>
                    <div class="text_four">
                        <h1>CATEGORIES</h1>
                        <div class="square">
                            <p class="square_one">${data.categories[0].name}</p>
                            <p class="square_one"> ${data.categories.length > 1 ? `${data.categories[1].name}` : ``}</p>
                        </div>
                    </div>
                </div>
                 <div class="flex-containers">
                <div class="text_five main-content contex">
                        <div class="main-content">
                            <img src="${API_ENDPOINT.IMAGE.MEDIUM}${data.pictureId}" alt="${data.name}" />
                        </div>
                            <h1>OVERVIEW</h1>
                            <p>${data.description}</p>
                            <br>
                        <div class="text_six">
                            <h1>REVIEW'S</h1>
                            <p> Oleh ${data.customerReviews[0].name} : </p>
                            <p> ${data.customerReviews[0].review} </p>
                            <p>${data.customerReviews[0].date} </p>
                        </div>
                </div>
        </div>
    </div>
`;

export { createDetailRestaurant };