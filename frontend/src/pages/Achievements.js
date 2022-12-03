import React, {useEffect, useState} from 'react';
function Achievements() {
  useEffect( () => {
    fetchItems();
}, []);

const [Achievement, setItems] = useState([]);

const fetchItems = async () => {
    const data = await fetch('/get_achievements');
    console.log(data)
    const Achievement = await data.json();
    setItems(Achievement);
};

  return (
    <div className='relative w-full rounded-[9px] border border-[rgba(0,105,140,0.2)] p-4 mx-1 xl:mx-3 my-[90px] pt-[54px] place-items-center'>
      <div className='absolute -mt-[78px] p-2 px-4 bg-[rgba(0,105,140,1)] font-[400] text-[#fff] shadow-lg rounded-3xl text-2xl'>Achievements</div>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 mx-auto" >
        {
          Achievement.map((item, i) => {
            return (
              <div key={i} className="relative min-w-0 max-w-md break-words bg-white m-2 mb-6 shadow-lg rounded-xl mt-16 border">
                <div className="flex flex-col break-words bg-white rounded-xl bg-clip-border transition-all flex-auto">
                  <div className="transition-all mx-4 -mt-10 border-2 rounded-lg shadow-2xl overflow-hidden bg-black">
                    <img
                      className="w-full h-full"
                      src={item.photo}
                      alt="..."
                    />
                  </div>
                  <div className="flex-auto p-6">
                    <p className="text-lg text-gray-900 mb-4">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Achievements

