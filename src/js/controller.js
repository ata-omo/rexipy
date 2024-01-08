import * as modelData from './model';
import view from './views/recipeView';


const showRecipe = async function () {
  try {

    // getting the dynamyc id from the search bar after the hash change 

    const id = window.location.hash.slice(1);

    if(!id) return;

    // loading animation
    view.showSpinner();

    await modelData.loadRecipe(id); // not necessary to store in any variable

    // if success then we have access to the state 
    // rendering the fetched data
    view.render(modelData.state.recipe);


  } catch (err) {
    console.log(err);
  }
};


const init = function(){
  view.eventHandlerRendrer(showRecipe)
};

init();