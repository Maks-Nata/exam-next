import Menu from "@/components/Menu";
import UsersComponent from "@/components/user-components/UsersComponent";

export default function UsersPage({ searchParams }: { searchParams: { page?: string } }) {
    return (
        <div>
            <Menu />
            <hr />
            <UsersComponent searchParams={searchParams} />
        </div>
    );
}
