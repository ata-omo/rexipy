// this is the parent class for all the views
import icons from "url:../../img/icons.svg";

export default class View {
  _data;

  render(data) {

    // making render method valid for pagination logic
    if(!data || (Array.isArray(data) && data.length ===0 ))
    return this.renderError();

    this._data = data;
    this._clearExistingHtml();
    const markup = this._generateHtml();
    this._insertNewHtml("afterbegin", markup);
  }

  update(data){
    if(!data || (Array.isArray(data) && data.length ===0 ))
    return this.renderError();

    this._data = data;
    const newMarkup = this._generateHtml(); // it is in to form of string

    const newDOM = document.createRange().createContextualFragment(newMarkup); // converted string to virtual DOM
    
    // fetching elements from our dom 
    const newElements = Array.from(newDOM.querySelectorAll('*'));

    const currentElements = Array.from(this._parentElement.querySelectorAll('*'));

    // comparing newly created markup and current markup

    newElements.forEach(function(newEle,i){
      const curEle = currentElements[i];

      // text node is the firsChild node in an element 
      // it is null if there is no text
      if(!newEle.isEqualNode(curEle) && newEle.firstChild?.nodeValue.trim() !== ''){ // if changed
        curEle.textContent = newEle.textContent;
      }

      // but still only the text on ui changes and not the acutal attributes

      if(!newEle.isEqualNode(curEle)){
        const newAttributes = Array.from(newEle.attributes);

        newAttributes.forEach((attr)=>{
          curEle.setAttribute(attr.name,attr.value);
        });
      }

    })





  }

  _clearExistingHtml() {
    this._parentElement.innerHTML = "";
  }

  _insertNewHtml(position, markup) {
    this._parentElement.insertAdjacentHTML(position, markup);
  }

  showSpinner() {
    const html = `<div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>`;

    this._clearExistingHtml();
    this._insertNewHtml("afterbegin", html);
  }

  showError(errMessage = this._errorMessage) {
    const html = `<div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${errMessage}</p>
      </div>`;

    this._clearExistingHtml();
    this._insertNewHtml("afterbegin", html);
  }
}
