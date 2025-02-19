import Link from "next/link";
import { IUser } from "@/models/user";
import { IRecipe } from "@/models/recipe";
import { FC } from "react";

interface UserComponentProps {
    user: IUser | null;
    recipes: IRecipe[];
}

export const UserComponent: FC<UserComponentProps> = ({ user, recipes }) => {
    if (!user) {
        return <p>Даних немає</p>;
    }

    const userRecipes = recipes.filter((recipe) => recipe.userId === user.id);

    return (
        <div className="flex items-center justify-center flex-col h-screen bg-gray-100 gap-2">
            <h2 className="text-3xl font-bold text-gray-800">Більш детальна інформація о користувачеві:</h2>
            <img src={user.image} alt={user.firstName} width="100" />
            <p className="text-xl ">Імя: {user.firstName}</p>
            <p className="text-xl ">Прізвище: {user.lastName}</p>
            <p className="text-xl ">По батькові: {user.maidenName}</p>
            <p className="text-xl ">Стать: {user.gender}</p>
            <p className="text-xl ">Вік: {user.age}</p>
            <p className="text-xl ">День народження: {user.birthDate}</p>
            <p className="text-xl ">Email: {user.email}</p>

            <h3 className="text-orange-500 text-2xl font-semibold">Рецепти користувача:</h3>
            {userRecipes.length > 0 ? (
                <ul>
                    {userRecipes.map((recipe) => (
                        <li key={recipe.id}>
                            <Link href={`/recipes/${recipe.id}`}>{recipe.name}</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p  className="text-xl ">Немає опублікованого рецепту</p>
            )}

            <Link  className="text-blue-500 " href="/users">Назад до списку користувачів</Link>
        </div>
    );
};