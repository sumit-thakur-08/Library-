// src/pages/Home.jsx

import LenisScroll from "../components/lenis-scroll";

// Sections
import HeroSection from "../sections/hero-section";
import HowItWorksSection from "../sections/how-it-works-section";
import MeetOurTeamSection from "../sections/meet-our-team-section";
import OurTestimonialsSection from "../sections/our-testimonials-section";
import OurPricingSection from "../sections/our-pricing-section";
import FaqSection from "../sections/faq-section";
import CallToActionSection from "../sections/call-to-action-section";

export default function Home() {
  return (
    <>
      <LenisScroll />
      <HeroSection />
      <HowItWorksSection />
      <MeetOurTeamSection />
      <OurTestimonialsSection />
      <OurPricingSection />
      <FaqSection />
      <CallToActionSection />
    </>
  );
}
