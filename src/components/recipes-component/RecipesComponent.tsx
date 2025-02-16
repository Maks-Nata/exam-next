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
                <ul key={recipe.id}>
                 <Link href={`/recipes/${recipe.id}`} ><li>{recipe.name}</li></Link>
                    <img src={recipe.image} alt={recipe.name} width="100" />
                </ul>
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
