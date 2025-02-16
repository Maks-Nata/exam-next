import Link from "next/link";
import { IUser } from "@/models/user";
import { getUsers } from "@/services/api.services";

type Props = {
    searchParams: { page?: string };
};

const limit = 20;
const UsersComponent = async ({ searchParams }: Props) => {
    const page = Number(searchParams.page) || 1;
    const skip = (page - 1) * limit;
    const { users, total } = await getUsers(limit, skip);
    const totalPages = Math.ceil(total / limit);

    return (
        <div>
            <h2>Список користувачів</h2>
            <ul>
                {users.map((user: IUser) => (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.id} {user.firstName} {user.lastName}
                        </Link>
                    </li>
                ))}
            </ul>
            <div>
                {page > 1 && (
                    <Link href={`/users?page=${page - 1}`} prefetch={false}>
                        <button>Попередня</button>
                    </Link>
                )}
                {page < totalPages && (
                    <Link href={`/users?page=${page + 1}`} prefetch={false}>
                       <button>Наступна</button>
                    </Link>
                )}
            </div>
            <p>Сторінка {page} з {totalPages}</p>
        </div>
    );
};

export default UsersComponent;
