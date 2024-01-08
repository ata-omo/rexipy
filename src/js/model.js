import { API_URL } from "./config";
import { getJSONdata } from "./helper";

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
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
    
      console.log(recipe);
      console.log(state.recipe);
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
