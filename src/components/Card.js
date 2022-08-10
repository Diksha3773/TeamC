
import React from 'react'
const Card = ({ title, body }) => {
    return (
        <div id="club-card" className="overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="flex w-full flex-col items-stretch justify-start sm:flex-row">
                <div className={"w-2/5 bg-[url('https://qph.cf2.quoracdn.net/main-qimg-d0139b5cabcff7d5adad435605016120-lq')] bg-cover bg-center bg-no-repeat"}>
                </div>
                <div className="flex flex-col p-6 w-3/5">
                    <div className="flex flex-col items-start justify-start space-y-3">
                        <h4 className="text-2xl font-bold uppercase">{title}</h4>
                        <div className="flex items-start justify-start rounded-full border-2 border-lime-500 bg-lime-100 px-2 py-0.5 mt-2">
                            <p className="text-xs font-bold uppercase text-lime-500">{title}</p>
                        </div>
                        <p className="line-clamp-3 leading-5">{body}
                        </p>
                    </div>
                    <div className="mt-5 flex items-center justify-start space-x-3">
                        <a className="uppercase cursor-pointer font-semibold text-sm text-sky-500">Learn more
                            <span>→</span></a>
                    </div>
                </div>
            </div>
        </div>
        // <div className="container w-full min-h-fit mx-auto flex flex-col items-center justify-center">
        //     <div v-for="card in cards" className="flex flex-col 2xl:flex-row overflow-hidden bg-white border items-center justify-center rounded-lg shadow-lg  mt-4 w-100 mx-2">
        //         <div className="h-full w-full flex items-center justify-center">
        //             <img className="inset-0 h-32 object-cover object-center" src={image} alt='' />
        //         </div>
        //         <div className="w-full text-justify py-2 px-6 text-gray-800 flex flex-col justify-between">
        //             <h3 className="font-semibold text-xl my-1 leading-tight truncate">{title}</h3>
        //             <p className="mt-1">
        //                 {body}
        //             </p>
        //             <div className='block  m-0 lg:m-1 p-1'>
        //                 <button className=' float-right text-green-500 hover:font-semibold hover:text-blue-700'>Read More  &rarr;</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Card