import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import AboutPreview from "@/components/home/AboutPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <Services />
      <Process />
      <AboutPreview />
      <ContactCTA />
    </main>
  );
}