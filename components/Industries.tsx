"use client"
import React, { useEffect, useRef } from 'react'
import { Flashcard } from '.';
import { Jost, Rubik } from 'next/font/google';

const jost = Jost({
    weight: ['300', '400', '500'],
    subsets: ["latin"]
});

const rubik = Rubik({
    weight: ['300', '400', '500'],
    subsets: ["latin"]
});

const FlashcardDelays = ["animation-delay-100", "animation-delay-200", "animation-delay-300", "animation-delay-400", "animation-delay-500", "animation-delay-600"]
const FlashcardNames = ["VENSAR Health", "VenTech Ventures", "VENSAR Industrial", "VENSAR Consulting", "VENSAR Infrastructure", "VENSAR Logistics"];
const FlashcardUrls = ["/Health Industry.webp", "/Tech Industry.jpg", "/Industrial Industry.jpeg", "/Consulting Industry.jpeg", "/Infrastructure Industry.jpg", "/Logistics Industry2.avif"]
const FlashcardBorders = ["border-amber-900", "border-blue-700", "border-blue-900", "border-blue-700", "border-purple-700", "border-red-950"]
const FlashcardDescriptions = [
    "Acquires and enhances companies specializing in digital health, personalized medicine, and mental health services, aiming for revolutionary care solutions.",
    "Focuses on tech firms leading in AI, cybersecurity, quantum computing, 5G, and EV technologies, driving innovation across digital and physical realms.",
    "Targets sustainable manufacturing innovators in 3D printing, renewable energy equipment, and bio-degradable products, advancing eco-friendly production.",
    "Consolidates expertise in environmental sustainability, cybersecurity, and digital transformation consulting to empower businesses with cutting-edge strategies.",
    "Acquires construction firms with green building solutions, emphasizing sustainable infrastructure and green HVAC systems for future-ready projects.",
    "Revolutionizes logistics with acquisitions in drone and autonomous vehicle delivery, focusing on sustainable, efficient cargo transport and smart warehousing.",
]

const Industries = () => {
    const ref1 = useRef<HTMLDivElement | null>(null);
    const ref2 = useRef<HTMLDivElement | null>(null);
    const ref3 = useRef<HTMLDivElement | null>(null);
    const ref4 = useRef<HTMLDivElement | null>(null);
    const ref5 = useRef<HTMLDivElement | null>(null);
    const ref6 = useRef<HTMLDivElement | null>(null);
    const ref7 = useRef<HTMLDivElement | null>(null);

    const slideInAnimation: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target as HTMLElement;
                if (target === ref1.current) {
                    target.classList.add('animate-slideInLeft');
                }
                if (target === ref2.current) {
                    target.classList.add('animate-slideIn');
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
        if (ref6.current) observer.observe(ref6.current);
        if (ref7.current) observer.observe(ref7.current);

        return () => {
            // Cleanup
            if (ref1.current) observer.unobserve(ref1.current);
            if (ref2.current) observer.unobserve(ref2.current);
            if (ref3.current) observer.unobserve(ref3.current);
            if (ref4.current) observer.unobserve(ref4.current);
            if (ref5.current) observer.unobserve(ref5.current);
            if (ref6.current) observer.unobserve(ref6.current);
            if (ref7.current) observer.unobserve(ref7.current);
        };
    }, []);


    return (
        <div className="flex flex-col items-center 2xl:my-40 md:mt-40 md:mb-20 mt-24 my-10">
            <div style={{ minWidth: "70%" }}>
                <div ref={ref1} className={`invisible flex ${jost.className} md:text-2xl text-lg mb-8 font-normal tracking-wide`}>
                    <h1 className="reg-grad font-medium">INDUSTRIES</h1>
                    <h1 className="ml-1.5">WE WORK WITH.</h1>
                </div>
            </div>
            <div className="">
                <div ref={ref2} className="invisible animation-delay-200 flex flex-wrap justify-center">
                    {FlashcardNames.map((card: string, index): JSX.Element => {
                        return (
                            <div className={FlashcardDelays[index]}>
                                <Flashcard
                                    label={card}
                                    description={FlashcardDescriptions[index]}
                                    imageUrl={FlashcardUrls[index]}
                                    borderColor={FlashcardBorders[index]}
                                    styles="mx-4 my-5"
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Industries