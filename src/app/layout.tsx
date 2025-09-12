import type { Metadata } from "next";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Fira_Code, Bricolage_Grotesque } from "next/font/google";
import "@/assets/styles/globals.css";
import { cn } from "@/libs/utils";

const firaCode = Fira_Code({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-brico-gro",
});

export const metadata: Metadata = {
  title: "Adrien Blandin Portfolio",
  description: "",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={cn(
          firaCode.className,
          bricolageGrotesque.variable,
          "overflow-x-hidden",
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
