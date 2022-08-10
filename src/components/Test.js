import React from 'react'
import top2 from './Img/top2.png'
import top3 from './Img/top3.png'
import top4 from './Img/top4.png'
import logo from './Img/logo.png'
import Rect from './Img/rect.png'
import Placement from './Placement'
function Test() {
    return (
        <>
            <div className="flex flex-row items-center justify-center relative">
                <i className="absolute top-1/2 -left-10 -translate-y-1/2 fa-solid fa-angle-left self-center pl-4 text-2xl" onclick="slideCards('left')"></i>
                <div id="cards" className="scrollbar-hide flex space-x-6 overflow-x-scroll pl-1 pt-8">
                    <Placement/>
                </div>
                <i className="fa-solid fa-angle-right self-center p-4 text-2xl" onclick="slideCards('right')"></i>

            </div>

        </>
    )
}

export default Test
