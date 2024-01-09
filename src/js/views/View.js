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
