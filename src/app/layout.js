import { Poppins } from 'next/font/google';
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import API from '@/api/API';

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

async function getSetting() {
  try {
    const res = await API.get(`/settings`)
    return res.data
  } catch (e) {
    return e.response.data;
  }
}

export const revalidate = +process.env.time;


export default async function RootLayout({ children }) {

  const setting = await getSetting()

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main className='mt-2 md:mt-3 min-h-screen mb-10'>
          {children}
        </main>
        <Footer setting={setting} />
      </body>
    </html>
  );
}
