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
            <div className='w-full h-full flex flex-col flex-auto items-center p-2 my-4'>
                <div className='text-2xl underline underline-offset-8 font-medium p-2 m-2 mb-4 text-center'>Programs of Study</div>
                {
                    Programs.map((item, i) => {
                        return (
                            <div key={i} className='w-full flex flex-col rounded m-1 text-lg font-medium border border-blue-200 shadow-lg group'>
                                <div className='w-full flex justify-between items-center bg-blue-300 p-2 rounded-t'>
                                    <span>{item.Name}</span>
                                    <svg className="text-gray-800 group-hover:hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 7.5L10 12.5L5 7.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    <svg className="text-gray-800 hidden group-hover:block" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="6 15 12 9 18 15"></polyline></svg>
                                </div>
                                <div className='max-h-0 overflow-hidden transition-transform group-hover:max-h-max group-hover:block p-2'>
                                    <h1 className='text-2xl font-medium text-center p-2 m-2 underline underline-offset-4'>New Curriculum</h1>
                                    <h2 className='m-2 p-1 text-lg'>{item.Name} Syallbus</h2>
                                    <div className='flex flex-col'>
                                        {
                                            item.Syallbus.map((items, j) => {
                                                return (
                                                    <a key={j} href={items.link} className='px-4 cursor-pointer inline-block text-orange-700 hover:text-orange-500 underline underline-offset-4'><li>Semester {items.sem}</li></a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Programme
