"use client"

import Image from 'next/image';
import React, { useState } from 'react'
import FlashcardLabel from './FlashcardLabel';
import FlashcardDescription from './FlashcardDescription';

export type FlashcardProps = {
    label: string;
    description: string;
    imageUrl: string;
    borderColor: string;
    styles: string;
}

const Flashcard: React.FC<FlashcardProps> = ({
    label,
    description,
    imageUrl,
    borderColor,
    styles,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`relative ${styles} cursor-crosshair flashcard-hover overflow-hidden`}>
            <div onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`md:h-[288px] md:w-[448px] h-[193px] w-[320px] overflow-hidden flex justify-center items-center rounded-2xl border border-solid ${borderColor}`}>
                <img
                    src={imageUrl}
                    alt=""
                    className={"image-hover object-cover min-w-full min-h-full"}
                />
                <FlashcardLabel
                    text={label}
                    variant={'white'}
                    labelPadding={'md:py-3 md:px-5 py-2 px-4'}
                    textSize={'md:text-xl text-sm'}
                    fontFamily='rajdhani'
                    styles="absolute bottom-6 md:left-6 left-4 shadow-lg shadow-black/60 label-hover"
                />
                <FlashcardDescription
                    text={description}
                    variant={'black'}
                    labelPadding={'md:px-5 md:py-6 px-3 py-4'}
                    textSize={'md:text-base text-xs'}
                    fontFamily={'rajdhani'}
                    styles={`absolute md:bottom-24 md:left-6 bottom-[70px] left-4 shadow-lg shadow-black/60 description-hover md:max-w-96 max-w-72 border border-solid border-black ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-40'}`}
                />
            </div>

        </div>
    )
}

export default Flashcard