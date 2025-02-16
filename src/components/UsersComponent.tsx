import Link from "next/link";
import {IUser} from "@/models/user";
import {getUsers} from "@/services/api.services";

export const UsersComponent = async () => {
    const users=await getUsers()


    return (
        <div>
            <h2>Список користувачів </h2>
            <ul>
                {users.map((user: IUser) => (<li key={user.id}>
                        <Link href={{pathname:'/users/' +user.id.toString(),query:{data:JSON.stringify(user)} } } >
                            {user.id}  {user.firstName} {user.lastName}
                        </Link> </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersComponent;