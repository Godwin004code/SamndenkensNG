import React from 'react'
//import './SlidesArrow.css'
import {FaChevronRight, FaChevronLeft} from "react-icons/fa6"

const SlidesArrow = ({next, prev, data}) => {
    return (
        <div className="btns  flex mb-5 sm:mr-5 gap-3">
            <button className="prev bg-[#d81220] next flex justify-center items-center  w-[70px] h-[70px] sm:w-[40px] sm:h-[40px] text-lg" style={{borderRadius: 999}} onClick={prev}>
                <FaChevronLeft />
            </button>
            <button className="next sm:w-[40px] sm:h-[40px] bg-[#d81220]  flex justify-center items-center  w-[70px] h-[70px]" style={{borderRadius: 999}} onClick={next}>
                <FaChevronRight  />
            </button>
        </div>
    )
}

export default SlidesArrow