class MainContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <section>
		        <div id="mainContent"></div>
            </section>
            `;
    }
}

customElements.define('main-content', MainContent);