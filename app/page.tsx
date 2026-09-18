import { Header } from "./components/Header";
import { RevealOnScroll } from "./components/RevealOnScroll";
import {
  AccessSection,
  CareSection,
  ConceptSection,
  FinalCtaSection,
  FirstVisitSection,
  Footer,
  GuestShootingSection,
  HeroSection,
  InbodySection,
  MenuPriceSection,
  ProblemSection,
  SpaceSection,
  TrainingSection,
  WhySection,
} from "./components/LandingSections";

export default function Home() {
  return <>
    <RevealOnScroll />
    <Header />
    <main>
      <HeroSection />
      <ProblemSection />
      <ConceptSection />
      <WhySection />
      <TrainingSection />
      <CareSection />
      <InbodySection />
      <SpaceSection />
      <GuestShootingSection />
      <MenuPriceSection />
      <FirstVisitSection />
      <AccessSection />
      <FinalCtaSection />
    </main>
    <Footer />
  </>;
}
