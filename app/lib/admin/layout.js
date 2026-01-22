import Header from "../../ui/components/Header";

export default function AdminLayout({ children }) {
    return (
        <div className="p-2">
            <Header />
            <main className="p-6">{children}</main>
        </div>
    );
}
