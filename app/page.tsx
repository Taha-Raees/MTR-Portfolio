import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ParticleEffect from "@/components/ParticleEffect";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
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
