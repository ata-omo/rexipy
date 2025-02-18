import icons from "url:../../img/icons.svg";
import View from "./View";

class ViewRecipe extends View {
  _parentElement = document.querySelector(".recipe");
  _errorMessage = `Recipe Not Found TRY Again!!!`;
 
  eventHandlerRendrer(handler) {
    // we want to add same eventListner to multiple different events
    ["hashchange", "load"].forEach((event) =>
      window.addEventListener(event, handler)
    );
  }

  servingChangeHandler(handler){
    this._parentElement.addEventListener('click',function(e){

      const btn = e.target.closest('.btn--update-servings');
      if(!btn) return;

      const newServing = +btn.dataset.updateTo;

      if(newServing>0) handler(newServing);
      else if(newServing<=0) handler(1);

      
    });
  }


  bookmarkHandler(handler){
    this._parentElement.addEventListener('click',function(e){
      const btn = e.target.closest('.btn--bookmark');

      if(!btn) return;

      handler();
    })
  }

  _generateHtml() {
    const recipe = this._data;
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
          <button class="btn--tiny btn--update-servings" data-update-to="${
            recipe.servings-1
          }">
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--update-servings" data-update-to="${
            recipe.servings+1
          }">
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
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${icons}#icon-bookmark${recipe.bookmarked ? '-fill': ''}"></use>
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


}

export default new ViewRecipe(); // we are not exporting the whole class we are just exporting one instance
