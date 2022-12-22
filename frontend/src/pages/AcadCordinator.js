import React, { useState } from 'react'
import People from './People'
import useFetch from '../hooks/useFetch'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
function AcadCordinator() {
    const [url,setUrl]=useState(useLocation());
    const {data,loading,error,reFetch}=useFetch(url.pathname);
    console.log(data)
    // const CoordinatorList = [
    //     {
    //         Name: "Dr. Geeta Sikha",
    //         Photo: "https://www.nitj.ac.in/images/faculty/20071962443.jpg",
    //         Phone: "",
    //         Email: "",
    //         Insta: "",
    //         Linkdein: ""
    //     }, {
    //         Name: "Dr. AmritPal Singh",
    //         Photo: "https://www.nitj.ac.in/images/faculty/21010923445.jpg",
    //         Phone: "",
    //         Email: "",
    //         Insta: "",
    //         Linkdein: ""
    //     }, {
    //         Name: "Dr. K P Sharma",
    //         Photo: "https://www.nitj.ac.in/images/faculty/22020989592.jpg",
    //         Phone: "",
    //         Email: "",
    //         Insta: "",
    //         Linkdein: ""
    //     }, {
    //         Name: "Dr. Kuldeep Kumar",
    //         Photo: "https://www.nitj.ac.in/images/faculty/18012437847.jpg",
    //         Phone: "",
    //         Email: "",
    //         Insta: "",
    //         Linkdein: ""
    //     }, {
    //         Name: "Dr. Prashant Kumar",
    //         Photo: "https://www.nitj.ac.in/images/faculty/20112211529.jpg",
    //         Phone: "",
    //         Email: "",
    //         Insta: "",
    //         Linkdein: ""
    //     }, {
    //         Name: "Dr. Rajneesh Rani",
    //         Photo: "https://www.nitj.ac.in/images/faculty/22012989244.jpg",
    //         Phone: "",
    //         Email: "",
    //         Insta: "",
    //         Linkdein: ""
    //     },
    // ]
    return (
        <>
            <People Title="Academic Cordinator" Data={data}/>
        </>
    )
}

export default AcadCordinator
