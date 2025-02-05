import React from 'react'
import { assests } from '../../assets/assets'

const Cta = () => {
  return (
    <div className='ptb30 md:pt30 md:pb-0 -bg--theme-primary-one relative'>
        <div className="container">
            <div className="grid grid-cols-12 gap-x-5">
                <div className="col-span-12 md:col-span-4">
                    <div className="news_letter relative z-20">
                        <img className='hidden md:block' src={assests.ctaboy} alt="ctaboys" />
                        <img className="hidden md:block absolute bottom-0 -left-10 -z-10" src={assests.ctacurve} alt="ctacurve" />
                        <img className='hidden md:block absolute top-12 right-32 -z-10' src={assests.ctadots} alt='ctadots'/>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-8">
                    <div className='flex items-start h-full flex-col'>
                        <h2 className='-text--theme-light -font--theme-bold -text--theme-sm md:-text--theme-xl capitalize'>Want to stay <span className='-font--theme-Extrabold'>informed</span> about 
                    new <span className='-font--theme-Extrabold'>courses & study?</span></h2>
                        <div className='-bg--theme-light w-full md:w-[70%] py-2 px-3 -rounded--theme-normalradius mt20 flex items-center justify-between flex-wrap overflow-visible md:overflow-hidden'>
                            <input className='bg-transparent focus:outline-none w-full md:w-auto' type='text'  placeholder='Any Enquiry Fill Free to Contact us'/>
                            <button className='darkbtn'>Submit Enquiry</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-curve absolute bottom-0 right-48"><img src={assests.ctatextcurve} alt="" /></div>
        </div>
    </div>
  )
}

export default Cta