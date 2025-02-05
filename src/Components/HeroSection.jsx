import React from 'react'
import { assests } from '../assets/assets'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HeroSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };
    const ClientLogo =[
        {
            ClientLogoName: assests.client1
        },
        {
            ClientLogoName: assests.client1
        },
        {
            ClientLogoName: assests.client1
        },
        {
            ClientLogoName: assests.client1
        },
        {
            ClientLogoName: assests.client1
        },
        {
            ClientLogoName: assests.client1
        },
        {
            ClientLogoName: assests.client1
        },
        {
            ClientLogoName: assests.client1
        },
        {
            ClientLogoName: assests.client1
        },
        {
            ClientLogoName: assests.client1
        }
    ]
  return (
    <div className='-bg--theme-primary-one-light pt30'>
        <div className="container">
            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-7">
                    <div className='flex justify-center h-full flex-col'>
                        <h1 className='-text--theme-text-primary -font--theme-Extrabold -text--theme-sm md:-text--theme-xl lg:-text--theme-2xl capitalize leading-tight mb20'>Welcome to   <span className='-text--theme-primary-one'>Job Ready</span> Empowering International <span className='-text--theme-primary-one'>Talent </span></h1>
                        <p className='mb20'>At Job Ready, our story goes beyond entrepreneurship—it is a journey shared by countless international students in the UK. When we, the founders of Job Ready, first arrived in this country...</p>
                        <Slider {...settings} className=''>
                            {ClientLogo.map((val,ind)=>(
                                <div key={ind}><img className='w-32' src={val.ClientLogoName} alt="" /></div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-5">
                    <div className='flex justify-center sm:mt10'><img src={assests.herobanner} alt="" /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection