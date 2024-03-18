import { Poppins } from 'next/font/google';
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['600']
});

export const metadata = {
  title: "Amir Ashour",
  description: "Amir Ashour Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
