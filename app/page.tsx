import Header from "@/components/header"; 
import Footer from "@/components/footer";
import Hero from "@/components/hero";
// Ensure these filenames match exactly what is in your /components/ui folder
import AudienceSection from "@/components/ui/whoIsHynoxCampus"; 
import HynoxAudienceTracks from "@/components/ui/howHynoxWorks";
import ProgramComparison from "@/components/ui/comparison";
import FinalCTA from "@/components/ui/finalCTA";

export default function Home() {
  return (
    <>
      {/* Set isScrolled to false for the initial load view */}
      <Header isScrolled={false} /> 
      <main>
        <Hero />
        <AudienceSection />
        <HynoxAudienceTracks />
        <ProgramComparison />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}