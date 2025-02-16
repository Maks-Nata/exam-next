import Link from "next/link";
import {getUsers} from "@/services/api.services";


export default async function UsersPage() {
    const users = await getUsers();

    return (
        <div>
            <h1>Список користувачів</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <p>{user.id} {user.firstName} {user.lastName}</p>
                        <Link href={`/users/${user.id}`}>
                            <button>Детальніше</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
