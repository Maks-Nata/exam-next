


    import React from 'react';
    import Link from "next/link";

    const Menu = () => {
        return (
            <div>
                <nav>
                    <Link href="/recipes">Усі рецепти</Link>
                    <Link href="/users">Усі користувачі</Link>
                    <Link href="/">Вийти</Link>

                </nav>
            </div>
        );
    };

    export default Menu;