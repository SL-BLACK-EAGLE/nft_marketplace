import ThemeProviderWrapper from "@/app/theme-provider";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <main>
            <Navbar/>
            {children}
            <Footer/>
        </main>


    )
}