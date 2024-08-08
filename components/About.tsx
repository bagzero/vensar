"use client"
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Rubik, Inter } from 'next/font/google'
import { CustomButton, GradientLine } from '.';

const rubik = Rubik({
    weight: '300',
    subsets: ["latin"]
});

const inter = Inter({
    weight: ['300', '400'],
    subsets: ["latin"]
});

const text = [
    "VENSAR is a venture conglomerate working towards building the next generation of wealth and society while empowering global progress. Our goal is to empower the world in various fields.",
    "We are not just investors; we’re partners in transformation. Our model is unique: we acquire businesses, implement strategic enhancements, and ultimately bring the potential to success.",
    "Our mission is quite simple: To build a future where businesses don’t just survive, but thrive, contributing to a prosperous economy and society. We are committed to empowering businesses globally, leveraging our expertise to create a ripple effect of advancement and wealth generation."
]

const About = () => {
    const ref1 = useRef<HTMLDivElement | null>(null);
    const ref2 = useRef<HTMLDivElement | null>(null);
    const ref3 = useRef<HTMLDivElement | null>(null);
    const ref4 = useRef<HTMLDivElement | null>(null);
    const ref5 = useRef<HTMLDivElement | null>(null);

    const slideInAnimation: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target as HTMLElement;
                if (target === ref1.current) {
                    target.classList.add('animate-slideInBottom');
                }
                if (target === ref2.current || target === ref3.current || target === ref4.current) {
                    target.classList.add('animate-slideInRight');
                }
                if (target === ref5.current) {
                    target.classList.add('animate-slideInGradientLine');
                }
                observer.unobserve(target);
            }
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(slideInAnimation, {
            threshold: 0.1,
        });

        if (ref1.current) observer.observe(ref1.current);
        if (ref2.current) observer.observe(ref2.current);
        if (ref3.current) observer.observe(ref3.current);
        if (ref4.current) observer.observe(ref4.current);
        if (ref5.current) observer.observe(ref5.current);

        return () => {
            // Cleanup
            if (ref1.current) observer.unobserve(ref1.current);
            if (ref2.current) observer.unobserve(ref2.current);
            if (ref3.current) observer.unobserve(ref3.current);
            if (ref4.current) observer.unobserve(ref4.current);
            if (ref5.current) observer.unobserve(ref5.current);
        };
    }, []);

    return (
        <div className="">
            <div className="2xl:max-w-6xl xl:max-w-5xl mx-auto mt-32 md:mb-52 mb-28 flex xl:flex-row flex-col justify-between items-center">
                <div ref={ref1} className="invisible">
                    <img
                        src="/cube.jpg"
                        alt=""
                        className="rounded-2xl xl:h-[488px] md:h-[450px] h-[300px]"
                    />
                </div>

                <div className="max-w-lg xl:text-start text-center">
                    <h1 ref={ref2} className={`invisible ${rubik.className} xl:text-5xl md:text-5xl text-4xl md:mb-8 mb-6 xl:mt-0 md:mt-12 mt-8`}>What We Do<b style={{ color: 'var(--purple)' }}>.</b></h1>
                    <div ref={ref3} className='invisible animation-delay-100 md:max-w-full max-w-80'>
                        {text.map((para: string): JSX.Element => {
                            return (
                                <h3 className={`${inter.className} md:text-sm text-xs mb-4 font-light`}>
                                    {para}
                                </h3>
                            )
                        })}
                    </div>
                    <div ref={ref4} className=" invisible animation-delay-200 mt-8">
                        <CustomButton
                            text={'Learn More'}
                            styles={'bg-gradient-to-br from-indigo-400 to-indigo-500/85 rounded-md text-white md:text-lg text-sm shadow-sm shadow-indigo-800 hover:shadow-indigo-800 hover:shadow-lg hover:-translate-y-1 hover:translate-x-0.5 active:scale-95 xl:m-0 mx-auto'}
                            textPos={'left'}
                            imageUrl="/white diagonal arrow.png"
                            imageSize="md:h-[18px] h-[16px]"
                            itemPadding={'px-1'}
                            buttonPadding={'md:p-3.5 p-3'}
                            destination={'/about'}
                        />
                    </div>

                </div>
            </div>
            <div ref={ref5} className="invisible flex justify-center">
                <GradientLine
                    width="min-w-80"
                    reverse={true}
                />
            </div>
        </div>
    )
}

export default About