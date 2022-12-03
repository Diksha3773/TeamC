import React, { useEffect } from 'react'
import rect from './Img/rect.png'
import logo from './Img/logo.png'
import './Newnavbar.css'
function Navbar() {
    const handlescroll = () => {
        const institute_name = document.getElementsByClassName('institute_name')
        // const full_navbar = document.getElementsByTagName('header')
        const logo = document.getElementById('logo_250')
        const topbar = document.getElementById('top_bar')
        const diff_lang = document.getElementsByClassName('mySlides')
        // animateValueIntiator()
        // animateValueIntiatorInstitute()
        // resAutoScroll()

        if (window.scrollY > 100) {
            topbar.style.transform = 'translateY(-50px)'
            for (let i = 0; i < diff_lang.length; i++) {
                diff_lang[i].classList.remove('mt-7')
            }
            for (let i = 0; i < institute_name.length; i++) {
                if (window.innerWidth > 620) {
                    logo.style.width = '90px'
                    logo.style.height = '90px'
                }
                logo.classList.remove('top-9')
                logo.classList.add('top-0', 'py-4')
                logo.classList.remove('sm:translate-y-0')
                if (institute_name[i].classList.contains('sm:text-xl')) {
                    institute_name[i].classList.remove('sm:text-xl')
                    institute_name[i].classList.add('sm:text-lg')
                    institute_name[i].classList.add('tracking-widest')
                } else if (institute_name[i].classList.contains('sm:text-lg')) {
                    institute_name[i].classList.remove('sm:text-lg')
                    institute_name[i].classList.add('sm:text-sm')
                    institute_name[i].classList.remove('tracking-widest')
                }
            }
        } else {
            logo.style.width = '120px'
            logo.style.height = '120px'
            topbar.style.transform = 'translateY(0)'
            for (let i = 0; i < diff_lang.length; i++) {
                diff_lang[i].classList.add('mt-7')
            }
            logo.classList.add('sm:translate-y-0')
            logo.classList.add('top-9')
            logo.classList.remove('top-0', 'py-4')
            for (var i = 0; i < institute_name.length; i++) {
                // console.log(institute_name[i].classList);
                if (institute_name[i].classList.contains('sm:text-lg')) {
                    institute_name[i].classList.remove('sm:text-lg')
                    institute_name[i].classList.add('sm:text-xl')
                    institute_name[i].classList.remove('tracking-widest')
                } else if (institute_name[i].classList.contains('sm:text-sm')) {
                    institute_name[i].classList.remove('sm:text-sm')
                    institute_name[i].classList.add('sm:text-lg')
                    institute_name[i].classList.remove('tracking-widest')
                } else if (institute_name[i].classList.contains('sm:text-lg')) {
                }
            }
        }
    }
    var slideIndex = 0;
    const carousel=() => {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > x.length) {
        slideIndex = 1;
      }
      x[slideIndex - 1].style.display = "block";
      setTimeout(carousel, 5000);
    }
    useEffect(() => {
        window.addEventListener('scroll', handlescroll);
        carousel();
    }, [carousel])
    return (
        <>
            {/* <!-- Menu for mobile starts--> */}
            <div className="p-0 top-0 flex items-start justify-start h-full w-full z-10 fixed bg-transparent backdrop-blur-2xl"
                id="nav-menu" style={{ display: "none" }}>
                <div id="menu" className="h-screen w-3/4 z-10 relative">
                    <div className="menu-content w-3/4 z-40 bg-accent h-full relative">
                        <div className="top-bar h-1/6">
                            <div className="menu-btn z-50 flex justify-end py-4 px-4">
                                <div className="line bg-white w-[20px] h-[2px] rotate-45 absolute"></div>
                                <div className="line bg-white w-[20px] h-[2px] -rotate-45"></div>
                            </div>
                        </div>
                        <ul className="flex flex-col items-start w-full px-1 py-0 z-50">
                            <li className="menu-link selected w-full px-1 py-0 select-none text-white">
                                <a href="">Home</a>
                            </li>
                            <li className="menu-link w-full px-1 py-2 select-none text-white">
                                <a href="">Contact Us</a>
                            </li>
                            <li className="menu-link w-full px-1 py-2 select-none text-white">
                                <a href="">About Us</a>
                            </li>
                        </ul>
                        <button id="dropdown-button" data-dropdown-toggle="dropdown"
                            className="z-10 inline-flex flex-shrink-0 items-center rounded-l-lg border border-gray-300 bg-gray-100 py-2.5 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                            type="button">
                            All categories
                            <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>
                        <div id="dropdown"
                            className="absolute z-10 hidden w-44 translate-y-11 divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700"
                            data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                <li>
                                    <button id="dropdown-button" data-dropdown-toggle="dropdown"
                                        className="z-10 inline-flex flex-shrink-0 items-center rounded-l-lg border border-gray-300 bg-gray-100 py-2.5 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                        type="button">
                                        All categories
                                        <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                    <div id="dropdown2"
                                        className="absolute z-10 hidden w-44 translate-y-11 divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700"
                                        data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                            <li>
                                                <button type="button"
                                                    className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Links
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button"
                                                    className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Library
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button"
                                                    className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Research
                                                </button>
                                            </li>
                                            <li>
                                                <button type="button"
                                                    className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                    Everything
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <button type="button"
                                        className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Links
                                    </button>
                                </li>
                                <li>
                                    <button type="button"
                                        className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Library
                                    </button>
                                </li>
                                <li>
                                    <button type="button"
                                        className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Research
                                    </button>
                                </li>
                                <li>
                                    <button type="button"
                                        className="inline-flex w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Everything
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="extra-links absolute bottom-1.5 left-0 w-full select-none flex flex-col align-middle justify-center">
                            <a className="text-center text-white" href="/">Privacy Policy</a>

                            <a className="text-center text-white" href="/">Terms & conditions</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Menu for mobile ends--> */}
            <header className="fixed bg-white top-0 right-0 left-0 z-50">
                {/* <!-- TOP NAV BAR stats --> */}
                <div id="top_bar"
                    className="absolute top-0 right-0 left-0 transition-transform delay-200 h-7 bg-accent py-0.5 px-2 sm:px-12 text-xs uppercase text-white shadow-md">
                    <div className="container mx-auto flex flex-row justify-between">
                        <div className="basis-1/2">
                            <div className="flex flex-row justify-center gap-4 sm:gap-6">
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined">
                                        engineering
                                    </span>
                                    <a href="" className="hidden sm:block pl-1.5 text-xs">Jobs</a>
                                </div>
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined">
                                        add_business
                                    </span>
                                    <a href="" className="hidden sm:block pl-1.5 text-xs">Tenders</a>
                                </div>
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined">
                                        badge
                                    </span>
                                    <a href="" className="hidden sm:block pl-1.5 text-xs">Placements</a>
                                </div>
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined">
                                        event_note
                                    </span>
                                    <a href="" className="hidden sm:block pl-1.5 text-xs">Resources</a>
                                </div>
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined">
                                        psychology_alt
                                    </span>
                                    <a href="" className="hidden sm:block pl-1.5 text-xs">Help</a>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/2 sm:pl-8 pl-1">
                            <div className="flex flex-row gap-4 justify-between">
                                <div className="hidden sm:flex basis-1/6 gap-4 flex-row items-center">
                                    <a href="https://www.facebook.com/NITJofficial"><i className="fa-brands fa-facebook text-lg"></i></a>
                                    <a href="https://www.instagram.com/nitjofficial/"><i className="fa-brands fa-instagram text-lg"></i></a>
                                    <a href="https://twitter.com/NITJofficial"><i className="fa-brands fa-twitter text-lg"></i></a>
                                </div>
                                <div className="flex sm:basis-1/3 basis-1/2 justify-center items-center">
                                    <span className="material-symbols-outlined">
                                        g_translate
                                    </span>
                                    <a href="" className="hidden sm:block pl-1">हिन्दी / <span className="text-lg">A</span>+A-</a>
                                </div>
                                <div className="flex sm:basis-1/3 basis-1/2 justify-center items-center">
                                    <span className="material-symbols-outlined">
                                        contacts
                                    </span>
                                    <a href="" className="hidden sm:block pl-1.5 text-xs">ERP</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- top nav bar ends -->
    <!-- INSTITUTE LOGO & NAME starts --> */}
                <div className="relative sm:px-0 px-20 sm:w-full container p-0 left-[10px] sm:left-0 h-14 max-h-14 sm:h-max sm:max-h-max mx-auto">
                    <div className="mySlides mt-7">
                        <div className="align-center flex flex-row justify-end sm:justify-between bg-white py-2.5">
                            <div
                                className="institute_name sm:max-w-lg sm:basis-1/2 justify-start text-center sm:text-lg font-semibold uppercase hidden sm:block">
                                <p>Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR</p>
                            </div>
                            <div
                                className="institute_name flex sm:max-w-lg sm:basis-1/2 justify-end sm:px-16 text-center text-sm sm:text-xl font-bold uppercase">
                                <p>डॉ बी आर अंबेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर</p>
                            </div>
                        </div>
                    </div>
                    <div className="mySlides mt-7">
                        <div className="align-center flex flex-row justify-end sm:justify-between bg-white py-2.5">
                            <div
                                className="institute_name sm:max-w-lg sm:basis-1/2 justify-center px-16 text-center sm:text-xl font-bold uppercase hidden sm:block">
                                <p>डॉ बी आर अंबेडकर राष्ट्रीय प्रौद्योगिकी संस्थान जालंधर</p>
                            </div>
                            <div
                                className="institute_name flex sm:max-w-lg sm:basis-1/2 justify-center sm:px-8 text-center text-sm sm:text-xl font-bold uppercase">
                                <p>ਡਾ ਬੀ ਆਰ ਅੰਬੇਡਕਰ ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਟੈਕਨਾਲੋਜੀ ਜਲੰਧਰ</p>
                            </div>
                        </div>
                    </div>
                    <div className="mySlides mt-7">
                        <div className="align-center flex flex-row justify-end sm:justify-between bg-white py-2.5">
                            <div
                                className="institute_name sm:max-w-lg sm:basis-1/2 justify-center px-8 text-center sm:text-xl font-bold uppercase hidden sm:block">
                                <p>ਡਾ ਬੀ ਆਰ ਅੰਬੇਡਕਰ ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿਊਟ ਟੈਕਨਾਲੋਜੀ ਜਲੰਧਰ</p>
                            </div>
                            <div
                                className="institute_name flex sm:max-w-lg sm:basis-1/2 justify-center text-center text-xs sm:text-lg font-semibold uppercase">
                                <p>Dr B R AMBEDKAR NATIONAL INSTITUTE OF TECHNOLOGY JALANDHAR</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- INSTITUTE LOGO & NAME ends -->
    <!-- Logo CONTAINER starts --> */}
                <div
                    className="absolute hidden sm:block left-[50px] z-50 mx-auto -translate-x-1/2 -translate-y-1/3 sm:translate-y-0 scale-75 sm:scale-100 sm:left-1/2"
                    style={{ width: "230px" }}>
                    <img src={rect} alt=".." />
                </div>
                <div id="logo_250"
                    className="absolute h-[120px] aspect-square left-[50px] sm:left-1/2 scale-[0.40] sm:scale-100 -translate-y-1/3 top-9 sm:top-7 sm:translate-y-0 z-50 -translate-x-1/2 sm:py-0">
                    <img src={logo} alt="..." />
                </div>
                {/* <!-- Logo CONTAINER ends -->
    <!-- NAV BAR starts--> */}


                <div className="sm:block bg-accent drop-shadow-lg">
                    <div className="container mx-auto">
                        <div className="z-100 flex h-7 sm:h-10 max-w-screen px-4 flex-row justify-between bg-accent text-lg text-white">
                            <div className="flex items-center sm:hidden">
                                <span className="material-symbols-outlined"
                                    style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'grad' 0,'opzs' 40" }}> menu </span>
                            </div>
                            <div className="sm:hidden block">
                                <button type="button"
                                    className="block material-symbols-outlined duration-50 cursor-pointer text-center transition ease-in-out hover:box-border sm:hover:h-10 sm:hover:w-10 hover:rounded-full hover:border-2 hover:border-accent"
                                    data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tap to search">
                                    search
                                </button>
                            </div>
                            <div className="basis-2/5 hidden sm:block">
                                <div className="flex w-full flex-row justify-between px-10">
                                    <div className="group cursor-default hover:bg-blue-800">
                                        <div className="p-1.5 font-medium uppercase">Administration</div>
                                        <div id="drop-down"
                                            className="absolute mt-0.5 hidden gap-5 bg-white p-5 text-sm shadow-sm group-hover:flex">
                                            <div className="flex flex-col gap-5 items-center">
                                                <div id="col"
                                                    className="flex flex-col w-52 gap-5 border-2 rounded-b-xl border-accent hover:bg-orange-500 hover:border-orange-500 ">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent hover:bg-orange-500">
                                                            <div className="p-2 text-center"><a href='about.html'>ABOUT US</a></div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Vision, Mission & Quality Policy
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Virtual Tour
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Institute History
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Explore NITJ
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        NITJ Rankings & Awards
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Institute Prospectus
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Location
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={logo} alt="" style={{ width: "100px" }} />
                                            </div>
                                            <div id="col"
                                                className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:border-orange-500 hover:bg-orange-500">
                                                <div id="block" className="h-full">
                                                    <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent hover:bg-orange-500">
                                                        <div className="p-2 text-center">LEADERSHIP</div>
                                                        <div className="h-full rounded-b-xl bg-white">
                                                            <ul className="flex flex-col gap-1  bg-white px-2 font-normal text-black">
                                                                <li className="hover:text-[#FF6600]">
                                                                    Organisational Chart
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Chariperson
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Director
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Registrar
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Academic administration
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Student Welfare
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Faculty Welfare
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Planning and Development
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Research and Consultancy
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    International Affairs
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Hostel Administration
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="col"
                                                className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:border-orange-500 hover:bg-orange-500">
                                                <div id="block" className="h-full">
                                                    <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent hover:bg-orange-500">
                                                        <div className="p-2 text-center">GOVERNING BODIES</div>
                                                        <div className="h-full rounded-b-xl bg-white">
                                                            <ul className="flex flex-col gap-1  bg-white px-2 font-normal text-black">
                                                                <li className="hover:text-[#FF6600]">
                                                                    NIT Council
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Board of Governors
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Senate
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Standing Committee of the Senate
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Finance Committee
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Building and Works Committee
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="col"
                                                className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                <div id="block" className="h-full">
                                                    <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                        <div className="p-2 text-center">CELLS</div>
                                                        <div className="h-full rounded-b-xl bg-white">
                                                            <ul className="flex flex-col gap-1  bg-white px-2 font-normal text-black">
                                                                <li className="hover:text-[#FF6600]">
                                                                    E-Cell
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Equal Opportunities and
                                                                    SC/ST/OBC/PwD cell
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Rajbhasha Cell
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    RTI Cell
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Student Grievances Cell
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Faculty Grievances Cell
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Staff Grievances Cell
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Public Grievances
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Women Cell
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="col"
                                                className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                <div id="block" className="h-full">
                                                    <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                        <div className="p-2 text-center">COMMITTEES</div>
                                                        <div className="h-full rounded-b-xl bg-white">
                                                            <ul className="flex flex-col gap-1  bg-white px-2 font-normal text-black">
                                                                <li className="hover:text-[#FF6600]">
                                                                    Institute Development
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Internal Complaint
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Print, Digital Media and Newsletter
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Social Media
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Website Development and Management
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group cursor-default hover:bg-blue-800">
                                        <div className="p-1.5 font-medium uppercase">Academics</div>
                                        <div id="drop-down"
                                            className="absolute mt-0.5 hidden -translate-x-28 gap-5  bg-white p-5 text-sm shadow-sm group-hover:flex">
                                            <div id="col"
                                                className="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                <div id="block" className="h-full">
                                                    <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                        <div className="p-2 text-center">DEPARTMENTS</div>
                                                        <div className="h-full rounded-b-xl bg-white">
                                                            <ul className="flex flex-col gap-1  bg-white px-2 font-normal text-black">
                                                                <li className="hover:text-[#FF6600]">
                                                                    Biotechnology
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Chemistry
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Chemical Engineering
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Civil Engineering
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Computer Science and Engineering
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Electronics and Communication Engineering
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Electrical Engineering
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Humanities and Management
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Industrial and Production Engineering
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Information Technology
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Instrumentation and Control Engineering
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Mathematics
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Mechanical Engineering
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Physics
                                                                </li>
                                                                <li className="hover:text-[#FF6600]">
                                                                    Textile Technology
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-5">
                                                <div id="col"
                                                    className="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">CENTERS</div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Center for Energy and Environment
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Center for Artificial Intelligence
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Center for Continuing Education
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="col"
                                                    className="h-full flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">ACADEMIC SYSTEM</div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Academic Circulars & Notices
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Academic Calender
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Academic Regulations
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Curriculum
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Fee Structure
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        System of Evaluation and Grant of Division
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Standard Operationg Procedures (SOP)
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        UMC Rules
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        General FAQs
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-5">
                                                <div id="col"
                                                    className="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">ACADEMIC SERVICES</div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Student Portal LOGIN
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Grade Sheets
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Timetable
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Upcoming Examination Schedules
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Results
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Online Application for Transcripts and Certificates
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Online Application for Verification of Degree
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        CGPA Criteria and Medium of Education
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Other Proformas
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Contact Details
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="col"
                                                    className="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">ACADEMIC FACILITIES</div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Central Library
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Computer Center
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Central Workshop
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Institute Instrumentation Center
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-5">
                                                <div id="col"
                                                    className="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">PROGRAMMERS OF STUDY</div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Bachelor of Technology
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Master of Technology
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Master of Business Administration
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Master of Science
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Post Graduate Diploma
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Doctor of Philosophy
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="col"
                                                    className="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">CONVOCATION</div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Convocation 2022
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Past Convocations
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="col"
                                                    className="flex flex-col rounded-b-xl w-60 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">OTHER LINKS</div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        UGC Act- Rules and Regulations
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        NIT Act and Statutes
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Ministry of Education Notifications
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        National Education Policy 2020
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group cursor-default hover:bg-blue-800">
                                        <div className="p-1.5 font-medium uppercase">Admissions</div>
                                        <div id="drop-down"
                                            className="absolute mt-0.5 hidden -translate-x-1/3 gap-5  bg-white p-5 text-sm shadow-sm group-hover:flex">
                                            <div className="flex flex-col gap-5">
                                                <div id="col"
                                                    className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">PROSPECTIVE STUDENTS</div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Why NITJ?
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Explore NITJ
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Discover Student Life
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Courses Offered
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        How to Apply
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Admissions Process
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Virtual Tour
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        International Students
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600] md:font-bold py-2">
                                                                        Contact Details for Admission
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="col"
                                                    className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">ANTI RAGGING</div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Anti Ragging Act
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Anti Ragging Affadvit
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Institute Anti-ragging Rules
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-5">
                                                <div id="col"
                                                    className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">JOIN NITJ</div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admissions/index.html">B.Tech Admission</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admissions/mtech_ccmt.html">M.Tech Admission</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admissions/msc.html">Msc Admission</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admissions/mba.html">MBA Admission</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admissions/phd.html">Ph.D Admission</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="col"
                                                    className="h-full flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                    <div id="block" className="h-full">
                                                        <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                            <div className="p-2 text-center">&thinsp; INSTITUTE PROSPECTUS &thinsp;</div>
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/admissions/admission_procedure.html">B.Tech</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        M.Tech
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        M.Sc.
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        MBA
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Ph.D
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-2/5 hidden sm:block w-full">
                                <div className="flex w-full flex-row justify-between">
                                    <div className="basis-4/5">
                                        <div className="flex flex-row justify-between">
                                            <div className="group cursor-default hover:bg-blue-800">
                                                <div className="p-1.5 font-medium uppercase">Research</div>
                                                <div id="drop-down"
                                                    className="absolute mt-0.5 hidden -translate-x-1/2 gap-5  bg-white p-5 text-sm shadow-sm group-hover:flex">
                                                    <div className="flex flex-col gap-5">
                                                        <div id="col"
                                                            className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                            <div id="block" className="h-full">
                                                                <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                                    <div className="p-2 text-center">RESEARCH @ NITJ</div>
                                                                    <div className="h-full rounded-b-xl bg-white">
                                                                        <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                            <li className="hover:text-[#FF6600]">
                                                                                VIDWAN (IRINS Instance)
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Research Publications
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Research Jobs
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Internships
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Sponsored Research Projects
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="col"
                                                            className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                            <div id="block" className="h-full">
                                                                <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                                    <div className="p-2 text-center">INCUBATION @ NITJ</div>
                                                                    <div className="h-full rounded-b-xl bg-white">
                                                                        <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                            <li className="hover:text-[#FF6600]">
                                                                                STI Hub
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                E-Cell
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Innovation Club
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Institute Innovation Council
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Technology Business Incubator
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-5">
                                                        <div id="col"
                                                            className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                            <div id="block" className="h-full">
                                                                <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                                    <div className="p-2 text-center">CONSULTANCY @ NITJ</div>
                                                                    <div className="h-full rounded-b-xl bg-white">
                                                                        <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Consultancy works
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                <a href="/research/mous.html">MoUs</a>
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                IPRs
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Find an Expert
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Central Research facilities
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="col"
                                                            className="h-full flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                            <div id="block" className="h-full">
                                                                <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                                    <div className="p-2 text-center">UPCOMING EVENTS</div>
                                                                    <div className="h-full rounded-b-xl bg-white">
                                                                        <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Conferences
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Seminars
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                STC/ FDP
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Workshops
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="group cursor-default hover:bg-blue-800">
                                                <div className="p-1.5 font-medium uppercase">Alumni</div>
                                                <div id="drop-down"
                                                    className="absolute mt-0.5 hidden -translate-x-1/2 gap-5  bg-white p-5 text-sm shadow-sm group-hover:flex">
                                                    <div id="col"
                                                        className="h-full flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                        <div id="block" className="h-full">
                                                            <div className="h-full rounded-b-xl bg-white">
                                                                <ul className="flex flex-col gap-1 px-2 py-2 font-normal text-black">
                                                                    <li className="hover:text-[#FF6600]">
                                                                        <a href="/alumni/alumni.html">Alumni Portal</a>
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Alumni Registration
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Chapters
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Donation statistics and Reports
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Give Back
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600]">
                                                                        Impact
                                                                    </li>
                                                                    <li className="hover:text-[#FF6600] py-2 md:font-bold">
                                                                        Alumni Affairs Contact Details
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="group relative cursor-default hover:bg-blue-800">
                                                <div className="p-1.5 font-medium uppercase">Life at NITJ</div>
                                                <div id="drop-down"
                                                    className="absolute mt-0.5 hidden gap-5 self-center  bg-white p-5 text-sm shadow-sm group-hover:flex right-0">
                                                    <div className="flex flex-col gap-5">
                                                        <div id="col"
                                                            className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                            <div id="block" className="h-full">
                                                                <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                                    <div className="p-2 text-center">CLUBS & SOCITIES</div>
                                                                    <div className="h-full rounded-b-xl bg-white">
                                                                        <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                            <a href="/clubs/yoga.html" className="hover:text-[#FF6600]">
                                                                                Heartfulness Mediation Club
                                                                            </a>
                                                                            <a href="/clubs/prayas.html" className="hover:text-[#FF6600]">
                                                                                Prayaas - A Campaign for Smile
                                                                            </a>
                                                                            <a href="/clubs/rtist.html" className="hover:text-[#FF6600]">
                                                                                R-Tist Robotics Club
                                                                            </a>
                                                                            <a href="/clubs/spic.html" className="hover:text-[#FF6600]">
                                                                                SPIC MACAY
                                                                            </a>
                                                                            <a href="/clubs/we-can.html" className="hover:text-[#FF6600]">
                                                                                “We Can” Club
                                                                            </a>
                                                                            <a href="/clubs/yoga.html" className="hover:text-[#FF6600]">
                                                                                Yoga Club
                                                                            </a>
                                                                        </ul>
                                                                        <ul className="flex flex-row px-2 font-normal text-black justify-between">
                                                                            <a href="/clubs/zeal.html" className="hover:text-[#FF6600]">
                                                                                Zeal Society
                                                                            </a>
                                                                            <li className="hover:text-[#FF6600] font-bold">
                                                                                View All
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="col"
                                                            className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                            <div id="block" className="h-full">
                                                                <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                                    <div className="p-2 text-center">SCHOLARSHIPS</div>
                                                                    <div className="h-full rounded-b-xl bg-white">
                                                                        <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Dr. Pratap Singh Memorial Scholarhsip
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                MCM Scholarship
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Post Matric Scholarship
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="flex flex-row px-2 font-normal text-black justify-between">
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Siemens India Scholarship
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600] font-bold whitespace-nowrap self-end">
                                                                                View All
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-5">
                                                        <div id="col"
                                                            className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                            <div id="block" className="h-full">
                                                                <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                                    <div className="p-2 text-center">CAMPUS AMENITIES</div>
                                                                    <div className="h-full rounded-b-xl bg-white">
                                                                        <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Banks & ATMs
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Canteens & Shops
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Central Seminar Hall
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Daily Commute
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Open Air Theater
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Post Office
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Students Actvity Center
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Wi-Fi Campus
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="col"
                                                            className="h-full flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                            <div id="block" className="h-full">
                                                                <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                                    <div className="p-2 text-center">HEALTH AND WELNESS</div>
                                                                    <div className="h-full rounded-b-xl bg-white">
                                                                        <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Counselling Services
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Fit India Movement Campaign
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Gymnasium Center and Open Gyms
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Health Care Center
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Empanaelled Hospitals
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Sports and Recreation
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600] font-bold">
                                                                                Student Grievence Cell
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-5 items-center">
                                                        <div id="col"
                                                            className="flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                            <div id="block" className="h-full">
                                                                <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                                    <div className="p-2 text-center">NITJ FESTIVALS</div>
                                                                    <div className="h-full rounded-b-xl bg-white">
                                                                        <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                            <a href="/clubs/bharat_dhwani.html" className="hover:text-[#FF6600]">
                                                                                Foundation Day
                                                                            </a>
                                                                            <a href="/clubs/cultural.html" className="hover:text-[#FF6600]">
                                                                                Annual Cultural Fest
                                                                            </a>
                                                                            <a href="/clubs/tech_fest.html" className="hover:text-[#FF6600]">
                                                                                Annual Technical Fest
                                                                            </a>
                                                                            <a href="/clubs/athletic_fest.html" className="hover:text-[#FF6600]">
                                                                                Athletic Fest
                                                                            </a>
                                                                            <a href="/clubs/sports.html" className="hover:text-[#FF6600]">
                                                                                Sports Tournaments
                                                                            </a>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="col"
                                                            className="h-full flex flex-col rounded-b-xl w-52 gap-5  border-2 border-accent hover:bg-orange-500 hover:border-orange-500">
                                                            <div id="block" className="h-full">
                                                                <div id="head" className="h-full rounded-b-xl overflow-clip  bg-accent  hover:bg-orange-500">
                                                                    <div className="p-2 text-center">ACCOMODATION</div>
                                                                    <div className="h-full rounded-b-xl bg-white">
                                                                        <ul className="flex flex-col gap-1 px-2 font-normal text-black">
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Boys Hostel
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Girls Hostel
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Hostel Guest House
                                                                            </li>
                                                                            <li className="hover:text-[#FF6600]">
                                                                                Institute Guest House
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src={logo} alt="..." style={{ width: "100px" }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex basis-1/5 flex-row justify-center">
                                        <button type="button"
                                            className="material-symbols-outlined duration-50 cursor-pointer text-center transition ease-in-out hover:box-border hover:h-10 hover:w-10 hover:rounded-full hover:border-2 hover:border-accent"
                                            data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tap to search">
                                            search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- NAV BAR ends--> */}
            </header>
        </>
    )
}

export default Navbar
