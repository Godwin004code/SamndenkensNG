import React from 'react'
//import './SlidesDot.css'

const SlidesDot = ({active, switchSlide, data}) => {
    return (
        <div className="all-dot w-[40%]">
            {
                data.map((slide, index) => {
                    return (
                        <div 
                            key={index}
                            className={active === index ? "active-dot dot" : "dot"}
                            onClick={() => switchSlide(index)}

                        ></div>
                    )
                })
            }
        </div>
    )
    
}

export default SlidesDot