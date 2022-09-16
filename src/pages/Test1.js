import React from 'react'
import AcadCard from './AcadCard'
function Test1() {
    const CoordinatorList = [
        {
            Name: "Dr. Geeta Sikha",
            Photo: "https://www.nitj.ac.in/images/faculty/20071962443.jpg",
            Phone: "",
            Email: "",
            Insta: "",
            Linkdein: ""
        }, {
            Name: "Dr. AmritPal Singh",
            Photo: "https://www.nitj.ac.in/images/faculty/21010923445.jpg",
            Phone: "",
            Email: "",
            Insta: "",
            Linkdein: ""
        }, {
            Name: "Dr. K P Sharma",
            Photo: "https://www.nitj.ac.in/images/faculty/22020989592.jpg",
            Phone: "",
            Email: "",
            Insta: "",
            Linkdein: ""
        }, {
            Name: "Dr. Kuldeep Kumar",
            Photo: "https://www.nitj.ac.in/images/faculty/18012437847.jpg",
            Phone: "",
            Email: "",
            Insta: "",
            Linkdein: ""
        }, {
            Name: "Dr. Prashant Kumar",
            Photo: "https://www.nitj.ac.in/images/faculty/20112211529.jpg",
            Phone: "",
            Email: "",
            Insta: "",
            Linkdein: ""
        }, {
            Name: "Dr. Rajneesh Rani",
            Photo: "https://www.nitj.ac.in/images/faculty/22012989244.jpg",
            Phone: "",
            Email: "",
            Insta: "",
            Linkdein: ""
        },
    ]
    return (
        <>
            <div class="w-full max-w-full flex-grow mt-24">
                <h1 class="font-bold text-left text-[rgba(0,105,140,1)] text-[2em] mx-6">Non Teaching Staff</h1>
                <div className='grid grid-cols-2 w-full place-items-center mx-auto'>
                    {
                        CoordinatorList.map((item, i) => {
                            return (
                                <a key={i} class="flex flex-col flex-grow items-center content-center mt-0 text-inherit max-w-md" href="#" id="1RK1995NTS06">

                                    <div class="flex md:flex-row border-t-0 text-[rgba(0,105,140,1)] max-w-min py-8 text-left text-base items-center content-center px-[18px]">
                                        <div class="w-36 h-36 flex-grow-0 flex-shrink-0">
                                            <img src={item.Photo} class="w-full h-full object-cover object-left-top rounded-full shadow-xl flex-grow-0 flex-shrink-0" />
                                        </div>
                                        <div class="flex flex-col flex-grow leading-8 mr-5 md:justify-start md:mt-0 md:ml-9 md:mb-0 w-52">
                                            <div class="text-[22.5px]">{item.Name}</div>
                                            <div class="font-semibold text-[rgba(0,0,0,0.7)] tracking-wide">Assistant Professor</div>
                                            <div class="font-normal text-[rgba(0,0,0,0.7)] tracking-wide">rkkashap@nitj.ac.in</div>
                                        </div>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Test1
