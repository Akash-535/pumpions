"use client";
import Footer from "@/common/Footer";
import ClubMembership from "@/components/ClubMembership";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import LookFamiliar from "@/components/LookFamiliar";
import MeetPumpions from "@/components/MeetPumpions";
import OgPumpions from "@/components/OgPumpions";
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
      <FAQ />
      <Footer />
    </>
  );
}
