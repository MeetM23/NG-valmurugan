import type { Metadata } from "next";
import { Inter, Kaushan_Script, Poppins } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const script = Kaushan_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Velmurugan Fertiliser Company | Fertiliser Manufacturing, 50+ Years",
    template: "%s | Velmurugan Fertiliser Company",
  },
  description:
    "Established fertiliser manufacturer in Villupuram, Tamil Nadu with 50+ years of experience. Granulated, water-soluble and specialty liquid fertilisers for Domestic, Pan-India and International markets.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${script.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-white text-ink">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
