import Script from 'next/script';
import { Footer, Navbar } from '@/components';

const MainLayout = ({ children }) => (
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
