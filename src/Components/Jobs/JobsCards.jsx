import React from 'react'

const JobsCards = ({JobsIcons, JobName, JobCompany, JobItems, jobDaysLeft}) => {
  return (
    <div className='p20 border border-solid border-[#bdbdbd] -rounded--theme-normalradius'>
        <div className='flex items-center gap-x-5 mb20'>
          <div><img className='w-14' src={JobsIcons} alt="" /></div>
          <div>
              <h6 className='-font--theme-Extrabold'>{JobName}</h6>
              <p>{JobCompany}</p>
          </div>
        </div>
        <ul className='flex items-center gap-2 md:gap-x-5 flex-wrap mb10'>
          <li className='-bg--theme-primary-one-light border border-solid -border--theme-primary-one py-[1px] px20 rounded-full -text--theme-primary-one'><p>{JobItems.JobLocation}</p></li>
          <li className='-bg--theme-primary-one-light border border-solid -border--theme-primary-one py-[1px] px20 rounded-full -text--theme-primary-one'><p>{JobItems.Jobbrid}</p></li>
          <li className='-bg--theme-primary-one-light border border-solid -border--theme-primary-one py-[1px] px20 rounded-full -text--theme-primary-one'><p>{JobItems.JobSalary}</p></li>
        </ul>
        <p>{jobDaysLeft}</p>
    </div>
  )
}

export default JobsCards