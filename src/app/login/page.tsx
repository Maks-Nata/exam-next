"use client";
import "./login.css"
import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";
import {setCookie} from "cookies-next";


export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username, password}),
            });

            if (!res.ok) throw new Error("Неправильний логін або пароль");

            const data = await res.json();


            setCookie("token", data.token, {maxAge: 60 * 60 * 24, path: "/"});
            setCookie("user", JSON.stringify({id: data.id, name: data.firstName}), {
                maxAge: 60 * 60 * 24,
                path: "/",
            });


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
        <div className="login-container">

                <img width="200" height="200" src="https://img.icons8.com/pulsar-line/100/kitchen-room.png" alt="kitchen-room"/>
                <h1 className="login-title">Вхід</h1>



            <form className="login-form" onSubmit={handleLogin}>
                <input className="login-input"
                       type="text"
                       placeholder="Логін"
                       value={username}
                       onChange={(e) => setUsername(e.target.value)}
                       required
                />
                <input className="login-input"
                       type="password"
                       placeholder="Пароль"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       required
                />
                <button className="login-button" type="submit">Увійти</button>
            </form>
            {error && <p style={{color: "red"}}>{error}</p>}
        </div>
    );
}

