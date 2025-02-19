import React from "react";
import Link from "next/link";

const Menu = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex justify-center space-x-4">
                <Link href="/recipes" className="text-white hover:text-yellow-400 transition">
                    Усі рецепти
                </Link>
                <Link href="/users" className="text-white hover:text-yellow-400 transition">
                    Усі користувачі
                </Link>
                <Link href="/" className="text-white hover:text-red-400 transition">
                    Вийти
                </Link>
            </div>
        </nav>
    );
};

export default Menu;

