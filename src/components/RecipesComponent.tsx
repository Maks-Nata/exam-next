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
        <div>
            <h1>Список рецептів</h1>
            {recipes.map((recipe: IRecipe) => (
                <div key={recipe.id}>
                    <h3>{recipe.name}</h3>
                    <img src={recipe.image} alt={recipe.name} width="100" />
                </div>
            ))}
            <div>
                {page > 1 && (
                    <Link href={`/recipes?page=${page - 1}`}>
                        <button> Попередня</button>
                    </Link>
                )}
                {page < totalPages && (
                    <Link href={`/recipes?page=${page + 1}`}>
                      <button>Наступна</button>
                    </Link>
                )}
            </div>
            <p>Сторінка {page} з {totalPages}</p>
        </div>
    );
}
