"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getCookie, deleteCookie } from "cookies-next";

// Определяем тип для пользователя
interface User {
    firstName: string;
    lastName: string;
    image: string;
    // Дополнительные поля, если они есть
}

export default function Menu() {
    const [user, setUser] = useState<User | null>(null); // Используем тип User или null

    useEffect(() => {
        const fetchUser = () => {
            try {
                const storedUser = getCookie("user");
                if (storedUser) {
                    // Проверяем, что storedUser является строкой, перед тем как парсить
                    setUser(typeof storedUser === "string" ? JSON.parse(storedUser) : null);
                }
            } catch (error) {
                console.error("Ошибка", error);
                deleteCookie("user");
            }
        };

        fetchUser();
    }, []);

    const handleLogout = () => {
        deleteCookie("token");
        deleteCookie("user");
        setUser(null);
    };

    return (
        <nav>
            <Link href="/recipes">Усі рецепти</Link>
            <Link href="/users">Усі користувачі</Link>
            {user ? (
                <>
                    <img src={user.image} alt={user.firstName} style={{ width: 40, borderRadius: "50%" }} />
                    <span>{user.firstName}</span>
                    <button onClick={handleLogout}>Вийти</button>
                </>
            ) : (
                <Link href="/login">Увійти</Link>
            )}
        </nav>
    );
}
