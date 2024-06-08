import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const inter = Poppins({ subsets: ["latin"], weight: ["600"] });

export const metadata = {
  title: "To Do List",
  description: "ToDo's",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
