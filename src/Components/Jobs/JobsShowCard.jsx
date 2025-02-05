import React from 'react'
import JobsCards from './JobsCards'
import { assests } from '../../assets/assets'

const JobsShowCard = () => {
    const JobsMaping = [
        {
            id:1,
            JobsIcons: assests.JobsImg,
            JobName: "UX/UI Designer",
            JobCompany: "by Jobs Ready in Design & Creative",
            JobItems:{
                JobLocation: "Delhi",
                Jobbrid: "Remote",
                JobSalary: "$500",
            },
            jobDaysLeft: `150 days left to apply`
        },
        {
            id:2,
            JobsIcons: assests.JobsImg,
            JobName: "UX/UI Designer",
            JobCompany: "by Jobs Ready in Design & Creative",
            JobItems:{
                JobLocation: "Delhi",
                Jobbrid: "Remote",
                JobSalary: "$500",
            },
            jobDaysLeft: "150 days left to apply"
        },
        {
            id:3,
            JobsIcons: assests.JobsImg,
            JobName: "UX/UI Designer",
            JobCompany: "by Jobs Ready in Design & Creative",
            JobItems:{
                JobLocation: "Delhi",
                Jobbrid: "Remote",
                JobSalary: "$500",
            },
            jobDaysLeft: "150 days left to apply"
        },
        {
            id:4,
            JobsIcons: assests.JobsImg,
            JobName: "UX/UI Designer",
            JobCompany: "by Jobs Ready in Design & Creative",
            JobItems:{
                JobLocation: "Delhi",
                Jobbrid: "Remote",
                JobSalary: "$500",
            },
            jobDaysLeft: "150 days left to apply"
        },
        {
            id:5,
            JobsIcons: assests.JobsImg,
            JobName: "UX/UI Designer",
            JobCompany: "by Jobs Ready in Design & Creative",
            JobItems:{
                JobLocation: "Delhi",
                Jobbrid: "Remote",
                JobSalary: "$500",
            },
            jobDaysLeft: "150 days left to apply"
        },
        {
            id:6,
            JobsIcons: assests.JobsImg,
            JobName: "UX/UI Designer",
            JobCompany: "by Jobs Ready in Design & Creative",
            JobItems:{
                JobLocation: "Delhi",
                Jobbrid: "Remote",
                JobSalary: "$500",
            },
            jobDaysLeft: "150 days left to apply"
        }
    ]
  return (
    <div className='ptb60 sm:ptb30'>
        <div className="container">
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-8">
                    <h2 className='lefttitle'>Our Latest Jobs</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae, voluptatem corrupti nulla a minima ea dolorem mollitia illum nam, explicabo fuga, provident facilis quas maxime unde! Alias, enim quas.</p>
                </div>
                <div className="col-span-12 md:col-span-4 flex items-center justify-start mt10 md:mt-0 lg:justify-end">
                    <button className='darkbtn'>View All Latest Jobs</button>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-5 mt20">
                {JobsMaping.map((val)=>(
                    <div className="col-span-12 md:col-span-6 lg:col-span-4" key={val.id}>
                        <JobsCards 
                            JobsIcons={val.JobsIcons} 
                            JobName={val.JobName} 
                            JobCompany={val.JobCompany} 
                            JobItems={val.JobItems} 
                            jobDaysLeft={val.jobDaysLeft}
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default JobsShowCard