class AppBar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        <div class="menu-mobile">
        	<p>Restaurant.</p>
            <button class="icon-menu" type="button" id="menuHamburger" aria-label="Toggle navigation">
                <div></div>
                <div></div>
                <div></div>
				</button>
		</div>
		<nav id="drawerMenu" class="nav-mobile">
			<ul class="mobile">
				<li class="mobile-list"><a href="#/home">Home</a></li>
				<li class="mobile-list"><a href="#/favorite">Favorite</a></li>
				<li class="mobile-list"><a href="https://citramrn.github.io" target="_blank">About Us</a></li>
			</ul>
		</nav>
		<nav class="nav">
			<h1 class="logo">Restaurant.</h1>
			<ul class="desktop">
				<li class="nav-items"><a href="#/home">Home</a></li>
				<li class="nav-items"><a href="#/favorite">Favorite</a></li>
				<li class="nav-items"><a href="https://citramrn.github.io" target="_blank">About Us</a></li>
			</ul>
		</nav>
        `;
	}
}

customElements.define('app-header', AppBar);