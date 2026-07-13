import React from 'react';
import FadeIn from '../components/FadeIn';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    number: "01",
    name: "3D Modeling",
    description: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
  },
  {
    number: "02",
    name: "Rendering",
    description: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."
  },
  {
    number: "03",
    name: "Motion Design",
    description: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."
  },
  {
    number: "04",
    name: "Branding",
    description: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."
  },
  {
    number: "05",
    name: "Web Design",
    description: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section 
      id="services" 
      className="relative bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full flex flex-col items-center select-none"
    >
      <div className="w-full max-w-5xl">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 
            className="text-[#0C0C0C] font-black uppercase centered mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="flex flex-col w-full">
          {SERVICES.map((item, index) => (
            <FadeIn 
              key={item.number}
              delay={index * 0.1}
              y={30}
              className="w-full"
            >
              <div 
                className="flex flex-row items-center gap-6 sm:gap-10 md:gap-16 w-full py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] first:border-t border-[rgba(12,12,12,0.15)]"
              >
                {/* Number */}
                <div 
                  className="font-black text-[#0C0C0C] select-none leading-none w-[20%] text-left shrink-0" 
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 140px)' }}
                >
                  {item.number}
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col text-left w-[80%]">
                  <h3 
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide mb-2 leading-tight" 
                    style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
                  >
                    {item.name}
                  </h3>
                  <p 
                    className="font-light text-[#0C0C0C] opacity-60 leading-relaxed max-w-2xl" 
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
