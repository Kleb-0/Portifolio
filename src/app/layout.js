import NavBar from "@/components/navbar";
import "@/styles/globals.css"
import "@/styles/reset.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-y-scroll lg:overflow-y-hidden">
        <NavBar />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
