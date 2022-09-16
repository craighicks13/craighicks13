import Head from "next/head";
import { useState } from "react";
import Footer from "./footer";
import HeaderHome from "./headers/header-home";
import HeaderOne from "./headers/header-one";

const name = 'Craig Hicks';
export const siteTitle = 'CraigHicks.com Personal Website';

export default function Layout({children, home}: {children: React.ReactNode, home?: boolean}) {

    return (
        <div className="min-h-screen font-normal text-textmain">
            <Head>
                <link rel="icon" href="https://craighicks.com/images/fav.png" />
                <meta name="Personal Website for Craig Hicks" content="Personalized images, drawings, AI image creation, NFTs, email campaigns" />
                <meta property="og:image" content={`https://craighicks.com/images/fav.png`} />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                
            </Head>
            
            <header className={`bg-primary`}>
                                
                {home ? (
                    <HeaderHome />
                ) : (
                    <HeaderOne />
                )}
            </header>
            <main className="flex flex-col gap-2 md:gap-10 px-2 md:px-10 pt-2 md:pt-10 max-w-6xl mx-auto">{children}</main>
            <Footer />
        </div>
    );
}