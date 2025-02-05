import React from 'react'
import {assests} from '../../assets/assets'
import TestimonialsCard from './TestimonialsCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TestimonialsCardShow = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 1000,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
    };

    const TestimonialMaping = [
        {
            id:1,
            TestiImage: assests.testi,
            TestiName: "Dikshant Kulshari",
            TestiPara: "JOB READY has been a game-changer for my career. Their programs not only enhanced my skills but also gave me the confidence to ace my interviews. The team genuinely cares about your success, and I'm so grateful for their support in helping me find my dream job."
        },
        {
            id:2,
            TestiImage: assests.testi,
            TestiName: "Dikshant Kulshari",
            TestiPara: "I was struggling to find the right job despite having experience, but JOB READY bridged the gap for me. Their personalized guidance, training sessions, and seamless recruitment process helped me secure a role that aligns perfectly with my goals. Highly recommend their services!"
        },
        {
            id:3,
            TestiImage: assests.testi,
            TestiName: "Dikshant Kulshari",
            TestiPara: "Joining JOB READY was the best decision for my career. Their courses were concise yet packed with valuable insights, and their team was always available to offer encouragement and advice. Today, I'm working in a job I truly enjoy, and it's all thanks to their support"
        },
        {
            id:4,
            TestiImage: assests.testi,
            TestiName: "Dikshant Kulshari",
            TestiPara: "I can't thank JOB READY enough for the opportunities they've provided me. From the tailored training to the dedicated placement support, they've helped me build a path to success. Their expertise and commitment to helping individuals like me shine in the job market are unmatched."
        },
        {
            id:5,
            TestiImage: assests.testi,
            TestiName: "Dikshant Kulshari",
            TestiPara: "Thanks to JOB READY, I finally landed a position that perfectly matches my skills and aspirations. The short-term courses were incredibly practical, and the support team guided me every step of the way. I couldn't have asked for a better experience—this company truly delivers on its promises."
        },
        {
            id:6,
            TestiImage: assests.testi,
            TestiName: "Dikshant Kulshari",
            TestiPara: "JOB READY combines professionalism with a personal touch. They identified my potential, provided targeted training, and guided me to a role that aligns perfectly with my goals. They're not just recruiters—they're career architects."
        },
        {
            id:7,
            TestiImage: assests.testi,
            TestiName: "Dikshant Kulshari",
            TestiPara: "Working with JOB READY was a turning point in my career. Their personalized approach to recruitment and training was exactly what I needed. Today, I'm in a job that I love, and it's all thanks to their dedication and expertise."
        },
        {
            id:8,
            TestiImage: assests.testi,
            TestiName: "Dikshant Kulshari",
            TestiPara: "JOB READY lives up to its name by ensuring every candidate is equipped to excel. Their courses are thoughtfully curated, and their team goes above and beyond to connect you with the right opportunities. I'm incredibly thankful for their support."
        },
        {
            id:9,
            TestiImage: assests.testi,
            TestiName: "Dikshant Kulshari",
            TestiPara: "What sets JOB READY apart is their genuine investment in your success. Their comprehensive training programs are expertly crafted, and their placement assistance is second to none. They've given me the tools to thrive in my new role, and for that, I'm forever grateful"
        },
        {
            id:10,
            TestiImage: assests.testi,
            TestiName: "Dikshant Kulshari",
            TestiPara: "Before joining JOB READY, I struggled to find meaningful employment. Their expert team helped me identify my strengths, enhance my skills, and ultimately secure a job that I'm passionate about. I can't recommend them enough!"
        },
        {
            id:11,
            TestiImage: assests.testi,
            TestiName: "Dikshant Kulshari",
            TestiPara: "11.	JOB READY isn't just a service; it's a transformative experience. They not only prepare you with the right skills but also connect you with opportunities that suit your aspirations. Their commitment to excellence is unparalleled, and I am proud to have been a part of their program."
        },
        {
            id:12,
            TestiImage: assests.testi,
            TestiName: "Dikshant Kulshari",
            TestiPara: "Thanks to JOB READY, I not only improved my technical skills but also developed a clearer understanding of how to present myself as a professional. Their courses are concise, impactful, and perfectly designed for anyone looking to elevate their career."
        },
        {
            id:13,
            TestiImage: assests.testi,
            TestiName: "Dikshant Kulshari",
            TestiPara: "The journey with JOB READY was nothing short of exceptional. They equipped me with the knowledge and practical tools to excel in interviews and the workplace. Their unwavering support ensured I secured a position that aligns perfectly with my ambitions."
        }
    ]
  return (
    <div className='ptb60 '>
        <div className="container">
            <div className="grid grid-cols-12 gap-x-10">
                <div className="col-span-12 md:col-span-5">
                    <div className='flex items-center justify-center flex-col h-full'>
                        <h2 className='-text--theme-text-primary -text--theme-sm md:-text--theme-lg -font--theme-Extrabold capitalize mb10'>What Students Think and Say About Job Ready</h2>
                        <p className='-text--theme-text-primary'>Groove’s intuitive shared inbox makesteam members together
                        organize, prioritize and.In this episode.</p>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-7">
                    <Slider {...settings}>
                        {TestimonialMaping.map((val)=>(
                            <div key={val.id}>
                                <TestimonialsCard 
                                TestiImg={val.TestiImage}
                                TestiName={val.TestiName}
                                TestiPara={val.TestiPara}/>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialsCardShow