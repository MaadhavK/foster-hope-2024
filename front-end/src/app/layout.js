'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang = "en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <body>
      <NavBar/>
      <main className={inter.className}>{children}</main>
    </body>
    </html>
  );
}
