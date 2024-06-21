// import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
// import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';
// import url('https://fonts.googleapis.com/css2?  family=Montserrat:ital,wght@0,100;0,200;1,100;1,200&display=swap');

const inter = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
