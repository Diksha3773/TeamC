import React from 'react'

function Test() {
    return (
        <>
            <div id="main-image" class="mt-20 h-screen max-h-[1000px] transition-all duration-1000 bg-cover bg-center" style={{backgroundImage: "url('./Img/003.jpg')"}}>
                <div class="bg-gradient-to-b from-accent to-transparent h-full w-full">
                    <div class="flex flex-col items-center justify-center container h-full">
                        <div class="flex flex-col gap-10">
                            <h2 class="uppercase text-white text-4xl text-center">
                                <span class="font-bold">NITJ</span> Welcomes you
                            </h2>
                            <div class="main-slider-text transition-all uppercase font-bold text-white max-w-lg text-6xl text-center">
                                <h2>THE PLACE OF TRANSFORMATION</h2>
                                <h2>78th IN OVERALL NIRF RANKING </h2>
                                <h2>49th IN ENGINEERING NIRF</h2>
                            </div>



                        </div>

                        <div id="tiles" class="flex mt-[10vh] gap-5 w-[90%] items-start">
                            <div class="flex flex-col space-y-4 items-center justify-center w-1/5 h-full px-3 py-5 bg-white shadow rounded-xl">
                                <span class="material-symbols-outlined" style={{fontSize:"48px"}}> school </span>
                                <p class="text-xl whitespace-nowrap text-center text-dark-purple uppercase">Programs</p>
                            </div>
                            <div class="flex flex-col space-y-4 items-center justify-center w-1/5 h-full px-3 py-5 bg-white shadow rounded-xl">
                                <span class="material-symbols-outlined" style={{fontSize:"48px"}}> biotech </span>

                                <p class="text-xl whitespace-nowrap text-center text-dark-purple uppercase">Research</p>
                            </div>
                            <div class="flex flex-col space-y-4 items-center justify-center w-1/5 h-full px-3 py-5 bg-white shadow rounded-xl">
                                <span class="material-symbols-outlined" style={{fontSize:"48px"}}> newspaper</span>

                                <p class="text-xl whitespace-nowrap text-center text-dark-purple uppercase">News</p>
                            </div>
                            <div class="flex flex-col space-y-4 items-center justify-center w-1/5 h-full px-3 py-5 bg-white shadow rounded-xl">
                                <span class="material-symbols-outlined" style={{fontSize:"48px"}}> sports_handball </span>
                                <p class="text-xl whitespace-nowrap text-center text-dark-purple uppercase">campus life</p>
                            </div>
                            <div class="flex flex-col space-y-4 items-center justify-center w-1/5 h-full px-3 py-5 bg-white shadow rounded-xl">
                                <span class="material-symbols-outlined" style={{fontSize:"48px"}}> real_estate_agent </span>
                                <p class="text-xl whitespace-nowrap text-center text-dark-purple uppercase">Placements</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Test
