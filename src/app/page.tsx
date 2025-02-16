import Link from "next/link";

export default function Home() {
  return (

      <div><h1>Ласкаво просимо</h1> <p>Щоб отримати доступ до рецептів Вам потрібно автентифікуватися</p> <Link href="/login">
          <button>Увійти</button>
      </Link></div>
  );
}
