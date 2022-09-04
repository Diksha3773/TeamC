import React from 'react'
import bg from '../components/Img/clg1.png'
function AcadCard({Name,Photo}) {
    return (
        <>
            <div className="rounded-md overflow-hidden shadow-xl w-full h-full bg-blue-500">
                <img src={bg} className="w-full" />
                <div className="flex justify-center -mt-12">
                    <img src={Photo} className="w-32 h-32 rounded-full border-solid border-white border-2 -mt-3" />
                </div>
                <div className="text-center px-3 pb-6 pt-2">
                    <h3 className="text-white text-lg font-bold font-sans">{Name} </h3>
                    <p className="mt-2 font-sans text-white">Assistant Professor</p>
                </div>
                <div className="flex justify-center pb-3 text-white">
                    <div className="text-center mr-3 border-r pr-3">
                        <div className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-300 mx-1 flex items-center justify-center"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                    </div>
                    <div className="text-center mr-3 border-r pr-3">
                        <div className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-300 mx-1 flex items-center justify-center"><i className="fa fa-square-phone" aria-hidden="true"></i></div>
                    </div>
                    <div className="text-center mr-3 border-r pr-3">
                        <div className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-300 mx-1 flex items-center justify-center"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
                    </div>
                    <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-300 mx-1 flex items-center justify-center"><i className="fa fa-instagram" aria-hidden="true"></i></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AcadCard
