import React from 'react'
import { Rajdhani, Inter, Jost } from 'next/font/google'

const inter = Inter({
    weight: ['300', '400'],
    subsets: ["latin"]
});

const jost = Jost({
    weight: ['300', '400'],
    subsets: ["latin"]
});

const rajdhani = Rajdhani({
    weight: ['400'],
    subsets: ["latin"]
});


type LabelProps = {
    text: string;
    variant: "white" | "black";
    labelPadding: string;
    textSize: string;
    fontFamily: string;
    styles: string;
}

const Label:React.FC<LabelProps> = ({
    text,
    variant,
    labelPadding,
    textSize,
    fontFamily,
    styles
}) => {
    return (
        <div className={`${variant === "white" ? "text-black bg-white" : "text-white bg-black"} ${styles} rounded-3xl`}>
            <h1 className={`${labelPadding} ${textSize} ${fontFamily}`}>{text}</h1>
        </div>
    )
}

export default Label