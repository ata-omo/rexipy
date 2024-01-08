import icons from "url:../../img/icons.svg";

class ViewRecipe {
  #parentElement = document.querySelector(".recipe");
  #data;
  #errorMessage = `Recipe Not Found TRY Again!!!`;

  render(data) {
    this.#data = data;
    this.#clearExistingHtml();
    const markup = this.#generateHtml();
    this.#insertNewHtml("afterbegin", markup);
  }

  #clearExistingHtml() {
    this.#parentElement.innerHTML = "";
  }

  #insertNewHtml(position, markup) {
    this.#parentElement.insertAdjacentHTML(position, markup);
  }

  eventHandlerRendrer(handler) {
    // we want to add same eventListner to multiple different events
    ["hashchange", "load"].forEach((event) =>
      window.addEventListener(event, handler)
    );
  }

  #generateHtml() {
    const recipe = this.#data;
    const html = `<figure class="recipe__fig">
      <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${recipe.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${
          recipe.cookingTime
        }</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${
          recipe.servings
        }</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
        <svg>
          <use href="${icons}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${icons}#icon-bookmark-fill"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${recipe.ingredients
        .map((ingredient) => {
          return `<li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${icons}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${ingredient.quantity}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ingredient.unit}</span>
          ${ingredient.description}
        </div>
      </li>`;
        })
        .join("")}
        
      </ul>
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${
          recipe.publisher
        }</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`;

    return html;
  }

  showSpinner() {
    const html = `<div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;

    this.#clearExistingHtml();
    this.#insertNewHtml("afterbegin", html);
  }

  showError(errMessage = this.#errorMessage) {
    const html = `<div class="error">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${errMessage}</p>
    </div>`;

    this.#clearExistingHtml();
    this.#insertNewHtml('afterbegin',html);

  }


}

export default new ViewRecipe(); // we are not exporting the whole class we are just exporting one instance
