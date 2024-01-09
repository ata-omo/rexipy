import icons from "url:../../img/icons.svg";
import View from "./View";

class ViewPage extends View{

    _parentElement = document.querySelector('.pagination');


    renderOnBtnClick(handler){
      this._parentElement.addEventListener('click', function(e){
        const btn = e.target.closest('.btn--inline');
        
        if(!btn) return;
        const goToPage = +btn.dataset.goto;
        console.log(goToPage);
        handler(goToPage);
      })
    }


    _generateHtml(){

      const pageData = this._data;

      const pageNumber = pageData.page;
      const totalItem = pageData.results.length;
      const pageCapacity = pageData.resultPerPage;
      const remainingPages = Math.ceil(totalItem/pageCapacity) -pageNumber;   

      if(pageNumber ==1 && (remainingPages > 0)){ // display only right button
        return `<button data-goto="${pageNumber+1}" class="btn--inline pagination__btn--next">
          <span>Page ${pageNumber+1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>`;
      }

      if(pageNumber > 1){

        if(remainingPages>0){ // display both buttons
          return `<button data-goto="${pageNumber-1}" class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>Page ${pageNumber-1}</span>
            </button>
            <button data-goto="${pageNumber+1}" class="btn--inline pagination__btn--next">
              <span>Page ${pageNumber+1}</span>
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
              </svg>
            </button>`;
        }
        else if(remainingPages==0){ // display only left button
          return `<button data-goto="${pageNumber-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${pageNumber-1}</span>
        </button>`;
        }
        // else return ``;
      }
      // else return '';

    }
}

export default new ViewPage();