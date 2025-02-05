import React from 'react'
import CategoryCardShow from './Category/CategoryCardShow'
import Cta from './cta/Cta'
import Footer from './NavFoot/Footer'
import JobsShowCard from './Jobs/JobsShowCard'
import ForStudent from './ForStudent'
import StartJourneyCard from './StartJourney/StartJourneyCard'
import BecomeInstructor from './BecomeInstructor'
import HeroSection from './HeroSection'
import TestimonialsCardShow from './Testimonials/TestimonialsCardShow'
const HomeLayout = () => {
  return (
    <>
      <HeroSection />
      <ForStudent />
      <CategoryCardShow />
      <StartJourneyCard />
      <BecomeInstructor />
      <JobsShowCard />
      <Cta />
      <TestimonialsCardShow />
    </>
  )
}

export default HomeLayout