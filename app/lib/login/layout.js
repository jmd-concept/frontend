import Header from "../../ui/components/Header";

export default function LoginLayout({ children }) {
    return (
        <div className="p-2">
            <Header />
            <main className="p-6">{children}</main>
        </div>
    );
}
