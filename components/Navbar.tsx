"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Jost, Montserrat } from 'next/font/google'
import { GradientLine } from '.';
import Link from 'next/link';

const jost = Jost({
    weight: '400',
    subsets: ["latin"]
});

const montserrat = Montserrat({
    weight: ['300', '400', '500'],
    subsets: ["latin"]
})


const Navbar = () => {
    const [rightHovered, setRightHovered] = useState(false);
    const ref1 = useRef<HTMLDivElement | null>(null);

    const slideInTop: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target as HTMLElement;
                target.classList.add('animate-slideInTop');
                observer.unobserve(target);
            }
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(slideInTop, {
            threshold: 0.1,
        });

        if (ref1.current) observer.observe(ref1.current);

        return () => {
            // Cleanup
            if (ref1.current) observer.unobserve(ref1.current);
        };
    }, []);

    return (
        <header className="flex justify-center z-10">
            <nav ref={ref1} className="invisible flex justify-center rounded-full xl:w-2/3 w-3/4 border-solid border border-stone-800 mt-6 bg-white/10">
                <span className="flex w-11/12 justify-between my-4">
                    <Link href="/" className="flex items-center">
                        <img
                            src="/VENSAR reg logo.png"
                            alt="logo"
                            className="xl:w-[180px] md:w-[140px] w-[100px]"
                        />
                    </Link>
                    <Link href="/contact"
                        onMouseEnter={() => setRightHovered(true)}
                        onMouseLeave={() => setRightHovered(false)}
                        className="flex items-center">
                        <div>
                            <div className={`xl:text-lg md:text-base text-xs mr-3 tracking-wide ${jost.className} animated-text}`}>
                                GET IN TOUCH
                            </div>
                            <div className={`${rightHovered && "translate-x-7"}`}>
                                <GradientLine width={'xl:w-24 md:w-20 w-16'} />
                            </div>
                        </div>
                        <div className={`gradient-border rounded-full -rotate-45 ${rightHovered && "translate-x-1 -translate-y-1 duration-600"}`}>
                            <div>
                                <img
                                    src="/white right arrow3.png"
                                    alt="arrow"
                                    className={`m-1 md:w-[14px] w-[10px]`}
                                />
                            </div>
                        </div>
                    </Link>
                </span>

            </nav>
        </header>
    )
}

export default Navbar