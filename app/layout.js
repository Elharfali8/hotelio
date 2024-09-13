
import { Header } from "@/components";
import "./globals.css";



export const metadata = {
  title: "Hotelio",
  description: "Hotel booking",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
      <Header />
        {children}
      </body>
    </html>
  );
}
