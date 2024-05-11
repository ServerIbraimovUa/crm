import React from "react";

const Hero = () => {
    return (
        <section className="bg-[#e3edf6] mt-4">
            <div className="container grid md:grid-cols-2 py-8">
                <div className="flex items-center">
                    <div className="max-w-[450px] space-y-4">
                        <p className="text-topHeadingSecondary">
                            Starting at <span className="font-bold">$999.00</span>
                        </p>
                        <h1 className="text-topHeadingPrimary font-bold text-4xl md:text-5xl ">
                            The best note book collection 2024
                        </h1>
                        <h2 className="text-2xl font-['Oregano',cursive]">
                            Exclusive offer <span className="text-red-600">-10%</span> off this week
                        </h2>
                        <a
                            href="#"
                            className="inline-block bg-white rounded-md px-6 py-6 hover:bg-accent hover:text-white"
                        >
                            Show Now
                        </a>
                    </div>
                </div>
                <div>
                    <img src="/hero.webp" alt="" className="h-full" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
