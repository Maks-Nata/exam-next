import { FC } from "react";
import { RecipeComponent } from "@/components/recipes-component/RecipeComponent";
import { getRecipeById } from "@/services/api.services";

type Props = {
    params: { id: string };
};

const RecipePage: FC<Props> = async ({ params }) => {
    const recipe = await getRecipeById(Number(params.id));

    return (
        <div>
            {recipe ? <RecipeComponent recipe={recipe} /> : <p>Рецепт не знайдено</p>}
        </div>
    );
};

export default RecipePage;
