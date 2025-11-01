import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Jaden Portfolio",
  description: "Personal portfolio built with Next.js and TailwindCSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
