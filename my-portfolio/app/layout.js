import "./globals.css";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Portfólio | Noemi Soares"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main style={{ paddingTop: "80px" }}>{children}</main>
        <footer className="site-footer">
          <small>© {new Date().getFullYear()} Noemi Soares</small>
        </footer>
      </body>
    </html>
  );
}