
import Navbar from "@/components/Navbar";
import "@/assets/styles/global.css";

export const metadata = {
    title: "Property Pulse",
    description: "Property Pulse",
    keywords: "Rent, property, lease",
}
const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html>
            <body>
                <Navbar />
                <main>
                    { children }
                </main>
            </body>
        </html>
    );
}

export default MainLayout;