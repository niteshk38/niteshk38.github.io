import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Alex Morgan | Senior Product Designer</title>
        <meta 
          name="description" 
          content="Portfolio of Alex Morgan, a Senior Product Designer with 8+ years of experience creating meaningful digital experiences for companies like Airbnb and Spotify." 
        />
        <meta name="keywords" content="product designer, UX designer, portfolio, San Francisco, digital design" />
        <link rel="canonical" href="https://alexmorgan.design" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
