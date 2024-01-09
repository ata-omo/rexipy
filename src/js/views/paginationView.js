import icons from "url:../../img/icons.svg";
import View from "./View";

class ViewPage extends View{

    _parentElement = document.querySelector('.pagination');

    _generateHtml(){
        const html =`
        <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page 1</span>
          </button>
          <button class="btn--inline pagination__btn--next">
            <span>Page 3</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </button>
        `;

        
    }
}