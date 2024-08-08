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
    weight: ['400', '500'],
    subsets: ["latin"]
});


type LabelProps = {
    text: string;
    variant: "white" | "black";
    labelPadding: string;
    textSize: string;
    fontFamily?: "rajdhani" | "jost" | "inter";
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
        <div className={`${variant === "white" ? "text-black bg-white" : "text-white border border-white border-solid"} rounded-full ${styles}`}>
            <h1 className={`${labelPadding} ${textSize} ${fontFamily === "rajdhani" ? `${rajdhani.className} font-medium` : (fontFamily === "jost" ? jost.className : (fontFamily === "inter" && inter.className))}`}>{text}</h1>
        </div>
    )
}

export default Label