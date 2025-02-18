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
        <div>
            <h2>Рецепт: {recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} width="200" />
            <p>Інгредієнти: {recipe.ingredients.join(", ")}</p>
            <p>Інструкції: {recipe.instructions}</p>
            <p>Час підготовки: {recipe.prepTimeMinutes} хв</p>
            <p>Час приготування: {recipe.cookTimeMinutes} хв</p>
            <p>Порції: {recipe.servings}</p>
            <p>Складність: {recipe.difficulty}</p>
            <p>Кухня: {recipe.cuisine}</p>
            <p>Калорії на порцію: {recipe.caloriesPerServing}</p>
            <p>Теги: {recipe.tags}</p>
            <p>Рейтинг: {recipe.rating} ⭐</p>
            <p>Відгуки: {recipe.reviewCount}</p>
            <Link href={`/users/${recipe.userId}`}>
                <p>Автор рецепта</p>
            </Link>

            <Link href="/recipes">Назад до списку pецептів</Link>
        </div>
    );
};
