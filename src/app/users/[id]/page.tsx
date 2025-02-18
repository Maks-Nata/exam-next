import { FC } from "react";
import { getUserById, getRecipes } from "@/services/api.services";
import {UserComponent} from "@/components/user-components/UserComponent";



type Props = {
    params: { id: string };
};

const UserPage: FC<Props> = async ({ params }) => {
    const user = await getUserById(Number(params.id));
    const allRecipes = await getRecipes();
    const userRecipes = allRecipes.recipes.filter((recipe) => recipe.userId === user?.id);

    return <UserComponent user={user} recipes={userRecipes} />;
};

export default UserPage;
