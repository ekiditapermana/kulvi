class Appbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="nav">
    <div class="logo">
      <a href="/">Kulvi</a>
    </div>
    <div class="menu">
      <ul>
      <li class="nav_item"><a href="#/home">Home</a></li>
      <li class="nav_item"><a href="#/favorite">Favorite</a></li>
        <li class="nav_item">
          <a target="_blank" href="https://ekiditapermana.github.io/portfolio/" rel="noopener">About Us</a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="hamburger">
    <button class="button_menu" id="menu_resp" aria-label="button to open side menu">☰</button>
    <a href="/">Kulvi</a>
    <div class="nav_logo">&nbsp;</div>
  </div>

  <div class="hero" id="hero">
    <div class="hero_inner">
      <p class="hero_title">Kuliner Viral</p>
      <p class="hero_tagline">Temukan Kuliner yang lagi Viral disini!</p>
    </div>
  </div>
        `;
  }
}

customElements.define('appbar-component', Appbar);
