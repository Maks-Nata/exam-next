import { IUser } from "@/models/user";
import {IRecipe} from "@/models/recipe";

const BASE_URL = "https://dummyjson.com";


export async function getUsers(limit = 20, skip = 0): Promise<{users:IUser[],total: number}> {
    const response = await fetch(`${BASE_URL}/users?limit=${limit}&skip=${skip}`);
    if (!response.ok) throw new Error("Не вдалося завантажити користувачів");
    const data = await response.json();
    return {users:data.users,total:data.total};
}
export async function getRecipes(limit = 10, skip = 0): Promise<{ recipes: IRecipe[], total: number }> {
    const response = await fetch(`${BASE_URL}/recipes?limit=${limit}&skip=${skip}`);
    if (!response.ok) throw new Error("Не вдалося завантажити рецепти");
    const data = await response.json();
    return { recipes: data.recipes, total: data.total };
}

