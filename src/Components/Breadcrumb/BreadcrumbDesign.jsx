import React from 'react'
import { assests } from '../../assets/assets'
import { CiSearch } from "react-icons/ci";


const BreadcrumbDesign = ({BreadCrumbImg, BreacrumbHeading, BreadcrumbPara}) => {
  return (
    <div className=''>
        <div className="container">
            <div className='rounded-xl p30 relative breadcrumb -bg--theme-dark-gradient' >
                <div className="grid grid-cols-12 gap-x-0 md:gap-x-10">
                    <div className="col-span-12 md:col-span-7">
                        <div className='flex flex-col justify-center h-full'>
                            <h2 className='-text--theme-sm md:-text--theme-2xl capitalize -font--theme-Extrabold mb10 -text--theme-light'>{BreacrumbHeading}</h2>
                            <p className='-text--theme-light mb20'>{BreadcrumbPara}</p>
                            <div className='-bg--theme-light px20 py-3 flex items-center justify-between  w-fit md:w-auto -rounded--theme-normalradius -shadow--theme-darkshadow'>
                                <input className='focus:outline-none' type="text" placeholder='Search for Courses' />
                                <CiSearch className='-bg--theme-primary-one -text--theme-light w-10 h-10 rounded-sm -text--theme-sm'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-5">
                        <img src={BreadCrumbImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BreadcrumbDesign