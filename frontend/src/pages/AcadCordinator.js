import React, { useState } from 'react'
import People from './People'
import useFetch from '../hooks/useFetch'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
function AcadCordinator() {
    const [url,setUrl]=useState(useLocation());
    const {data,loading,error,reFetch}=useFetch(url.pathname);
    
    // const CoordinatorList = [
    //     {
    //         Name: "Dr. Geeta Sikha",
    //         Photo: "https://www.nitj.ac.in/images/faculty/20071962443.jpg",
    //         Phone: "",
    //         Email: "",
    //         Insta: "",
    //         Linkdein: ""
    //     }]
    return (
        <>
            <People Title="Academic Cordinator" Data={data}/>
        </>
    )
}

export default AcadCordinator
