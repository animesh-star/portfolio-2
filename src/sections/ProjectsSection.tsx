import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';

interface Project {
  number: string;
  category: string;
  name: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
}

const PROJECTS: Project[] = [
  {
    number: "01",
    category: "Client",
    name: "Nextlevel Studio",
    col1Image1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    col1Image2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    col2Image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85"
  },
  {
    number: "02",
    category: "Personal",
    name: "Aura Brand Identity",
    col1Image1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    col1Image2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    col2Image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85"
  },
  {
    number: "03",
    category: "Client",
    name: "Solaris Digital",
    col1Image1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    col1Image2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    col2Image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85"
  }
];

export const ProjectsSection: React.FC = () => {
  return (
    <section 
      id="projects" 
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20 w-full z-10 -mt-10 sm:-mt-12 md:-mt-14 select-none"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2 
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Stacking Cards List */}
        <div className="flex flex-col w-full relative">
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={project.number} 
              project={project} 
              index={index} 
              totalCards={PROJECTS.length} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll of this card's h-[85vh] parent container relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Calculate target scale based on index: e.g. Card 0 goes from 1.0 down to 0.94
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1.0, targetScale]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[85vh] flex justify-center items-start"
      style={{
        // Overlap containers using negative margin so that they stack on top of each other
        marginTop: index === 0 ? '0px' : '-55vh',
        zIndex: index + 1
      }}
    >
      <motion.div
        style={{
          scale,
          willChange: 'transform',
        }}
        className={`sticky w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] top-[calc(96px+${index * 28}px)] md:top-[calc(128px+${index * 28}px)]`}
      >
        {/* Top Row: Number, Category, Name, Live Project Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 pb-4 sm:pb-6 border-b border-[#D7E2EA]/10">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Huge Number */}
            <div 
              className="font-black text-[#D7E2EA] leading-none shrink-0" 
              style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
            >
              {project.number}
            </div>
            
            {/* Category and Project Name */}
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm text-[#D7E2EA] opacity-60 uppercase tracking-widest font-light">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold uppercase text-[#D7E2EA] tracking-wide leading-tight mt-0.5">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Live Project ghost button */}
          <LiveProjectButton className="shrink-0 mt-2 sm:mt-0" />
        </div>

        {/* Bottom Row: Image Grid (40% left, 60% right) */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 sm:gap-6 w-full mt-4 sm:mt-6">
          {/* Left Column (col-span-4 on md) */}
          <div className="md:col-span-4 flex flex-col gap-4 sm:gap-6 justify-between">
            <img
              src={project.col1Image1}
              alt={`${project.name} preview 1`}
              className="w-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px] border border-[#D7E2EA]/10 shadow-md"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              loading="lazy"
            />
            <img
              src={project.col1Image2}
              alt={`${project.name} preview 2`}
              className="w-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px] border border-[#D7E2EA]/10 shadow-md"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              loading="lazy"
            />
          </div>

          {/* Right Column (col-span-6 on md) */}
          <div className="md:col-span-6 flex">
            <img
              src={project.col2Image}
              alt={`${project.name} showcase`}
              className="w-full h-full min-h-[300px] md:min-h-0 object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px] border border-[#D7E2EA]/10 shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
