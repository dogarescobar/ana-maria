import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "AM Movilidad & Longevidad | Fisioterapia a domicilio en Bogotá",
  description:
    "AM Movilidad & Longevidad brinda servicios de fisioterapia y bienestar a domicilio con atención profesional, tecnología y enfoque integral en salud, rehabilitación y calidad de vida.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
