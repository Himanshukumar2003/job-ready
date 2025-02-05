import React, { useState } from 'react'
import { FiChevronsRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const LongTermsCoursesCard = ({item}) => {
    const navigate = useNavigate();
    const [active, setActive] = useState(0);
  return (
    <div className={`p30 h-full -rounded--theme-normalradius group border border-solid border-[#bdbdbd] transition-transform delay-75 ease-in-out group-hover:scale-90 group-hover:-translate-y-1 ${active ? "" : ""}`}>
        <div className='mb20 min-w-20 w-20 h-20 -bg--theme-primary-one-light -rounded--theme-fullradius flex items-center justify-center'><img className='w-12 transition-all delay-75 ease-in-out group-hover:scale-90 group-hover:-translate-y-1' src={item.icon} alt={item.name} /></div>
        <div>
            <h4 className='-font--theme-Extrabold -text--theme-sm mb10'>{item.name} </h4>
            
            <button onClick={()=>navigate(`/long-terms/${item.id}`)} className='writebtn mt20'><span>Read More</span> <span><FiChevronsRight/></span></button>
            {console.log(`/long-terms/${item.id}`)}
        </div>
    </div>
  )
}

export default LongTermsCoursesCard