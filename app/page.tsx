
import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import TechnicalExpertise from "@/components/home/TechnicalExpertise";
import AboutPreview from "@/components/home/AboutPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <TechnicalExpertise />
      <AboutPreview />
      <ContactCTA />
    </main>
  );
}
