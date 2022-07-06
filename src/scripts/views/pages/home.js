import TheListHome from '../../data/list-api';
import { createListRestaurant } from '../template/create-template';

const Home = {
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

            <section class="cloud">
                <div class="container-grid">
                    <div class="text-center">
                        <h1 class="lgs">Explore Restaurants</h1>
                        <p class="lead my-1">find a favorite restaurant that you like and are interested in.</p>
                    </div>
                </div>
            </section>

            <div class="wrapper-grid" id="articleCard">
                    
            </div>
        `;
    },

    async afterRender() {
        const apiUrlList = await TheListHome.listEndpoint();
        const listHome = document.querySelector('#articleCard');
        console.log(apiUrlList);
        apiUrlList.forEach((homes) => {
            listHome.innerHTML += createListRestaurant(homes);
        });
    }
};

export default Home;