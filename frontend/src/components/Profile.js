import React from 'react'

function Profile() {
    const Data = [
        {
            key: 'Name',
            Title: 'Harsh Verma'
        }, {
            key: 'Designation',
            Title: 'Professor'
        }, {
            key: 'Department',
            Title: 'Computer Science & Engg.'
        }, {
            key: 'Qualifaction',
            Title: "PhD Computer Sc & Engg (Punjab Technical University)"
        }, {
            key: 'Phone',
            Title: '1243456'
        }, {
            key: 'Phone',
            Title: '1243456'
        }, {
            key: 'Phone',
            Title: '1243456'
        }, {
            key: 'Phone',
            Title: '1243456'
        }
    ]
    return (
        <div class="mt-4">
            <div class="relative block h-[400px]">
                <div class="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('https://www.nitj.ac.in/cse/images/carousel/001_1.jpeg')" }}>
                    <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black" ></span>
                </div>
                <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]" style={{ transform: "translateZ(0px)" }}>
                    <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </div>
            <div class="flex flex-col relative py-16 bg-blue-200 h-full">
                <div class="container mx-auto px-4 h-full">
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 -mt-64 shadow-xl rounded-lg">
                        <div class="px-6">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div class="relative w-36 h-36 xl:w-40 xl:h-40 flex-grow-0 flex-shrink-0 -mt-16">
                                        <img src="https://www.nitj.ac.in/images/faculty/20071962443.jpg" class="w-full h-full object-cover object-left-top rounded-full shadow-xl flex-grow-0 flex-shrink-0" alt='...' />
                                    </div>
                                </div>
                                <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">

                                </div>
                                <div class="w-full lg:w-4/12 px-4 lg:order-1">

                                </div>
                            </div>
                            <div class="text-center mt-6">
                                <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                                    Jenna Stones
                                </h3>
                                <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                    Los Angeles, California
                                </div>
                                <div class="w-full md:w-10/12 mx-auto h-64">


                                    <div class="bg-white p-3 shadow-sm rounded-sm">
                                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                            <span clas="text-green-500">
                                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                                </svg>
                                            </span>
                                            <span class="tracking-wide">About</span>
                                        </div>
                                        <div class="text-gray-700 text-start">
                                            <div class="grid md:grid-cols-2 text-sm">
                                                {
                                                    Data.map((item, i) => {
                                                        return (
                                                            <div class="grid grid-cols-2">
                                                                <div class="px-4 py-2 font-semibold">{item.key}</div>
                                                                <div class="px-4 py-2">{item.Title}</div>
                                                            </div>
                                                        )
                                                    })
                                                }


                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div class="mt-5 py-10 border-t border-blue-200 text-center bg-white">
                                <div class="flex flex-wrap justify-center">
                                    <div class="w-full px-4">
                                        <div className='m-2'>
                                            <div className='scrollhide flex items-center snap-x h-16 border-t border-b m-2 overflow-x-auto overflow-y-hidden'>
                                                {
                                                    Data.map((item, i) => {
                                                        return (
                                                            <span className='border snap-center shrink-0 rounded-full px-4 py-2 m-2 w-fit cursor-pointer hover:bg-blue-50 active:translate-y-[1px]'>Other profile Links</span>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div>
                                            <div class="overflow-x-auto relative shadow-md sm:rounded-lg my-2">
                                                <div class="flex justify-between items-center pb-4">
                                                    <div>
                                                        <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" class="m-2 inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5" type="button">
                                                            <svg class="mr-2 w-4 h-4 text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                                                            Last 30 days
                                                            <svg class="ml-2 w-3 h-3" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                                        </button>
                                                        <div id="dropdownRadio" class="hidden hover:block z-10 w-48 bg-white rounded divide-y divide-gray-100 shadow" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style={{ position: "absolute", inset: "0px auto auto 0px", margin: "0px", transform: "translate(0px, 10px)" }}>
                                                            <ul class="p-3 space-y-1 text-sm text-gray-700" aria-labelledby="dropdownRadioButton">
                                                                <li>
                                                                    <div class="flex items-center p-2 rounded hover:bg-gray-100 ">
                                                                        <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  " />
                                                                        <label for="filter-radio-example-1" class="ml-2 w-full text-sm font-medium text-gray-900 rounded">Last day</label>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="flex items-center p-2 rounded hover:bg-gray-100 ">
                                                                        <input checked="" id="filter-radio-example-2" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  " />
                                                                        <label for="filter-radio-example-2" class="ml-2 w-full text-sm font-medium text-gray-900 rounded">Last 7 days</label>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="flex items-center p-2 rounded hover:bg-gray-100">
                                                                        <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                                                        <label for="filter-radio-example-3" class="ml-2 w-full text-sm font-medium text-gray-900 rounded">Last 30 days</label>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="flex items-center p-2 rounded hover:bg-gray-100 ">
                                                                        <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                                                        <label for="filter-radio-example-4" class="ml-2 w-full text-sm font-medium text-gray-900 rounded">Last month</label>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div class="flex items-center p-2 rounded hover:bg-gray-100 ">
                                                                        <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                                                        <label for="filter-radio-example-5" class="ml-2 w-full text-sm font-medium text-gray-900 rounded">Last year</label>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <label for="table-search" class="sr-only">Search</label>
                                                    <div class="relative m-2">
                                                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                            <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                                        </div>
                                                        <input type="text" id="table-search" class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for items" />
                                                    </div>
                                                </div>
                                                <table class="w-full text-sm text-left text-gray-500">
                                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                                        <tr>
                                                            <th scope="col" class="py-3 px-6">
                                                                Product name
                                                            </th>
                                                            <th scope="col" class="py-3 px-6">
                                                                Color
                                                            </th>
                                                            <th scope="col" class="py-3 px-6">
                                                                Category
                                                            </th>
                                                            <th scope="col" class="py-3 px-6">
                                                                Price
                                                            </th>
                                                            <th scope="col" class="py-3 px-6">
                                                                Action
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            Data.map((item, i) => (
                                                                <tr class="bg-white border-b hover:bg-gray-50 ">
                                                                    <th scope="row" class="w-fit py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                                                        Apple MacBook Pro 17"
                                                                    </th>
                                                                    <td class="py-4 px-6">
                                                                        Sliver
                                                                    </td>
                                                                    <td class="py-4 px-6">
                                                                        Laptop
                                                                    </td>
                                                                    <td class="py-4 px-6">
                                                                        $2999
                                                                    </td>
                                                                    <td class="py-4 px-6">
                                                                        <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
