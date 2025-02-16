import { IUser } from "@/models/user";
import {IRecipe} from "@/models/recipe";

const BASE_URL = "https://dummyjson.com";


export async function getUsers(): Promise<IUser[]> {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) throw new Error("Не вдалося завантажити користувачів");
    const data = await response.json();
    return data.users;
}
// export async function getRecipes(): Promise<IRecipe[]> {
//     const response = await fetch(`${BASE_URL}/recipes`);
//     if (!response.ok) throw new Error("Не вдалося завантажити користувачів");
//     const data = await response.json();
//     return data.recipes;
// }
export async function getRecipes(): Promise<IRecipe[]> {
    const url = `${BASE_URL}/recipes`;
    console.log("Запрос к API: ", url);  // Логируем URL запроса

    const response = await fetch(url);
    console.log("Ответ от API: ", response); // Логируем объект ответа

    if (!response.ok) {
        console.error("Ошибка при получении данных:", response.status); // Логируем ошибку, если она произошла
        throw new Error("Не вдалося завантажити рецепти");
    }

    const data = await response.json();
    console.log("Данные, полученные от API: ", data); // Логируем полученные данные

    return data.recipes;  // Убедитесь, что в ответе действительно есть поле `recipes`
}
