import * as modelData from './model';
import recpview from './views/recipeView';
import srchview from './views/searchView.js';
import resultview from './views/resultView.js'; 
import pageview from './views/paginationView.js';
import bookmarkview from './views/bookmarkView.js';


// if(module.hot){
//   module.hot.accept();
// }

const showRecipe = async function () {
  try {

    // getting the dynamyc id from the search bar after the hash change 

    const id = window.location.hash.slice(1);

    if(!id) return;

    // loading animation
    recpview.showSpinner(); 


    await modelData.loadRecipe(id); // not necessary to store in any variable

    // if success then we have access to the state 
    // rendering the fetched data
    recpview.render(modelData.state.recipe);


  } catch (err) {
    console.log(err);
    recpview.showError();
  }
};

const displaySearchResult= async function(){
  try{

    const query= srchview.getQuery();

    if(!query) return;

    resultview.showSpinner();
    await modelData.loadSearchResult(query);

    // console.log(modelData.state.search.results);
    // clear the field when search is completed
    srchview.clearInput();

    // render search result
    resultview.render(modelData.getSearchResultPage());

    // render pagination

    pageview.render(modelData.getPaginationData());


  }
  catch (err) {
    console.log(err);
  }
}

const handlePageBtnClick = function(goToPage){
  
  // render new search result on button click
  resultview.render(modelData.getSearchResultPage(goToPage));

  // render new pagination buttons on button click

  pageview.render(modelData.getPaginationData());


}

const handleServingBtnClick = function(newServing){
  modelData.updateQuantity(newServing);
  // render the updated data
  // recpview.render(modelData.state.recipe);

  // just update the changes without rendering whole component
  recpview.update(modelData.state.recipe);
}


const handleToggleBookmark = function(){
  modelData.toggleBookmark(modelData.state.recipe);
  
  recpview.update(modelData.state.recipe);
  bookmarkview.render(modelData.state.bookmarks);
}

const handleBookmarkOnLoad = function(){
  bookmarkview.render(modelData.state.bookmarks);
}




const init = function(){ // activating the page
  bookmarkview.handleLocalBookmark(handleBookmarkOnLoad);
  recpview.eventHandlerRendrer(showRecipe)
  srchview.handleSearchResult(displaySearchResult);
  pageview.renderOnBtnClick(handlePageBtnClick);
  recpview.servingChangeHandler(handleServingBtnClick);
  recpview.bookmarkHandler(handleToggleBookmark);

};

init();