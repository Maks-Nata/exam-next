import { getRecipes } from "@/services/api.services";
import { IRecipe } from "@/models/recipe";

 const RecipesComponent = async () => {
     const recipes: IRecipe[] = await getRecipes();

     return (
         <div>
            <h1>Список рецептів</h1>
             {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <h3>{recipe.name}</h3>
                    <img src={recipe.image} alt={recipe.name} width="100" />
                </div>
            ))}
        </div>
    );
};

export default RecipesComponent;
