class FooterExpresion extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer>
            	<p>Copyright © 2020 - Restaurant.</p>
            </footer>
            `;
    }
}

customElements.define('footer-expresion', FooterExpresion);