import { API_URL } from "./config";
import { getJSONdata } from "./helper";

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {

  try{

      const data = await getJSONdata(`${API_URL}/${id}`);
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
  }
};
