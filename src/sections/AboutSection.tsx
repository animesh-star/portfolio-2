import React from 'react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col items-center justify-center text-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden select-none">
      {/* Decorative 3D Images */}
      {/* Top-left Moon: w-[120px] sm:w-[160px] md:w-[210px], top-[4%] left-[1%] sm:left-[2%] md:left-[4%] */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="3D Moon Icon"
          className="w-full h-auto object-contain"
          loading="lazy"
          draggable="false"
        />
      </FadeIn>

      {/* Top-right Lego: w-[120px] sm:w-[160px] md:w-[210px], top-[4%] right-[1%] sm:right-[2%] md:right-[4%] */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="3D Lego Icon"
          className="w-full h-auto object-contain"
          loading="lazy"
          draggable="false"
        />
      </FadeIn>

      {/* Bottom-left 3D Object: w-[100px] sm:w-[140px] md:w-[180px], bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 w-[100px] sm:w-[140px] md:w-[180px] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D Abstract Object"
          className="w-full h-auto object-contain"
          loading="lazy"
          draggable="false"
        />
      </FadeIn>

      {/* Bottom-right 3D Group: w-[130px] sm:w-[170px] md:w-[220px], bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D Composition Group"
          className="w-full h-auto object-contain"
          loading="lazy"
          draggable="false"
        />
      </FadeIn>

      {/* Central Content */}
      <div className="flex flex-col items-center max-w-[620px] z-20 px-4">
        {/* Title */}
        <FadeIn delay={0} y={40} className="w-full">
          <h2 
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading/text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Scroll-reveal character text block */}
        <AnimatedText
          text="With more than 6+ months of experience in design, i focus on web design and ui/ux, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
          className="text-[#D7E2EA] font-medium text-center"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />

        {/* Gap between text block and button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact Button */}
        <FadeIn delay={0.1} y={20}>
          <ContactButton onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
