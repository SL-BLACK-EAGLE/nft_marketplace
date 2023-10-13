import ThemeProviderWrapper from "@/app/theme-provider";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import {ThemeProvider} from "next-themes";

export default function MainLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <main className="dark:bg-nft-dark bg-white min-h-screen">
                    <Navbar/>
                    <div className="pt-65">
                        {children}
                    </div>
                    <Footer />

                <Script src="https://kit.fontawesome.com/d45b25ceeb.js" crossorigin="anonymous" />
        </main>


    )
}