"use client"; 

import { ReactNode, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './Footer';
import '../styles/globals.css';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <html lang="pt-BR">
      <body className={`bg-[#13131f] text-white ${scrolling ? 'navbar-hidden' : ''}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
