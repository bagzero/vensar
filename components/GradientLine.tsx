import React from 'react'

type GradientLineProps = {
    width: string;
    reverse?: boolean;
}

const GradientLine:React.FC<GradientLineProps> = ({
    width,
    reverse = false
}) => {

    const gradientDirection = reverse ? 'to left' : 'to right';

    return (
        <div className={`${width}`} style={{
            height: '1px',
            background: `linear-gradient(${gradientDirection}, var(--pink), var(--purple))`,
        }} />
    )
}

export default GradientLine