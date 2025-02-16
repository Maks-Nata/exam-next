import Menu from "@/components/Menu";


export default function MenuLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <Menu />
            <main className="flex-1 p-4">{children}</main>
        </div>
    );
}