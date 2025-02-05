import React from 'react'

const CategoryCard = ({ Cate_icon, Cate_name, Cate_para }) => {
  return (
    <div className='categorycard group'>
      <div className='w-16 h-16 -bg--theme-primary-one-light rounded-full min-w-16 flex items-center justify-center mb10'><img className='w-12 transition-transform delay-75 ease-in-out group-hover:scale-90 group-hover:-translate-y-1' src={Cate_icon} alt="" /></div>
      <div>
        <h4 className='-font--theme-Extrabold -text--theme-sm line-clamp-1'>{Cate_name}</h4>
        <p className='line-clamp-2'>{Cate_para}</p>
      </div>
    </div>
  )
}

export default CategoryCard