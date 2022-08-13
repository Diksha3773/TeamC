import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card';

const Departmentlower = (props) => {
  let navigate = useNavigate();

  return (
    <div className='flex flex-col md:flex-row w-[98%] justify-between items-center p-4 place-items-center mx-auto'>
      {/* Club */}
      <Card title="Coding Club"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!" />
      {/* HOD */}
      <div className="max-w-md py-4 px-7 mx-1 border bg-white shadow-lg rounded-lg mt-20 mb-6" onClick={() => { navigate("/messageofHOD") }}>
        <div className="flex justify-center rounded-full md:justify-end -mt-16">
          <img className="w-24 h-24 object-cover rounded-full shadow-md border border-blue-200 shadow-blue-400" src={props.hod} alt='...'/>
        </div>
        <div>
          <h2 className="text-gray-800 text-2xl font-semibold">Head Of Department</h2>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>
        </div>
        <div className="flex justify-end mt-4">
          <a href="/" className="text-xl font-medium text-indigo-500">{props.nameofhod}</a>
        </div>
      </div>
    </div>
  )
}

export default Departmentlower