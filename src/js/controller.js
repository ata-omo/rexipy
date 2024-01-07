import * as modelData from './model';
import view from './views/recipeView';



const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};


///////////////////////////////////////

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

showRecipe();

window.addEventListener('hashchange' , showRecipe);
window.addEventListener('load' , showRecipe );