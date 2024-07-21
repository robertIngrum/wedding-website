import "./globals.css";
import Header from "../components/Header";
import { inter } from "../lib/fonts";

export const metadata = {
  title: "Lilly and Robert's Wedding",
  description: "A place for all things Lilly and Robert's wedding.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
