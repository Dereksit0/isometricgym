import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Schedule from "@/components/Schedule";
import Pricing from "@/components/Pricing";
import Community from "@/components/Community";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <Services />
        <Team />
        <Schedule />
        <Pricing />
        <Community />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
