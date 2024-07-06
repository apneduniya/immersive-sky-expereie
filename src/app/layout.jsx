import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Inter as FontSans } from "next/font/google";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Home",
  description: "",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  )
}