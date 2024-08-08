"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CustomButton, GradientLine } from '.'
import { Jost } from 'next/font/google'

const jost = Jost({
    weight: ['300', '400', '500'],
    subsets: ["latin"]
});

const Footer = () => {
    const [lucidifyHovered, setLucidifyHovered] = useState(false);

    return (
        <footer className="">
            <div className="w-3/4 mx-auto">
                <div className="flex justify-between xl:flex-row flex-col">
                    <Link href="/" className="flex items-center justify-center">
                        <img
                            src="/VENSAR reg logo.png"
                            alt="logo"
                            className="w-[200px]"
                        />
                    </Link>
                    <div className="xl:block flex justify-center xl:mt-0 mt-8">
                        <div className="inline-flex xl:flex-row flex-col text-xl">
                            <CustomButton
                                text={'Terms of Service'}
                                styles={`bg-transparent flex rounded-full text-white font-medium hover:bg-white/30 ${jost.className}`}
                                itemPadding={''}
                                destination={'/terms-of-service'}
                                buttonPadding={'px-6 py-2'}
                            />
                            <CustomButton
                                text={'Privacy Policy'}
                                styles={`xl:my-0 mt-2 mb-4 xl:ml-3 xl:mr-6 bg-transparent flex rounded-full text-white font-medium hover:bg-white/30 ${jost.className}`}
                                itemPadding={''}
                                destination={'/terms-of-service'}
                                buttonPadding={'px-6 py-2'}
                            />
                            <CustomButton
                                text={'Contact'}
                                styles={`bg-white flex rounded-full text-black font-medium hover:bg-white/90 hover:translate-y-1 ${jost.className}`}
                                itemPadding={''}
                                destination={'/terms-of-service'}
                                buttonPadding={'px-8 py-3'}
                            />
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/50 mt-14 mb-8 xl:w-auto w-full xl:mx-0 mx-auto">
                    <div className="flex justify-between w-full mt-6 xl:flex-row flex-col xl:mx-0 mx-auto xl:text-start text-center md:text-base text-sm">
                        <h1 className="text-white/70">© 2024 VENSAR. All Rights Reserved.</h1>
                        <Link
                            onMouseEnter={() => setLucidifyHovered(true)}
                            onMouseLeave={() => setLucidifyHovered(false)}
                            href="/"
                            className={`flex ${lucidifyHovered ? "text-white" : "text-white/70"} xl:flex-row flex-col xl:mt-0 mt-4`}>
                            Website Designed and Maintained by
                            <b className={`ml-1.5 flex flex-col reg-grad-right`}>
                                Lucidify.
                                <div className="xl:mx-0 mx-auto">
                                    <GradientLine
                                        width={`${lucidifyHovered ? "w-16" : "w-12"}`}
                                    />
                                </div>
                            </b>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer