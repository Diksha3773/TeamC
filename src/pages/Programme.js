import React, { useEffect } from 'react'

function Programme() {
    const Programs = [
        {
            Name: 'Btech',
            Syallbus: [
                { sem: 'I', link: '' },
                { sem: 'II', link: '' },
                { sem: 'III', link: '' },
                { sem: 'IV', link: '' },
                { sem: 'V', link: '' },
                { sem: 'VI', link: '' },
                { sem: 'VII', link: '' },
                { sem: 'VIII', link: '' },
            ]
        }, {
            Name: 'Mtech',
            Syallbus: [
                { sem: 'I', link: '' },
                { sem: 'II', link: '' },
                { sem: 'III', link: '' },
                { sem: 'IV', link: '' },
            ]
        }, {
            Name: 'PhD',
            Syallbus: [
                { sem: 'I', link: '' },
                { sem: 'II', link: '' },
                { sem: 'III', link: '' },
                { sem: 'IV', link: '' },
            ]
        }, {
            Name: 'PG Diploma',
            Syallbus: [
                { sem: 'I', link: '' },
                { sem: 'II', link: '' },
                { sem: 'III', link: '' },
                { sem: 'IV', link: '' },
            ]
        }
    ]
    useEffect(() => {
      window.scroll(0,0);
    }, [])
    
    return (
        <>
            <div className="text-gray-600 body-font w-full h-full">
                <div className="container flex flex-col px-5 py-24 mx-auto"style={{height:"100%"}}>
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Programmes of Study</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">The Institute offers following Undergraduate, Postgraduate and Research Programmes in <b>Computer Science and Engineering</b></p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 -m-4 place-items-center text-center">
                        <div className="p-4 min-w-[250px] max-w-[300px] w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:shadow-lg active:translate-y-[2px] cursor-pointer">
                                <i className="fa fa-graduation-cap text-blue-400 text-5xl m-3"></i>
                                <h2 className="title-font font-medium text-2xl text-gray-900">BTech</h2>
                                <p className="text-sm p-1 leading-relaxed">(Bachelor of Technology)</p>
                            </div>
                        </div>
                        <div className="p-4 min-w-[250px] max-w-[300px] w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:shadow-lg active:translate-y-[2px] cursor-pointer">
                                <i className="fa fa-graduation-cap text-blue-400 text-5xl m-3"></i>
                                <h2 className="title-font font-medium text-2xl text-gray-900">MTech</h2>
                                <p className="text-sm p-1 leading-relaxed">(Master of Technology)</p>
                            </div>
                        </div>
                        <div className="p-4 min-w-[250px] max-w-[300px] w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:shadow-lg active:translate-y-[2px] cursor-pointer">
                                <i className="fa fa-graduation-cap text-blue-400 text-5xl m-3"></i>
                                <h2 className="title-font font-medium text-2xl text-gray-900">PhD</h2>
                                <p className="text-sm p-1 leading-relaxed">(Doctor of Philosophy)</p>
                            </div>
                        </div>
                        <div className="p-4 min-w-[250px] max-w-[300px] w-full">
                            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:shadow-lg active:translate-y-[2px] cursor-pointer">
                                <i className="fa fa-graduation-cap text-blue-400 text-5xl m-3"></i>
                                <h2 className="title-font font-medium text-2xl text-gray-900">PG Diploma</h2>
                                <p className="text-sm p-1 leading-relaxed">(Postgraduate Diploma)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Programme
