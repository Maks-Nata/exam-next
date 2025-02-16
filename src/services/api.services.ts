import { IUser } from "@/models/user";

const BASE_URL = "https://dummyjson.com";

// 🔹 Получение всех пользователей
export async function getUsers(): Promise<IUser[]> {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) throw new Error("Не вдалося завантажити користувачів");
    const data = await response.json();
    return data.users; // API возвращает объект { users: [...] }
}

// 🔹 Получение пользователя по ID
export async function getUserById(id: string): Promise<IUser | null> {
    console.log("🔹 Вызов getUserById с ID:", id); // ✅ Проверяем входной ID

    try {
        const response = await fetch(`${BASE_URL}/users/${id}`);
        if (!response.ok) throw new Error(" Не вдалося знайти користувача");

        const data = await response.json();
        console.log(" Данные от API:", data); // ✅ Проверяем ответ API

        return data;
    } catch (error) {
        console.error(" Ошибка в getUserById:", error);
        return null;
    }
}
