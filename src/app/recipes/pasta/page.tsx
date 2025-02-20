import Link from "next/link";
import { getPastaRecipes } from "@/services/api.services";
import { IRecipe } from "@/models/recipe";

const PastaRecipesPage = async () => {
    const recipes: IRecipe[] = await getPastaRecipes();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <h1 className="text-3xl font-bold text-orange-500 mb-4">Pasta Recipes</h1>

            {recipes.length === 0 ? (
                <p className="text-xl">Немає рецептів</p>
            ) : (
                <div className="w-full max-w-4xl space-y-6">
                    {recipes.map((recipe) => (
                        <div key={recipe.id} className="p-6 bg-white shadow rounded-lg">
                            <h2 className="text-2xl font-bold text-gray-800">{recipe.name}</h2>
                            <img src={recipe.image} alt={recipe.name} className="w-full max-w-lg mt-2 rounded-lg" />
                            <p className="text-gray-700 text-lg"><strong>Інгредієнти:</strong> {recipe.ingredients.join(", ")}</p>
                            <p className="text-gray-700 text-lg"><strong>Інструкції:</strong> {recipe.instructions}</p>
                            <p className="text-gray-700"><strong>Час підготовки:</strong> {recipe.prepTimeMinutes} хв</p>
                            <p className="text-gray-700"><strong>Час приготування:</strong> {recipe.cookTimeMinutes} хв</p>
                            <p className="text-gray-700"><strong>Порції:</strong> {recipe.servings}</p>
                            <p className="text-gray-700"><strong>Складність:</strong> {recipe.difficulty}</p>
                            <p className="text-gray-700"><strong>Кухня:</strong> {recipe.cuisine}</p>
                            <p className="text-gray-700"><strong>Калорії на порцію:</strong> {recipe.caloriesPerServing}</p>
                            <p className="text-gray-700"><strong>Теги:</strong> {recipe.tags.join(", ")}</p>
                            <p className="text-gray-700"><strong>Рейтинг:</strong> {recipe.rating} ⭐</p>
                            <p className="text-gray-700"><strong>Відгуки:</strong> {recipe.reviewCount}</p>

                            <Link href={`/users/${recipe.userId}`} className="text-orange-500 text-xl font-semibold">
                                Автор рецепта
                            </Link>
                        </div>
                    ))}
                </div>
            )}

            <Link href="/recipes" className="mt-6 text-blue-500">Назад до всіх рецептів</Link>
        </div>
    );
};

export default PastaRecipesPage;
