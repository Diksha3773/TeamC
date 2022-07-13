import React from 'react'
import uuid from 'react-uuid';
import { useEffect } from 'react';
function Viewall(props) {
  useEffect(() => (
    window.scrollTo(0, 0)))
  let data = Array.from(props.latest);
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto bg-lime-100">
          <div >
            <ol>
              {
                data.map((n) =>
                  <div key={uuid()} className="py-8 flex flex-wrap md:flex-nowrap ">
                    <div className="md:w-32 md:mb-0 mb-6 flex-shrink-0 flex flex-col ">
                      <span className="mt-2 text-gray-600 text-sm">{n.date}</span>
                    </div>
                    <div className="md:flex-grow border-b-[1.5px] border-red-700">
                   
                      <h2 className="text-2xl font-medium text-blue-600 title-font mb-2 ">{n.heading}</h2>
                      <p className="leading-relaxed">~{n.details}</p>

                    </div>
                  </div>)
              }
            </ol>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Viewall