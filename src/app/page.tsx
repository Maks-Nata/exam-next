import Link from "next/link";
import "./home.css";

export default function Home() {
    return (

        <div className="home-container">
            <div className="home-about"><img width="200" height="200" src="https://img.icons8.com/dotty/80/chef-cooking.png"
                                             alt="chef-cooking"/>
                <p className="home-history">Я знайомилася з різними людьми і просила дати мені їх кращі рецепти хтось робив, це
                    відразу хтось сказав, що
                    зробить це потім.Тому був створений цей сайт, для того щоб люди змогли в зручний для них час додати свій
                    улюблений рецепт.Рецепти постійно поновлюються.</p>
            </div>
            <h1 className="home-title">Улюблені страви від різних людей</h1>

            <h2 className="home-description">Ласкаво просимо до нашого додатку!</h2>
            <div className="home-container-button"><p className="home-text">Щоб отримати доступ
                до рецептів Вам потрібно автентифікуватися</p> <Link href="/login">
                <button className="home-button">Увійти</button>
            </Link></div>
            </div>
    );
}
