import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialities";
import SuppotSection from "@/components/SupportSection";
import IntroSection from "@/components/IntroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-[#263419] font-sans selection:bg-[#263419] selection:text-cream">
      <Header />
      <Hero />
      <About />
      <Specialties/>
      <SuppotSection/>
      <IntroSection/>
    </main>
  );
}