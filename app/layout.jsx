import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

//component
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrains = JetBrains_Mono({
  subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
})
import ChatBot from "@/components/ChatBot";

export const metadata = {
  title: "Moein-Portfolio",
  description: "portfolio ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetBrains.variable} antialiased`}
      >
        <Header />
        {/* <StairTransition /> */}
        {/* <PageTransition> */}
        {children}
        {/* </PageTransition> */}
        <ChatBot />
      </body>
    </html>
  );
} 
