import { getUserById } from "@/services/api.services";
import { UserComponent } from "@/components/UserComponent";

type Props = {
    params: { id: string };
};

const UserPage = async ({ params }: Props) => {
    const user = await getUserById(Number(params.id));

    return (
        <div>
            <UserComponent user={user} />
        </div>
    );
};

export default UserPage;
