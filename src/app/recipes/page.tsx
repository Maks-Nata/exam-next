import RecipesComponent from "@/components/RecipesComponent";
import Menu from "@/components/Menu";

export default function RecipesPage({ searchParams }: { searchParams: { page?: string } }) {
    return (
        <div>
            <Menu />
            <hr />
            <RecipesComponent searchParams={searchParams} />
        </div>
    );
}
