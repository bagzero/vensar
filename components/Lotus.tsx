import Image from 'next/image'
import React from 'react'

const Lotus = () => {
    return (
        <div className="w-full absolute top-96 left-96 justify-center -z-10 xl:flex hidden">
            <div className="ml-96 mt-6 max-w-screen-2xl flex justify-end">
                <img
                    src={'/homepage lotus.jpg'}
                    alt={''}
                    className="-rotate-45"
                    style={{ width: "500px" }}
                />
            </div>
        </div>
    )
}

export default Lotus