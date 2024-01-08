// this module is handling the search bar
class ViewSearch{
    #parentSearchElement = document.querySelector(".search");

    getQuery(){
        return this.#parentSearchElement.querySelector('.search__field').value;
    }

    clearInput(){
        this.#parentSearchElement.querySelector('.search__field').value = '';
    }

    handleSearchResult(display){
        this.#parentSearchElement.addEventListener('submit',function(e){
            e.preventDefault();

            display();
        });
    }
}

export default new ViewSearch();