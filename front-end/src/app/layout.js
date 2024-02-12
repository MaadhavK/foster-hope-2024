import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Foster Hope",
  description: "An informational website serving those in foster care in Texas and those wanting to contribute",
};

export default function RootLayout({ children }) {
  return (
    <>
    <NavBar/>
    <main className= {inter.className}>{children}</main>
    </>
  );
}
