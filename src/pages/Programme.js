import React from 'react'

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
            Name: 'Phd',
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
    return (
        <>
            <div className="flex flex-col w-full h-full mb-3">
                <div className="w-full flex items-center justify-center p-4 mt-4">
                    <h1 class="mt-10 text-4xl italic font-semibold">Programme of Study</h1>
                </div>
                <hr className='mb-1' />
                <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-3 p-2 gap-2 antialiased text-gray-900">
                    {
                        Programs.map((item, i) => {
                            return (
                                <div key={i} className="flex flex-col items-center justify-center p-1 shadow-xl mt-4 rounded-2xl bg-gradient-to-r from-red-400 to-red-600 group h-[177px] hover:h-full">
                                    <div className="flex flex-col justify-end h-full p-6 bg-gray-900 sm:p-8 rounded-xl w-full">
                                        <div className="mt-4">
                                            <h5 className="mt-2 text-xl font-bold text-white">
                                                {item.Name}
                                            </h5>
                                            <div className="flex items-center justify-between mt-6">
                                                <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                                                    Curriculum
                                                </p>
                                                <span className="flex space-x-1 ml-2">
                                                    <span className="inline-block rounded-full p-1 text-white text-xs font-medium px-3 py-1.5 bg-gray-800">
                                                        Just Hover Card
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group-hover:flex flex-col justify-end h-full p-6 bg-gray-900 sm:p-8 rounded-b-xl -mt-2 w-[98%] hidden delay-200">
                                        <ul className='grid grid-cols-2 gap-2'>
                                            {
                                                item.Syallbus.map((item1, j) => {
                                                    return (
                                                        <a key={j} href={item1.link}><li className='p-1 mx-1 underline text-white'>Sem {item1.sem}</li></a>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Programme
