import icons from "url:../../img/icons.svg";
import View from "./View";

class AddRecipe extends View{

    _parentElement = document.querySelector('.upload');

    _windowElement = document.querySelector('.add-recipe-window');

    _overlayElement = document.querySelector('.overlay');

    _openButton = document.querySelector('.nav__btn--add-recipe');

    _closeButton = document.querySelector('.btn--close-modal')


    constructor(){ // AddRecipe class is a child class
        super();
        this._handleShowModalWindow();
        this._handleHideModalWindow();
    }

    toggleWindow(){
        this._overlayElement.classList.toggle('hidden');
        this._windowElement.classList.toggle('hidden');
    }

    _handleShowModalWindow(){
        this._openButton.addEventListener('click',this.toggleWindow.bind(this));
    }

    _handleHideModalWindow(){
        this._closeButton.addEventListener('click',this.toggleWindow.bind(this));
        this._overlayElement.addEventListener('click',this.toggleWindow.bind(this));
    }
    _generateHtml(){



    }
}

export default new AddRecipe();