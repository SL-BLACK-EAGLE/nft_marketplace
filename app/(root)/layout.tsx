import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Script from 'next/script';

const MainLayout = ({
  children,
}: {
    children: React.ReactNode
}) => (
  <main className="dark:bg-nft-dark bg-white min-h-screen">
    <Navbar />
    <div className="pt-65">
      {children}
    </div>
    <Footer />
    <Script src="https://kit.fontawesome.com/d45b25ceeb.js" crossOrigin="anonymous" />
  </main>

);
export default MainLayout;
