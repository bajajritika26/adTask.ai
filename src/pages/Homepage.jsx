import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import VideoSection from '../components/VideoSection'
import BrandsSection from '../components/BrandSection'
import PlatformsSection from '../components/PlatformSection'
import FeaturesSection from '../components/FeaturesSection'
import ServicesSection from '../components/ServicesSection'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import Ready from '../components/Ready'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <VideoSection />
      <BrandsSection />
      <PlatformsSection />
      <FeaturesSection />
      <ServicesSection />
      <Testimonials />
      <ContactForm />
      <Ready />
      <Footer />
    </div>
  )
}

export default Homepage