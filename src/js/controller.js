import * as modelData from './model';
import recpview from './views/recipeView';
import srchview from './views/searchView.js';


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

    await modelData.loadSearchResult(query);

    console.log(modelData.state.search.results);
    // clear the field when search is completed
    srchview.clearInput();

  }
  catch (err) {
    console.log(err);
  }
}

displaySearchResult();


const init = function(){
  recpview.eventHandlerRendrer(showRecipe)
  srchview.handleSearchResult(displaySearchResult);
};

init();