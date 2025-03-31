"use client";
import BackToTop from "@/common/BackToTop";
import Footer from "@/common/Footer";
import ClubMembership from "@/components/ClubMembership";
import Hero from "@/components/Hero";
import LookFamiliar from "@/components/LookFamiliar";
import MeetPumpions from "@/components/MeetPumpions";
import OgPumpions from "@/components/OgPumpions";
import PumpionsFaq from "@/components/PumpionsFaq";
import PumpMap from "@/components/PumpMap";

export default function Home() {
  return (
    <>
      <Hero />
      <MeetPumpions />
      <LookFamiliar />
      <ClubMembership />
      <PumpMap />
      <OgPumpions />
      <PumpionsFaq />
      <Footer />
      <BackToTop />
    </>
  );
}
