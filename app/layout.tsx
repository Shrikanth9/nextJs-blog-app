
import Navbar from "@/components/Navbar";
import "@/assets/styles/global.css";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
    title: "Property Pulse",
    description: "Property Pulse",
    keywords: "Rent, property, lease",
}
const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthProvider>
           <html>
                <body>
                    <Navbar />
                    <main>
                        { children }
                    </main>
                    <Footer />
                    <ToastContainer />
                </body>
           </html>
        </AuthProvider>
    );
}

export default MainLayout;