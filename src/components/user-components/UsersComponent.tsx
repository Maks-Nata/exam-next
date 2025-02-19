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
        <div className="flex items-center justify-center flex-col h-screen bg-gray-100">
            <h2  className="text-3xl font-bold text-gray-800">Список користувачів</h2>
            <ul>
                {users.map((user: IUser) => (
                    <li className="text-l" key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.id} {user.firstName} {user.lastName}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="mt-4 flex  gap-2.5">
                {page > 1 && (
                    <Link href={`/users?page=${page - 1}`} prefetch={false} className="block">
                        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-800 transition">
                            Попередня
                        </button>
                    </Link>
                )}
                {page < totalPages && (
                    <Link href={`/users?page=${page + 1}`} prefetch={false} className="block">
                        <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-800 transition">
                            Наступна
                        </button>
                    </Link>
                )}
            </div>

            <p className="text-lg text-gray-600">Сторінка {page} з {totalPages}</p>
        </div>
    );
};

export default UsersComponent;
