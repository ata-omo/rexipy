import { API_URL , RESULT_PER_PAGE} from "./config";
import { getJSONdata } from "./helper";

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultPerPage: RESULT_PER_PAGE,
    page: 1
  },
  bookmarks: [],
};

export const loadRecipe = async function (id) {

  try{

      const data = await getJSONdata(`${API_URL}${id}`);
      // console.log(data);
    
      // beautifying the data
    
      const { recipe } = data.data;
    
      state.recipe = {
        id: recipe.id,
        title: recipe.title,
        ingredients: recipe.ingredients,
        servings: recipe.servings,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        cookingTime: recipe.cooking_time,
      };

      // if any of the bookmark has same id as current id then show it as bookmarked.
      if(state.bookmarks.some(bookmark => bookmark.id === id)){
        state.recipe.bookmarked = true;
      }
      else {
        state.recipe.bookmarked = false;
      }
    
      // console.log(recipe);
      // console.log(state.recipe);
  }
  catch(err){
    console.log(err);
    throw err;
  }
};

export const loadSearchResult = async function(query){

  try{
    state.search.query = query;
    const searchData = await getJSONdata(`${API_URL}?search=${query}`);

    if(searchData.results == 0){
      throw new Error('Invalid Search Results Not Found ;)');
    }

    // console.log(searchData);

    state.search.results = searchData.data.recipes.map(recp =>{
        const searchResult ={
          id: recp.id,
          title: recp.title,
          publisher: recp.publisher,
          image: recp.image_url,
        };

        return searchResult;
    });

    // console.log(state.search)


  }
  catch(err){
    throw err;
  }

}

export const getSearchResultPage= function(pageNo=1){

  state.search.page = pageNo;
  const begin = (pageNo-1) * state.search.resultPerPage;
  const end = pageNo * state.search.resultPerPage;

  return state.search.results.slice(begin,end);
}



export const getPaginationData = function(){
  return state.search;
}

export const updateQuantity= function(newServing){

  const oldServing = state.recipe.servings;

  // updating quantities
  state.recipe.ingredients.forEach(ingredient => {

    const oldQuantity = ingredient.quantity;
    const newQuantity = (newServing*oldQuantity)/oldServing;

    ingredient.quantity = newQuantity;
    
  });

  // updating servings

  state.recipe.servings = newServing;
}

export const toggleBookmark = function(recipe){
  // state.bookmarks.push(recipe);
  if(recipe.id === state.recipe.id){
    // state.recipe.bookmarked = true;
    if(state.recipe.bookmarked === false){
      state.bookmarks.push(recipe);
      state.recipe.bookmarked = true;
    }
    else{
      let index = state.bookmarks.indexOf(recipe);
      if(index > -1) {
        state.bookmarks.splice(index,1);
      }
      state.recipe.bookmarked = false;
    }
  }
}
