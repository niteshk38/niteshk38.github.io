import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Nitesh Kumar | Software Engineer II - SDET</title>
        <meta 
          name="description" 
          content="Portfolio of Nitesh Kumar, a Software Engineer II with 7+ years of experience in test automation, quality assurance, and building scalable automation frameworks at OLA." 
        />
        <meta name="keywords" content="software engineer, SDET, test automation, Java, Selenium, API testing, Bengaluru, QA engineer" />
        <link rel="canonical" href="https://niteshkumar.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
