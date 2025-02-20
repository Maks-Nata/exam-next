import { getRecipes } from "@/services/api.services";
import { IRecipe } from "@/models/recipe";
import Link from "next/link";

type Props = {
    searchParams: { page?: string };
};

const limit = 10;

export default async function RecipesComponent({ searchParams }: Props) {
    const page = Number(searchParams.page) || 1;
    const skip = (page - 1) * limit;
    const { recipes, total } = await getRecipes(limit, skip);
    const totalPages = Math.ceil(total / limit);
    return (
        <div className="flex flex-wrap flex-col md:flex-row gap-4">
            <h1 className="w-full text-3xl font-bold text-gray-800 text-center">Список рецептів:</h1>
            <div className="w-full text-center my-4">
                <Link href="/recipes/pakistani">
                    <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                        Переглянути Pakistani рецепти
                    </button>
                </Link>
            </div>
            {recipes.map((recipe: IRecipe) => (
                <ul className="flex items-center justify-start border p-4 w-full md:w-[48%]" key={recipe.id}>
                    <div className="flex flex-col items-start justify-start space-y-4">
                        <p>Натисніть назву рецепта.</p>
                        <p>Ти дізнаєшся більш детальну інформацію.</p>
                        <Link className="text-blue-500" href={`/recipes/${recipe.id}`}>
                            <li>Назва рецепта: {recipe.name}</li>
                        </Link>
                        <li className="text-l">Теги: {recipe.tags.join(", ")}</li>
                    </div>
                    <img src={recipe.image} alt={recipe.name} width="250" />
                </ul>
            ))}
            <div className="w-full flex justify-between mt-4">
                {page > 1 && (
                    <Link href={`/recipes?page=${page - 1}`}>
                        <button className="px-4 py-2 bg-gray-200 rounded">Попередня</button>
                    </Link>
                )}
                {page < totalPages && (
                    <Link href={`/recipes?page=${page + 1}`}>
                        <button className="px-4 py-2 bg-gray-200 rounded">Наступна</button>
                    </Link>
                )}
            </div>
            <p className="w-full text-center">Сторінка {page} з {totalPages}</p>
        </div>

    );
}
