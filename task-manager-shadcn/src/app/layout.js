import "./globals.css";
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Task Manager",
  description: "powered by ANKIT SINGH YADAV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <CustomNavbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
