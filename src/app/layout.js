import NavBar from "@/components/navbar";
import "@/styles/globals.css"
import "@/styles/reset.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
