import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormState({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      id="contact" 
      className="relative bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 pt-20 pb-12 w-full flex flex-col items-center border-t border-[#D7E2EA]/10 select-none"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-12 sm:mb-16">
          <h2 
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            Get In Touch
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 w-full items-start">
          {/* Info Side */}
          <FadeIn delay={0.1} y={30} className="flex flex-col gap-6 sm:gap-8 text-left">
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide">
              Let&apos;s collaborate
            </h3>
            
            <p className="font-light leading-relaxed text-[#D7E2EA]/75 text-sm sm:text-base max-w-md">
              I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Reach out and let&apos;s create something outstanding!
            </p>

            <div className="flex flex-col gap-4 mt-2">
              <a 
                href="mailto:animeshweb.19@gmail.com" 
                className="flex items-center gap-3 hover:text-white transition-colors duration-200 w-fit text-sm sm:text-base font-light"
              >
                <Mail size={20} className="text-[#BBCCD7]" />
                <span>animeshweb.19@gmail.com</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a 
                href="https://github.com/animesh-star?tab=repositories" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-[#D7E2EA]/15 flex items-center justify-center hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/50 hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/animesh-goswami-026679414" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-[#D7E2EA]/15 flex items-center justify-center hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/50 hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com/aniii045" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-[#D7E2EA]/15 flex items-center justify-center hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/50 hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </FadeIn>

          {/* Form Side */}
          <FadeIn delay={0.2} y={30} className="w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full text-left">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-xs uppercase tracking-widest font-semibold text-[#D7E2EA]/60">Name</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full bg-[#121212] border border-[#D7E2EA]/10 focus:border-[#BBCCD7] rounded-xl px-4 py-3 text-sm sm:text-base text-[#D7E2EA] outline-none transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-xs uppercase tracking-widest font-semibold text-[#D7E2EA]/60">Email</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full bg-[#121212] border border-[#D7E2EA]/10 focus:border-[#BBCCD7] rounded-xl px-4 py-3 text-sm sm:text-base text-[#D7E2EA] outline-none transition-colors duration-300"
                />
              </div>

              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-xs uppercase tracking-widest font-semibold text-[#D7E2EA]/60">Message</label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Enter your message"
                  className="w-full bg-[#121212] border border-[#D7E2EA]/10 focus:border-[#BBCCD7] rounded-xl px-4 py-3 text-sm sm:text-base text-[#D7E2EA] outline-none resize-none transition-colors duration-300"
                />
              </div>

              {submitted ? (
                <div className="text-emerald-400 font-medium uppercase tracking-wider text-sm mt-2">
                  Thank you! Your message has been sent.
                </div>
              ) : (
                <div className="mt-2">
                  <ContactButton label="Submit Message" className="w-full sm:w-auto" />
                </div>
              )}
            </form>
          </FadeIn>
        </div>

        {/* Footer Area */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full mt-20 pt-8 border-t border-[#D7E2EA]/5 gap-4">
          <p className="text-xs sm:text-sm text-[#D7E2EA]/40 font-light">
            &copy; {new Date().getFullYear()} Animesh. All Rights Reserved.
          </p>

          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-[#D7E2EA]/10 flex items-center justify-center hover:bg-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 transition-colors duration-300 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
