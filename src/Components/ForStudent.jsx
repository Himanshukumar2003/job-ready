import React from 'react'
import { assests } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const ForStudent = () => {
    const navigate = useNavigate();
    const StudentMaping =[
        {
            id: 1,
            StudentName: "Long Term Courses",
            StudentPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            StudentLink: "/long-terms",
            StudentImg: assests.forstudent
        },
        {
            id: 2,
            StudentName: "Short Term Courses",
            StudentPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            StudentLink: "",
            StudentImg: assests.foremployee
        }
    ]
  return (
    <div className='ptb60 sm:ptb30'>
        <div className="container">
            <div className="grid grid-cols-12 gap-x-5">
                {StudentMaping.map((val)=>(
                    <div className='grid col-span-12 md:col-span-6 mb10' key={val.id}>
                        <div className='-bg--theme-primary-one-light p30 -rounded--theme-normalradius flex items-center justify-between flex-wrap md:flex-nowrap gap-x-5'>
                            <div>
                                <h4 className='-text--theme-sm md:-text--theme-md capitalize -font--theme-Extrabold mb10'>{val.StudentName}</h4>
                                <p className='mb20'>{val.StudentPara}</p>
                                <button onClick={()=>navigate(`${val.StudentLink}`)} className='darkbtn'>View All</button>
                            </div>
                            <div><img src={val.StudentImg} alt="" /></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ForStudent