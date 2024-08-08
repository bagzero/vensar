"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Righteous } from "next/font/google";
import { CustomButton, GradientLine, FlashcardLabel } from './index';
import Image from 'next/image';

const righteous = Righteous({
  weight: '400',
  subsets: ["latin"]
});

const Hero = () => {
  const [charityHovered, setCharityHovered] = useState(false);
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const ref4 = useRef<HTMLDivElement | null>(null);
  const ref5 = useRef<HTMLDivElement | null>(null);
  const ref6 = useRef<HTMLDivElement | null>(null);

  const slideInAnimation: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        if (target === ref1.current || target === ref2.current || target === ref3.current || target === ref4.current || target === ref5.current || target === ref6.current) {
          target.classList.add('animate-slideInBottom');
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

    return () => {
      // Cleanup
      if (ref1.current) observer.unobserve(ref1.current);
      if (ref2.current) observer.unobserve(ref2.current);
      if (ref3.current) observer.unobserve(ref3.current);
      if (ref4.current) observer.unobserve(ref4.current);
      if (ref5.current) observer.unobserve(ref5.current);
      if (ref6.current) observer.unobserve(ref6.current);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center text-center mb-16 mt-10">
        <div className="">
          <div className="flex flex-col items-center">
            <div className="overflow-hidden 2xl:text-[160px] md:text-[130px] text-[70px]">
              <h1 ref={ref1} className={`${righteous.className} white-grad 2xl:max-h-56 md:max-h-40 max-h-24 invisible`}>Ventures</h1>
              <h1 ref={ref2} className={`${righteous.className} purp-grad 2xl:max-h-56 md:max-h-40 max-h-24 invisible animation-delay-150`}>Redefined.</h1>
            </div>

          </div>

        </div>

        <div ref={ref3} className="flex justify-center xl:my-10 md:my-8 my-6 z-10 invisible animation-delay-400">
          <CustomButton
            textPos="right"
            text="Schedule a Call"
            styles="xl:mx-4 mx-3 bg-white flex rounded-xl 2xl:text-xl md:text-[18px] text-xs text-black font-medium hover:shadow-lg hover:shadow-neutral-600 hover:-translate-y-1 tracking-wider"
            imageUrl="/black calendar.png"
            imageSize={"2xl:h-[25px] md:h-[22px] h-[20px]"}
            itemPadding="px-1"
            buttonPadding={'2xl:p-4 md:p-4 p-3'}
            destination="https://calendly.com/"
          />
          {/* <div className="flex flex-col relative"> */}
          {/* <div className="w-3/4 absolute h-10 bg-white top mx-auto" /> */}
          <div
            onMouseEnter={() => setCharityHovered(true)}
            onMouseLeave={() => setCharityHovered(false)}
          >
            <CustomButton
              textPos="left"
              text="View Charity"
              styles="xl:mx-4 mx-3 flex rounded-xl border-solid border border-white 2xl:text-xl md:text-[18px] text-xs text-white font-medium hover:bg-neutral-800 tracking-wider"
              imageUrl="/white right arrow.png"
              imageSize={"2xl:h-[25px] md:h-[22px] h-[20px]"}
              itemPadding="px-1"
              buttonPadding={'2xl:p-4 md:p-4 p-3'}
              destination="charity"
              imageMove={`${charityHovered && "-rotate-45 duration-400"}`}
            />
          </div>
          {/* </div> */}
        </div>

        <div className="flex justify-center relative">
          <h3 ref={ref4} className="text-gray-300 text-center max-w-xl xl:text-sm md:text-sm text-xs invisible animation-delay-500 md:w-auto w-3/4">
            Pioneering the future of business growth, we’re reshaping industries by acquiring and enhancing companies for the new era of global prosperity.
          </h3>
          <div className="absolute">
            <div className="mr-80">
              <div ref={ref5} className="mr-96 invisible animation-delay-600 xl:block hidden">
                <FlashcardLabel
                  text={'Empower your Business Vision with VENSAR.'}
                  variant={'black'}
                  labelPadding={'2xl:px-5 2xl:py-3 px-3 py-3'}
                  textSize={'2xl:text-base text-sm'}
                  styles={'hover:bg-white/35 -mt-8 2xl:mr-96 mr-80'}
                />
              </div>
            </div>
          </div>
        </div>
        <div ref={ref6} className="flex flex-col items-center invisible animation-delay-700">
          <div className="mt-8 mb-6">
            <GradientLine
              width="min-w-20"
            />
          </div>
          <img
            src="/VENSAR black symbol.png"
            alt="logo"
            className="rounded-full xl:h-[50px] h-[40px]"
          />
        </div>
      </div>
    </div >
  )
}

export default Hero