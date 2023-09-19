import React from "react";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Projects from "@/components/Home/Projects/Projects";
import HobbiesSection from "@/components/Home/Hobbies/HobbiesSection";

// This is the home page of the entire website
export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <HobbiesSection />
    </>
  );
}
