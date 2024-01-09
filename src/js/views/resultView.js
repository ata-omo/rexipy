import icons from "url:../../img/icons.svg";
import View from "./View";

class ViewResult extends View{

    _parentElement = document.querySelector('.results');


    _generateHtml(){
        const res = this._data;
        const html = `${res.map((rec)=>{
            return `<li class="preview">
            <a class="preview__link" href="#${rec.id}">
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

export default new ViewResult();