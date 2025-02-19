import { FC } from "react";
import Link from "next/link";
import { IRecipe } from "@/models/recipe";

interface RecipeComponentProps {
    recipe: IRecipe | null;
}

export const RecipeComponent: FC<RecipeComponentProps> = ({ recipe }) => {
    if (!recipe) {
        return <p>Даних немає</p>;
    }

    return (
        <div className="flex items-center justify-center flex-col min-h-screen gap-2">

        <h2 className="text-2xl font-bold text-gray-800">Рецепт: {recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} width="700" />
                       <div className="w-[700px] my-5 mx-auto">
                <p className="text-xl">Інгредієнти: {recipe.ingredients}</p>
                <p className="text-xl">Інструкції: {recipe.instructions}</p>
                <p className="text-l">Час підготовки: {recipe.prepTimeMinutes} хв</p>
                <p className="text-l">Час приготування: {recipe.cookTimeMinutes} хв</p>
                <p className="text-l">Порції: {recipe.servings}</p>
                <p className="text-l">Складність: {recipe.difficulty}</p>
                <p className="text-l">Кухня: {recipe.cuisine}</p>
                <p className="text-l">Калорії на порцію: {recipe.caloriesPerServing}</p>
                <p className="text-l">Теги: {recipe.tags}</p>
                <p className="text-l">Рейтинг: {recipe.rating} </p>
                <p className="text-l">Відгуки: {recipe.reviewCount}</p>
                <Link href={`/users/${recipe.userId}`}>
                    <p className="text-orange-500 text-2xl font-semibold">Автор рецепта</p>
                </Link>
            </div>

            <Link className="text-blue-500" href="/recipes">Назад до списку pецептів</Link>
        </div>

    );
};
