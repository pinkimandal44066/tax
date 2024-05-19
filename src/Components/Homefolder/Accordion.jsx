import React from 'react'
import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
// import img54 from '../../../public/images/img54.png';

const AccordionItem = ({ title, imageSrc, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border   shadow-2xl rounded-md border-[#E79F30]">
      <button
        className="w-full p-2 text-[#E79F30] text-left rounded-md focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out flex"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold ml-2">{title}</span>
        <span className={`ml-auto transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition duration-300 ease-in-out`}><MdOutlineKeyboardArrowDown size={32} style={{ color: 'E79F30' }} /></span>
      </button>
      <div className={`mt-2 overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className='flex justify-center'>
          {/* <img src={imageSrc} alt="Accordion Image" className="w-48 mt-4" /> */}
        </div>
        <p className="text-[#E79F30] text-left mx-4">{content}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <>
      

      <div className='mt-24 '>
      {/* <img className='lg:-mt-16 w-full' src={img54} alt='' /> */}
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-28 xl:mx-36 2xl:mx-48 lg:-mt-16">
        <AccordionItem
          title="Compliance with Tax Laws"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
           quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
        />
        <AccordionItem
          title="Review Income Sources"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
           quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
        />
        <AccordionItem
          title="Maintain Detailed Records"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
          quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
        />
        <AccordionItem
          title="Verify Form Accuracy"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
          quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
        />
        <AccordionItem
          title="Utilize Tax Credits"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
          quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
        />
        <AccordionItem
          title="Stay Informed on Tax Laws"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
          quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
        />
        <AccordionItem
          title="Consult Tax Professionals"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugit, suscipit rerum. Mollitia quibusdam nisi unde consectetur illum numquam, 
          quam sint placeat. Aspernatur aliquid neque exercitationem adipisci alias deserunt atque aliquam."
        />
      </div>
    </div>
  
  <NavLink to='/enquiry'>
  <button
          className="text-[#E79F30] flex  border-2 
  border-gray-100 shadow-2xl bg-white 
  font-semibold py-2.5 px-9  rounded-lg mx-auto   mt-9
    "
        >
          View All
        </button>
  </NavLink>
     
    </>
  )
}

export default Accordion
