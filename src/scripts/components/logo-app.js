class LogoApp extends HTMLElement {
  _style = null;
  constructor() {
    super();
    this._style = document.createElement("style");
  }

  connectedCallback() {
    this.render();
  }

  _updateStyle() {
    this._style.textContent = `    

    .logo{
        position:relative;
    }

      .logo__teks-atas,
      .logo__logo,
      .logo__teks-bawah {
        position: absolute;
        width: 100px;
      }
      .logo__teks-bawah{
        left:1px;
        top:1px;
      }
    `;
  }

  render() {
    this._updateStyle();

    this.appendChild(this._style);
    this.innerHTML += `
        <div class="logo">
            <img
            class="logo__teks-atas logo__logo animate__animated animate__fadeInLeft"
            src="./images/logo/teks-atas.png"
            alt=""
            />
            <img
            class="logo__logo animate__animated animate__fadeInUp"
            src="./images/logo/logo.png"
            alt=""
            />
            <img
            class="logo__teks-bawah logo__logo animate__animated animate__fadeInRight"
            src="./images/logo/teks-bawah.png"
            alt=""
            />
        </div>
    `;
  }
}

customElements.define("logo-app", LogoApp);
