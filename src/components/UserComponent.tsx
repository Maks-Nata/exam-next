import Link from "next/link";
import {IUser} from "@/models/user";
import {FC} from "react";

interface UserComponentProps {
    user: IUser | null;
}

export const UserComponent: FC<UserComponentProps> = ({ user }) => {
    return (
        <div>
            {user ? (
                <>
                    <h2>Більш детальна інформація о користувачеві</h2>
                    <img src={user.image} alt={user.firstName} width="100"/>
                    <p>Імя: {user.firstName}</p>
                    <p>Прізвище: {user.lastName}</p>
                    <p>По батькові: {user.maidenName}</p>
                    <p>Стать:{user.gender}</p>
                    <p>Вік: {user.age}</p>
                    <p>День народження: {user.birthDate}</p>
                    <p>Email: {user.email}</p>
                    <Link href="/users">Назад до списку користувачів</Link>
                </>
            ) : (
                <p>Даних немає</p>
            )}
        </div>
    );
};