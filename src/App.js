
import './App.css';
import BrandsSection from './components/BrandSection';
import ContactForm from './components/ContactForm';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import PlatformsSection from './components/PlatformSection';
import Ready from './components/Ready';
import ServicesSection from './components/ServicesSection';
import Testimonials from './components/Testimonials';
import VideoSection from './components/VideoSection';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <HeroSection/>
    <VideoSection/>
    <BrandsSection/>
    <PlatformsSection/>
    <FeaturesSection/>
    <ServicesSection/>
    <Testimonials/>
    <ContactForm/>
    <Ready/>
    <Footer/>
    </div>
  );
}

export default App;
