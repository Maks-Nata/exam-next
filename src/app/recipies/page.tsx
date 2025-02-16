// app/recipes/page.tsx (Серверный компонент)
import {IRecipe} from "@/models/recipe";

const baseUrl = "https://dummyjson.com/auth";

async function fetchRecipes() {
    const response = await fetch(`${baseUrl}/recipes`, {
        headers: {
            Authorization: `Bearer ${process.env.DUMMY_API_TOKEN}`,
        },
    });
    if (!response.ok) throw new Error("Failed to fetch recipes");
    return response.json();
}

export default async function RecipesPage() {
    const data = await fetchRecipes();
    const recipes = data.recipes;

    return (
        <div>
            <h1>Список Рецептів</h1>
            <ul>
                {recipes.map((recipe: IRecipe) => (
                    <li key={recipe.id}>
                        <img src={recipe.image} alt={recipe.name} width={400} />
                        <h3>{recipe.name}</h3>
                        <p>Теги: {recipe.tags.join(", ")}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
