import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Preloader = dynamic(() => import("@/components/Preloader"), { ssr: false });
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Founder from "@/components/Founder";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CostSection from "@/components/CostSection";
import MidCTA from "@/components/MidCTA";
import Timeline90 from "@/components/Timeline90";
import CursorGlow from "@/components/CursorGlow";
import CursorTrail from "@/components/CursorTrail";
import ParallaxGrid from "@/components/ParallaxGrid";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import GlitchLine from "@/components/GlitchLine";
import CaseStudiesHeading from "@/components/CaseStudiesHeading";
import CaseMedical from "@/components/CaseMedical";
import CaseCrypto from "@/components/CaseCrypto";
import CaseBetting from "@/components/CaseBetting";
import CaseIGaming from "@/components/CaseIGaming";
import AgencyComparison from "@/components/AgencyComparison";
import Reporting from "@/components/Reporting";
import Urgency from "@/components/Urgency";


export default function Home() {
  return (
    <main>
      <Preloader />
      <ParallaxGrid />
      <ScrollProgress />
      <CursorGlow />
      <CursorTrail />
      <BackToTop />
      <Navbar />
      <Hero />
      <GlitchLine />
      <Marquee />
      <GlitchLine />
      <Problem />
      <GlitchLine />
      <CostSection />
      <GlitchLine />
      <MidCTA />
      <GlitchLine />
      <Services />
      <GlitchLine />
      <Timeline90 />
      <GlitchLine />
      <Marquee />
      <GlitchLine />
      <Process />
      <GlitchLine />
      <Founder />
      <GlitchLine />
      <div id="cases">
        <CaseStudiesHeading />
        <CaseMedical />
        <GlitchLine />
        <CaseCrypto />
        <GlitchLine />
        <CaseBetting />
        <GlitchLine />
        <CaseIGaming />
      </div>
      <GlitchLine />
      <AgencyComparison />
      <GlitchLine />
      <About />
      <GlitchLine />
      <Reporting />
      <GlitchLine />
      <Urgency />
      <GlitchLine />
      <FAQ />
      <GlitchLine />
      <CTA />
      <Footer />
    </main>
  );
}
