import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sistema de Serviços - MEI Digital",
  description: "Sistema de listagem e contratação de serviços",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
