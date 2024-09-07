import React, {useState, useRef} from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaPlus, FaMinus } from 'react-icons/fa6';
import exportedData from '../Global/AccordionData';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    const contentHeight = useRef();
    return (
      <div className="wrapper hidden">
        <button
          className={`question-container  ${isOpen ? "active" : ""}`}
          onClick={onClick}
        >
          <p className="question-content sm:text-sm font-bold">{question}</p>
          
          {isOpen === true ? <FaMinus /> : <FaPlus  />}
        </button>
  
        <div
          ref={contentHeight}
          className="answer-container"
          style={
            isOpen
              ? { height: contentHeight.current.scrollHeight }
              : { height: "0px" }
          }
        >
          <p className="answer-content ml-[0px] sm:ml-0 lg:text-left text-sm">{answer}</p>
          
        </div>
      </div>
    );
  };
const HomeAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
}
return (
    <div className=" w-[100%] lg:w-[100%] lg:mx-auto lg:mt-[80px]">
      {exportedData.AccordionData.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.title}
          answer={item.des}
          isOpen={activeIndex === index}
          
          onClick={() => handleItemClick(index)}
          
        />
      ))}
    </div>
  );
}
export default HomeAccordion