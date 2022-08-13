import React, { useEffect, useState } from 'react'
import first from './Img/homepage.jpg'
import sec from './Img/003.jpg'
import third from './Img/02.jpeg'
import four from './Img/002.jpg'
import five from './Img/002.png'
import six from './Img/03.jpeg'
// import Script from '@gumgum/react-script-tag';
function Imagesroll() {
    const image = [
        first,
        sec,
        third,
        four,
        five,
        six
    ]
    const [value, setValue] = useState(0);
    var divStyle = {
        backgroundImage: 'url(' + image[value] + ')'
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setValue(() => ((value === 5 ? 0 : value + 1)));
        }, 6000);
        return () => clearInterval(interval);
    }, [value])
    return (
        <>
            <div id="main-image" className="mt-0 md:mt-4 h-[30vw] md:h-[78vh] w-full max-h-[1000px] transition-all duration-1000 bg-cover bg-center" style={divStyle}>
                <div className="bg-gradient-to-b from-accent to-transparent h-full w-full">
                    <div className="flex flex-col items-center justify-center container" style={{ height: "100%" }}>
                        <div className="flex flex-col gap-10">
                            <h2 className="text-white text-5xl text-center">
                                <span className="font-bold">NITJ</span> Welcomes you
                            </h2>
                            <div className="main-slider-text transition-all font-bold text-white max-w-lg text-4xl text-center">
                                <h6>Computer Science and Engineering</h6>
                                {/* <h2>78<sup>th</sup> IN OVERALL NIRF RANKING </h2>
                                <h2>49<sup>th</sup> IN ENGINEERING NIRF</h2> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <Script
                src="./NewNav.js"
                type="text/javascript"
                async
            /> */}
        </>
    )
}

export default Imagesroll
