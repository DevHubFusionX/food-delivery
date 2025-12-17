import HeroSection from '../components/landing/HeroSection';
import FeaturedSection from '../components/landing/FeaturedSection';
import HowItWorks from '../components/landing/HowItWorks';
import Testimonials from '../components/landing/Testimonials';
import AppCTA from '../components/landing/AppCTA';
import FAQ from '../components/landing/FAQ';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedSection />
      <HowItWorks />
      <Testimonials />
      <AppCTA />
      <FAQ />
    </div>
  );
};

export default Home;