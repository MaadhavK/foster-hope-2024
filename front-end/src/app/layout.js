"use client"
import {Inter} from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang = "en">
    <body>
      <NavBar/>
      <main className={inter.className}>{children}</main>
    </body>
    </html>
  );
}
