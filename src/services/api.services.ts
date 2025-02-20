import { IUser } from "@/models/user";
import {IRecipe} from "@/models/recipe";

export const BASE_URL = "https://dummyjson.com";


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

export async function getUserById(id: number): Promise<IUser | null> {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    if (!response.ok) return null;
    return await response.json();
}
export async function getRecipeById(id: number): Promise<IRecipe | null> {
    const response = await fetch(`${BASE_URL}/recipes/${id}`);
    if (!response.ok) return null;
    return await response.json();
}
export async function getPakistaniRecipes(): Promise<IRecipe[]> {
    const response = await fetch(`${BASE_URL}/recipes/tag/Pakistani`);
    if (!response.ok) throw new Error("Не вдалося завантажити рецепти");
    const data = await response.json();
    return data.recipes; //
}