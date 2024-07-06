// src/pages/Home.js
"use client"
import { useEffect } from 'react';
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ParticleEffect from "@/components/ParticleEffect";
import CustomCursor from "@/components/CustomCursor";
import * as gtag from '../lib/gtag';

export default function Home() {
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    handleRouteChange(window.location.pathname);
    window.addEventListener('popstate', () => handleRouteChange(window.location.pathname));

    return () => {
      window.removeEventListener('popstate', () => handleRouteChange(window.location.pathname));
    };
  }, []);

  return (
    <div className="relative">
      <CustomCursor />
      <ParticleEffect />
      <Hero />
      <Education />
      <Projects />
    </div>
  );
}
