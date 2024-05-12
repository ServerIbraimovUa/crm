"use client";

import Cart from "@/components/front-end/Cart";
import Feature from "@/components/front-end/Feature";
import Footer from "@/components/front-end/Footer";
import Hero from "@/components/front-end/Hero";
import Navbar from "@/components/front-end/Navbar";
import TrendingProducts from "@/components/front-end/TrendingProducts";
import { useState } from "react";

export default function Home() {
    const [showCart, setShowCart] = useState(false);
    return (
        <>
            <Navbar setShowCart={setShowCart} />
            {showCart && <Cart setShowCart={setShowCart} />}
            <main>
                <Hero />
                <Feature />
                <TrendingProducts />
            </main>
            <Footer />
        </>
    );
}
