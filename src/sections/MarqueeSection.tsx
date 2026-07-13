import React, { useRef, useEffect } from 'react';

const ROW1_IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif"
];

const ROW2_IMAGES = [
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const row1 = row1Ref.current;
      const row2 = row2Ref.current;
      if (!section || !row1 || !row2) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      
      // Calculate scroll offset:
      // (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      // Row 1 moves right: translateX(offset - 200)
      // Row 2 moves left: translateX(-(offset - 200))
      // Adding -33.333% base translation to offset the tripled arrays and ensure seamless scroll coverage
      row1.style.transform = `translate3d(calc(-33.333% + ${offset - 200}px), 0px, 0px)`;
      row2.style.transform = `translate3d(calc(-33.333% - ${offset - 200}px), 0px, 0px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const row1Triple = [...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES];
  const row2Triple = [...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES];

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 w-full overflow-hidden flex flex-col gap-3 select-none"
    >
      {/* Row 1 */}
      <div className="w-full overflow-hidden whitespace-nowrap">
        <div 
          ref={row1Ref} 
          className="inline-flex gap-3"
          style={{ willChange: 'transform' }}
        >
          {row1Triple.map((url, i) => (
            <img 
              key={`row1-${i}`}
              src={url}
              alt={`Animesh 3D Marquee 1-${i}`}
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="w-full overflow-hidden whitespace-nowrap">
        <div 
          ref={row2Ref} 
          className="inline-flex gap-3"
          style={{ willChange: 'transform' }}
        >
          {row2Triple.map((url, i) => (
            <img 
              key={`row2-${i}`}
              src={url}
              alt={`Animesh 3D Marquee 2-${i}`}
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
