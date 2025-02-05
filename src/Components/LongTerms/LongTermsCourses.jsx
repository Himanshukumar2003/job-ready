    import React, { useState } from 'react'
    import LongTermsCoursesCard from './LongTermsCoursesCard'
    import { assests } from '../../assets/assets'
    import BreadcrumbDesign from '../Breadcrumb/BreadcrumbDesign'
    import { LongTermsJson } from './LongTermsJson'

    const LongTermsCourses = () => {

    return (
        <>
            <BreadcrumbDesign 
                BreadCrumbImg={assests.BreadcrumbImage} 
                BreadcrumbPara={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsa sed nam esse repudiandae, similique sit perferendis saepe beatae dolorem molestias mollitia possimus dolores repellat placeat animi corrupti amet. Inventore?'} BreacrumbHeading={`Long Terms Courses`}
            />

            <div className='ptb60'>
                <div className="container">
                    <h2 className='text-center mb20 -text--theme-lg -font--theme-Extrabold'>University of Wolverhampton offers a 4-year degree programme with a foundation year, and students can choose from the following courses</h2>
                    <div className="grid grid-cols-12 gap-x-5">
                        {LongTermsJson.map((val, index)=>(
                            <div className="col-span-12 md:col-span-4" key={index}>
                                <LongTermsCoursesCard 
                                    item={val}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
    }

    export default LongTermsCourses