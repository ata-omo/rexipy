import icons from "url:../../img/icons.svg";
import View from "./View";

class ViewBookmarks extends View{

    _parentElement = document.querySelector('.bookmarks__list');
    _errorMessage = 'No Bookmarks Yet :(';

    handleLocalBookmark(handler){
        window.addEventListener('load',handler);
    }

    _generateHtml(){

        const id = window.location.hash.slice(1);

        const res = this._data;
        const html = `${res.map((rec)=>{
            return `<li class="preview">
            <a class="preview__link }" href="#${rec.id}">
              <figure class="preview__fig">
                <img src="${rec.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${rec.title}</h4>
                <p class="preview__publisher">${rec.publisher}</p>
              </div>
            </a>
          </li>`
        }).join('')}`
        

        return html;

    }
}

export default new ViewBookmarks();