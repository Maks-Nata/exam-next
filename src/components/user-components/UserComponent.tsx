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
        <div>
            <h2>Більш детальна інформація о користувачеві</h2>
            <img src={user.image} alt={user.firstName} width="100" />
            <p>Імя: {user.firstName}</p>
            <p>Прізвище: {user.lastName}</p>
            <p>По батькові: {user.maidenName}</p>
            <p>Стать: {user.gender}</p>
            <p>Вік: {user.age}</p>
            <p>День народження: {user.birthDate}</p>
            <p>Email: {user.email}</p>

            <h3>Рецепти користувача:</h3>
            {userRecipes.length > 0 ? (
                <ul>
                    {userRecipes.map((recipe) => (
                        <li key={recipe.id}>
                            <Link href={`/recipes/${recipe.id}`}>{recipe.name}</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Немає опублікованого рецепту</p>
            )}

            <Link href="/users">Назад до списку користувачів</Link>
        </div>
    );
};