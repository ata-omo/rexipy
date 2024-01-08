// this module is handling the search bar
class ViewSearch{
    _parentSearchElement = document.querySelector(".search");

    getQuery(){
        return this._parentSearchElement.querySelector('.search__field').value;
    }

    clearInput(){
        this._parentSearchElement.querySelector('.search__field').value = '';
    }

    handleSearchResult(display){
        this._parentSearchElement.addEventListener('submit',function(e){
            e.preventDefault();

            display();
        });
    }
}

export default new ViewSearch();