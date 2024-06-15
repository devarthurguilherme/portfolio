import { Inter } from "next/font/google";
import "./globals.css";

import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arthur Guilherme",
  description: "Arthur Guilherme Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Header />
        <main clasName="container mx-auto pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
