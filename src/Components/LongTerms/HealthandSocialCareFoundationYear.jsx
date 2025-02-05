import React from 'react'
import LongTermsCoursesCard from './LongTermsCoursesCard'
import { assests } from '../../assets/assets'
import BreadcrumbDesign from '../Breadcrumb/BreadcrumbDesign'
import ApplyNowForm from './ApplyNowForm'
import LongTermsDetailsCard from './LongTermsDetailsCard'

const HealthandSocialCareFoundationYear = () => {
    const LongTermsMaping = [
        {
            id:1,
            LongCoursesIcons: assests.socialcare,
            LongCoursesName: "BSc (Hons) Health and Social Care with Foundation Year",
            LongCoursesSpan: "Year 1 Modules",
            LongCoursesList: [
            {LongCoursesInnerList: "Empowerment in Social Care"},
            {LongCoursesInnerList: "Interprofessional Working"},
            {LongCoursesInnerList: "Preparing for Undergraduate Study"},
            {LongCoursesInnerList: "Social Care Context and Delivery"},
            {LongCoursesInnerList: "Valuing the Self & others"}
            ],
        },
        {
            id:2,
            LongCoursesIcons: assests.socialcare,
            LongCoursesName: "BSc (Hons) Health and Social Care with Foundation Year",
            LongCoursesSpan: "Year 2 Modules",
            LongCoursesList: [
            {LongCoursesInnerList: "Academic, Personal and Professional Development II - Skills for Practice"},
            {LongCoursesInnerList: "Health, Society and Culture"},
            {LongCoursesInnerList: "Introduction to Health and Wellbeing"},
            {LongCoursesInnerList: "Introduction to Research Skills"},
            {LongCoursesInnerList: "Introduction to Social Care and the Mixed Economy of Welfare"},
            {LongCoursesInnerList: "Social Care Values, Equality and Diversity"}
            ],
        },
        {
            id:3,
            LongCoursesIcons: assests.socialcare,
            LongCoursesName: "BSc (Hons) Health and Social Care with Foundation Year",
            LongCoursesSpan: "Year 3 Modules",
            LongCoursesList: [
            {LongCoursesInnerList: "Developing Research Skills"},
            {LongCoursesInnerList: "Mental Health and Wellbeing"},
            {LongCoursesInnerList: "Partnership and Collaborative Working in Health"},
            {LongCoursesInnerList: "Social Care Interventions: Working with Adults"},
            {LongCoursesInnerList: "Sustainable Healthy Communities"},
            {LongCoursesInnerList: "Working with Children and Families (Part 1)"},
            ],
        },
        {
            id:4,
            LongCoursesIcons: assests.socialcare,
            LongCoursesName: "BSc (Hons) Health and Social Care with Foundation Year",
            LongCoursesSpan: "Year 4 Modules",
            LongCoursesList: [
                {LongCoursesInnerList: "Appraising Health Policy and Practice"},
                {LongCoursesInnerList: "Independent Research and Practice"},
                {LongCoursesInnerList: "Law and Ethics in Health"},
                {LongCoursesInnerList: "Leadership and Management in Health"},
                {LongCoursesInnerList: "Technology and Innovation in Social Care Practice"},
                {LongCoursesInnerList: "Working with Youth and Families (Part 2)"},
            ],
        }
    ]
  return (
    <>
        <BreadcrumbDesign 
            BreadCrumbImg={assests.BreadcrumbImage} 
            BreadcrumbPara={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} 
            BreacrumbHeading={`BSc (Hons) Health and Social Care with Foundation Year`}
        />
        <div className='ptb60'>
            <div className="container">
                <div className="grid grid-cols-12 gap-x-5">
                  <div className="col-span-12 md:col-span-9">
                    <div className="grid grid-cols-12 gap-x-5">
                      {LongTermsMaping.map((val)=>(
                        <div className="col-span-12 md:col-span-6 mb20" key={val.id}>
                          <LongTermsDetailsCard 
                            icon={val.LongCoursesIcons} 
                            name={val.LongCoursesName}
                            year={val.LongCoursesSpan}
                            modules={val.LongCoursesList? val.LongCoursesList.map((listval, index)=>(
                              <li key={index} className='list-decimal'>{listval.LongCoursesInnerList}</li>
                            )) : null}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-3">
                      <ApplyNowForm/>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HealthandSocialCareFoundationYear