// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
// David Serrano, October 24th, 2023
// If you're reading this, welcome to my portfolio code
// Hope you enjoy it!
// Free AF. Take it all
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
