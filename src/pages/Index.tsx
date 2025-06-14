
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import UsefulInfo from '../components/UsefulInfo';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import FloatingContact from '../components/FloatingContact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <UsefulInfo />
      <Contact />
      <Footer />
      <Chatbot />
      <FloatingContact />
    </div>
  );
};

export default Index;
