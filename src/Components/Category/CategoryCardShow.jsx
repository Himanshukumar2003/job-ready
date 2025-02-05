import React from 'react'
import { assests } from '../../assets/assets'
import CategoryCard from './CategoryCard'

const CategoryCardShow = () => {
    const MapingCate = [
        {
            id:1,
            Cate_icon: assests.it,
            Cate_name: "IT & Telecom",
            Cate_para: "Transforming IT & Telecom with Job-Ready Talent"
        },
        {
            id:2,
            Cate_icon: assests.law,
            Cate_name: "Law",
            Cate_para: "Your Legal Talent, Job Ready for Success"
        },
        {
            id:3,
            Cate_icon: assests.payroll,
            Cate_name: "Payroll",
            Cate_para: "Seamless Payroll Solutions, Powered by Job-Ready Talent"
        },
        {
            id:4,
            Cate_icon: assests.healthcare,
            Cate_name: "Healthcare",
            Cate_para: "Empowering Healthcare with Job-Ready Talent"
        },
        {
            id:5,
            Cate_icon: assests.accounting,
            Cate_name: "Accounting",
            Cate_para: "Job Ready: Your Partner in Accounting Excellence"
        },
        {
            id:6,
            Cate_icon: assests.finance,
            Cate_name: "Finance",
            Cate_para: "Building Your Financial Future with Job-Ready Talent"
        },
        {
            id:7,
            Cate_icon: assests.hr,
            Cate_name: "HR",
            Cate_para: "Job Ready: Empowering Your HR Strategy with Top Talent"
        },
        {
            id:8,
            Cate_icon: assests.staffing,
            Cate_name: "Permanent Staffing at Job Ready",
            Cate_para: "At Job Ready, we specialize in helping international"
        }
    ]
  return (
    <div className='pb60 sm:pb30'>
        <div className="container">
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-8">
                    <h2 className='lefttitle'>Popular Category</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae, voluptatem corrupti nulla a minima ea dolorem mollitia illum nam, explicabo fuga, provident facilis quas maxime unde! Alias, enim quas.</p>
                </div>
                <div className="col-span-12 md:col-span-4 flex items-center justify-start mt10 md:mt-0 lg:justify-end">
                    <button className='darkbtn'>View All Categories</button>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-5 mt20">
            {MapingCate.map((val)=>(
                <div className="col-span-12 md:col-span-4 lg:col-span-3" key={val.id}>
                    <CategoryCard
                    Cate_icon={val.Cate_icon}
                    Cate_name={val.Cate_name}
                    Cate_para={val.Cate_para}/>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default CategoryCardShow