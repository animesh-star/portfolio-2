import React from 'react';
import ContactButton from '../components/ContactButton';
import Magnet from '../components/Magnet';
import FadeIn from '../components/FadeIn';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8 z-30">
        <a href="#about" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">About</a>
        <a href="#services" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">Price</a>
        <a href="#projects" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">Projects</a>
        <a href="#contact" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">Contact</a>
      </FadeIn>

      {/* Hero Heading Container */}
      <div className="w-full overflow-hidden mt-6 sm:mt-4 md:-mt-5 flex items-center justify-center pointer-events-none select-none z-0">
        <FadeIn delay={0.15} y={40} className="w-full flex justify-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[7vw] sm:text-[7.5vw] md:text-[8vw] lg:text-[8.5vw] text-center w-full select-none">
            Hi, i&apos;m animesh
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait (Centered Absolutely) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none">
        <FadeIn delay={0.6} y={30} className="w-full h-full flex justify-center items-end pointer-events-auto">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full h-full"
          >
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Animesh Portrait"
              className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              draggable="false"
              loading="eager"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 w-full z-20 mt-auto">
        <FadeIn delay={0.35} y={20} className="text-left">
          <p 
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
