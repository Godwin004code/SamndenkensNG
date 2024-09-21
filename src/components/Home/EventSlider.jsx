import React from 'react'

const event = [
    {
        name: "OTC",
        des: "",
        day: "08",
        month: "September"
    },
    {
        name: "ADIPEC",
        des: "",
        day: "08",
        month: "September"
    },
    {
        name: "NOG",
        des: "",
        day: "08",
        month: "September"
    },
    {
        name: "GASTECH",
        des: "",
        day: "08",
        month: "October"
    },
    
]

const EventSlider = () => {
  return (
    <div className="slider-container mt-10">
    <div className="slider-track2">
      {/* Duplicate the image set to ensure smooth transitions */}
      {event.map((item, index) => (
    
        <div key={index} className='p-8 mr-10  flex w-full gap-3 rounded-[20px]' style={{ border: "1px solid #E5E5E5" }}>
        <div>
            <h2 className='text-4xl'>
                {item.day}
            </h2>
            <h2>{item.month}</h2>
        </div>
        <div className='w-full'>
            <div className='flex'>
                <h2 className='text-[#1D2130] font-medium text-base'>Our Events</h2>
                <div className='w-[100px] my-auto h-[2px]  ml-5 bg-[#E5E5E5]'></div>
            </div>
            <div className='flex sm:justify-between xs:w-full xs:gap-0 gap-14 mt-2'>
                <h2 className='font-medium sm:text-base text-xl'>{item.name} <br />  </h2>

                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28" r="28" fill="#d81220" />
                    <path d="M37.4571 28.7071C37.8476 28.3166 37.8476 27.6834 37.4571 27.2929L31.0931 20.9289C30.7026 20.5384 30.0695 20.5384 29.6789 20.9289C29.2884 21.3195 29.2884 21.9526 29.6789 22.3431L35.3358 28L29.6789 33.6569C29.2884 34.0474 29.2884 34.6805 29.6789 35.0711C30.0695 35.4616 30.7026 35.4616 31.0931 35.0711L37.4571 28.7071ZM19.25 29L36.75 29L36.75 27L19.25 27L19.25 29Z" fill="white" />
                </svg>


            </div>
        </div>

    </div>
      ))}
    </div>
  </div>
  )
}

export default EventSlider