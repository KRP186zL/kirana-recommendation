class ContentCard extends HTMLElement {
  _restaurant = {
    name: null,
    description: null,
    pictureId: null,
    city: null,
    rating: null,
  };

  _style = null;

  constructor() {
    super();
    this._style = document.createElement("style");
  }

  connectedCallback() {
    this.render();
  }

  get restaurant() {
    return this._restaurant;
  }

  set restaurant(data) {
    this._restaurant = data;
  }

  _emptyContent() {
    this.innerHTML = ``;
  }

  _updateStyle() {
    this._style.textContent = `
    content-card{
      --bg: #ffeecf;
      --coklat: #7a4247;
      --heading: #7d4a34;
      flex:0 0 90vw;
    }
    .rekomendasi__content-card{
      height:100%;
      padding:20px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
    .rekomendasi__content-card-figure{
      width: 100%;
      position:relative;
    }
    .rekomendasi__content-card-figure img{
      width:100%;
      margin: auto;
      border: 1px solid #ccc;
      aspect-ratio: 16 / 9;
      overflow: hidden;
    }
    .rekomendasi__content-card-figure-city{
      font-size:12px;
      position:absolute;
      top:20px;
      background-color:var(--coklat);
      color:cornsilk;
      padding:.8em;
    }
    .rekomendasi__content-card-rating{
      color:red;
      font-size:1.1em;
      padding-block-start:1em;
    }
    .rekomendasi__content-card-name{
      font-size:1.3em;
      padding-block:.5em;
      color:var(--coklat);
    }
    .rekomendasi__content-card-description{
      font-size: 1em;
      line-height: 1.5em;
      text-align:justify;
    }
    `;
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this.appendChild(this._style);
    this.innerHTML += `
      <div class="rekomendasi__content-card">
          <figure class="rekomendasi__content-card-figure">
              <img src="${this.restaurant.pictureId}" alt="${this.restaurant.name}">
              <figcaption tabindex="0" class="rekomendasi__content-card-figure-city"><span aria-label="Lokasi"></span>${this.restaurant.city}</figcaption>
          </figure>
          <p tabindex="0" class="rekomendasi__content-card-rating">Rating: ${this.restaurant.rating}</p>
          <h3 tabindex="0" class="rekomendasi__content-card-name"><span aria-label="Nama Restauran"></span>${this.restaurant.name}</h3>
          <p tabindex="0" class="rekomendasi__content-card-description"><span aria-label="Deskripsi Restaurant"></span>${this.restaurant.description}</p>
      </div>
    `;
  }
}
customElements.define("content-card", ContentCard);
