import React from 'react'

function Director() {
    return (
        <>
            <h1 className="text-center text  text-3xl relative top-28 text-orange-600 font-serif   "><b>DIRECTOR'S CORNER</b></h1>

            <div className=" mt-28  rounded-[15px]  bg-blue-200 
                              md:mx-8 ">

                <h2 className=" md:hidden    mx-9 
                                   sm:mx-[200px]
                              "><b>Dr Binod Kumar Kanaujia</b> , Director NITJ</h2>
                  <h2 className="  hidden  md:block  w-[300px]  mx-9   relative top-20 left-56 text-2xl whitespace-nowrap
                                  
                              "><b>Dr Binod Kumar Kanaujia</b> , Director NITJ</h2>




                <div  ><img className="  border-t-[10px] border-t-blue-500 border-l-[10px] border-l-blue-500 mx-16 mt-5 
                                   sm:mx-56
                             

                                   md:relative right-[180px]
                                   2xl:mb-10
                
                " src="https://www.nitj.ac.in/images/faculty/22030775924.jpg" alt="" height={280} /></div>
            
                <div className="lg:hidden  text-justify  m-12
                                md:text-lg relative bottom-8
                   ">
                    It is a privilege to lead Dr. B. R. Ambedkar National Institute of Technology (NIT) Jalandhar,one of the national accolades
                    and an outstanding institution of higher learning. NIT Jalandhar  is ranked 49th in the National Institutional Ranking Framework (NIRF),
                    Band-Excellent in the Atal   Ranking of Institutions on Innovation Achievements (ARIIA), and was recently ranked in the 401-500 range
                    in the Times Higher Education (THE) Emerging Economies University Rankings 2022.
                    <a  href='#'className='   ml-12 text-blue-900 underline decoration-1' >Read more&rarr;</a>
                </div>


                <div className=" hidden lg:block border-t-4 border-blue-600 text-justify  m-12 mr-60 ml-12 
                               relative bottom-[190px] left-[180px] pl-8 pr-7 
                   ">
                    It is a privilege to lead Dr. B. R. Ambedkar National Institute of Technology (NIT) Jalandhar,
                    one of the national accolades and an outstanding institution of higher learning. NIT Jalandhar  
                    is ranked 49th in the National Institutional Ranking Framework (NIRF), Band-Excellent in the 
                    Atal   Ranking of Institutions on Innovation Achievements (ARIIA), and was recently ranked in 
                    the 401-500 range  in the Times Higher Education (THE) Emerging Economies University 
                    Rankings 2022.
                    <a  href='/directorofNITJ'className='   ml-12 text-blue-900 underline decoration-1' >Read more&rarr;</a>
                </div>
                
            </div>



    
    
    
    </>
  )
}

export default Director