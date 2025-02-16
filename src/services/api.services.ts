import { IUser } from "@/models/user";

const BASE_URL = "https://dummyjson.com";


export async function getUsers(): Promise<IUser[]> {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) throw new Error("Не вдалося завантажити користувачів");
    const data = await response.json();
    return data.users;
}

