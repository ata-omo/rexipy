export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {

  try{
    const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
    
      // console.log(response);
    
      if (!response.ok) {
        throw new Error(`unable to find the recipe`);
      }
      const data = await response.json();
    
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
