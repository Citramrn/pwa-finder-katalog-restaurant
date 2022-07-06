import 'regenerator-runtime';
import '../styles/style.scss';
import './components/app-bar';
import './components/main-content';
import './components/my-footer';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
    button: document.querySelector('#menuHamburger'),
    drawer: document.querySelector('#drawerMenu'),
    content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});