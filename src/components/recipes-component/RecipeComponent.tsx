import {FC} from "react";
import Link from "next/link";
import {IRecipe} from "@/models/recipe";

interface RecipeComponentProps {
    recipe: IRecipe | null;
}

export const RecipeComponent: FC<RecipeComponentProps> = ({ recipe }) => {
    if (!recipe) {
        return <p>Даних немає</p>; // Показываем, если пользователя не нашли
    }
    return (
        <div>

                <>
                    <h2>Рецепт {recipe.name}</h2>
                    <img src={recipe.image} alt={recipe.name} width="200" />
                    <p>ingredients:{recipe.ingredients}</p>
                    <p>instructions:{recipe.instructions}</p>
                    <p>prepTimeMinutes:{recipe.prepTimeMinutes}</p>
                    <p>cookTimeMinutes:{recipe.cookTimeMinutes}</p>
                    <p>servings:{recipe.servings}</p>
                    <p>difficulty:{recipe.difficulty}</p>
                    <p>cuisine:{recipe.cuisine}</p>
                    <p>caloriesPerServing:{recipe.caloriesPerServing}</p>
                    <p>tags:{recipe.tags}</p><p>rating:{recipe.rating}</p>
                    <p>reviewCount:{recipe.reviewCount}</p>
                    <p>{recipe.mealType}</p>
                    <ul >
                        <Link href={`/users/${recipe.userId}`} ><li>автор рецепта</li></Link>
                    <Link href="/recipes">Назад до списку pецептів </Link>
                    </ul>
                </>

        </div>
    );
};