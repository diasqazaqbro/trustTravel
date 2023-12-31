import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./styles/index.sass";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Providers } from "./provider/provider";
const inter = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "TrustTravel",
  description: "Generated by diasqazaqbro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
