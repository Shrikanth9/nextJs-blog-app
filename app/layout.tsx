
import Navbar from "@/components/Navbar";
import "@/assets/styles/global.css";
import Footer from "@/components/Footer";

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
                <Footer />
            </body>
        </html>
    );
}

export default MainLayout;