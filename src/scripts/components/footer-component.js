class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer class="footer">
            <div class="footer_content">
                <p>Kulvi, Copyright &#169; 2024 - Eki Dita Permana</p>
            </div>
        </footer>
        `;
  }
}

customElements.define('footer-component', Footer);
