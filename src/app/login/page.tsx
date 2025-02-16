"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            if (!res.ok) throw new Error("Неправильний логін або пароль");

            const data = await res.json();

            // Сохраняем токен и пользователя в куки
            setCookie("token", data.token, { maxAge: 60 * 60 * 24, path: "/" });
            setCookie("user", JSON.stringify({ id: data.id, name: data.firstName }), {
                maxAge: 60 * 60 * 24,
                path: "/",
            });

            // Делаем клиентский редирект
            router.push("/users");
        } catch (err: unknown) {  //
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Сталася невідома помилка");
            }
        }
    };


    return (
        <div>
            <h1>Вхід</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Логін"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Увійти</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}
