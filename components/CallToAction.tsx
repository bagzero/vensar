"use client"
import React, { useEffect, useRef } from 'react'
import { Rubik, Montserrat } from 'next/font/google'
import { CustomButton, GradientLine } from '.';

const rubik = Rubik({
    weight: ['300', '400', '500'],
    subsets: ["latin"]
});

const montserrat = Montserrat({
    weight: ['300', '400', '500'],
    subsets: ["latin"]
})

const CallToAction = () => {
    const ref1 = useRef<HTMLDivElement | null>(null);
    const ref2 = useRef<HTMLDivElement | null>(null);
    const ref3 = useRef<HTMLDivElement | null>(null);
    const ref4 = useRef<HTMLDivElement | null>(null);

    const slideInAnimation: IntersectionObserverCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target as HTMLElement;
                if (target === ref1.current || target === ref2.current || target === ref3.current) {
                    target.classList.add('animate-slideInBottom');
                }
                observer.unobserve(target);
                if (target === ref4.current) {
                    target.classList.add('animate-slideInGradientLine');
                }
                observer.unobserve(target)
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

        return () => {
            // Cleanup
            if (ref1.current) observer.unobserve(ref1.current);
            if (ref2.current) observer.unobserve(ref2.current);
            if (ref3.current) observer.unobserve(ref3.current);
            if (ref4.current) observer.unobserve(ref4.current);
        };
    }, []);

    return (
        <div className="max-w-7xl mx-auto 2xl:mb-40 lg:mb-20 mb-16">
            <div className="w-screen-xl purp-glow-image">
                <div className="flex flex-col justify-center max-w-xl md:w-auto w-5/6 mx-auto text-center font-light md:h-[750px] h-[650px]">
                    <div ref={ref1} className={`invisible md:text-5xl text-3xl ${rubik.className} mb-8`}>
                        <h1 className="">
                            Discover the Future of
                        </h1>
                        <h1 className="my-1.5">
                            Your <b className="purp-grad2 font-normal">Business Vision</b>
                        </h1>
                        <h1 className="">
                            Through VENSAR.
                        </h1>
                    </div>
                    <h3 ref={ref2} className="invisible animation-delay-100 md:text-sm text-xs text-white/70 leading-6">
                        Are you ready to take your company to the next level? Let’s embark on a transformative journey together with BGINTL, where innovation meets strategy to unlock your business's full potential.
                    </h3>
                    <div ref={ref3} className="invisible animation-delay-200 flex justify-center">
                        <CustomButton
                            text="Let's Work Together"
                            styles={`bg-gradient-to-r flex rounded-full md:text-lg text-sm text-white font-medium hover:bg-white/90 hover:translate-y-1 mt-6 ${montserrat.className}`}
                            gradient={true}
                            itemPadding={''}
                            destination={'/terms-of-service'}
                            buttonPadding={'md:px-8 md:py-3 px-6 py-2'}
                        />
                    </div>
                    <div ref={ref4} className="invisible animation-delay-300 flex justify-center mt-8">
                        <GradientLine width="w-32" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CallToAction