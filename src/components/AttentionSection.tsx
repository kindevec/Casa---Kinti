import React from 'react';
import { useNicheMode } from '../context/NicheContext';
import { INCLUDED_EXPERIENCE_HOLISTICA, INCLUDED_EXPERIENCE_EDUCACION } from '../data';
import { AgendarCalendarIcon } from './FloralDecorations';
import { AnimatedConstructPhoto } from './AnimatedConstructPhoto';
import { FlowingExperienceList } from './FlowingExperienceList';

export const AttentionSection: React.FC = () => {
  const { mode } = useNicheMode();
  const experienceItems = mode === 'educacion' ? INCLUDED_EXPERIENCE_EDUCACION : INCLUDED_EXPERIENCE_HOLISTICA;

  return (
    <section id="atencion-personalizada" className="relative w-full overflow-hidden bg-white">
      <div className="absolute inset-0 flex pointer-events-none z-0">
        <div className="w-full lg:w-[30%] xl:w-[28%] bg-gradient-to-b from-[#4AAEA5] via-[#5CBDB5] to-[#3E9C93] h-[380px] lg:h-full relative overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <svg viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
              <circle cx="70" cy="120" r="2" fill="#FFFFFF" />
              <circle cx="280" cy="220" r="2.2" fill="#FFF5C0" />
              <circle cx="110" cy="620" r="1.8" fill="#FFEA79" />
              <circle cx="300" cy="720" r="2" fill="#FFFFFF" />
            </svg>
          </div>
        </div>
        <div className="hidden lg:block lg:w-[70%] xl:w-[72%] bg-white h-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          <div className="lg:col-span-5 flex flex-col justify-start items-center lg:items-start w-full lg:pt-28">
            <div className="w-full max-w-[480px] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.18)] border-[3px] border-[#FFD700]">
              <AnimatedConstructPhoto
                aspectRatio="landscape"
                imageSrc={
                  mode === 'educacion'
                    ? [
                        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
                        'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80',
                        'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
                        'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
                      ]
                    : [
                        '/experiencia-fuego-sagrado.jpg',
                        '/experiencia-circulo-mandala.jpg',
                        '/experiencia-comunidad-botica.jpg',
                        '/experiencia-diagnostico-pendulo.jpg',
                      ]
                }
                alt="Lo que incluye tu experiencia en Casa Kinti"
                className="w-full"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#133238] leading-tight">
                Lo que incluye tu experiencia en{' '}
                <span className="italic bg-gradient-to-r from-[#D4A346] via-[#B88E44] to-[#8C6420] bg-clip-text text-transparent font-normal">
                  Casa Kinti
                </span>
              </h3>
            </div>

            <FlowingExperienceList items={experienceItems} />

            <div className="pt-6 flex justify-center items-center w-full">
              <a
                href="#contacto"
                id="attention-cta-btn"
                className="relative overflow-hidden inline-flex items-center gap-2.5 bg-gradient-to-r from-[#FFEA79] via-[#E5C985] to-[#D4B26F] hover:from-[#FFF2B2] hover:via-[#ECD394] hover:to-[#DEC080] text-[#0A1C24] font-serif text-sm font-bold px-8 py-3.5 rounded-sm uppercase tracking-[0.16em] shadow-md hover:shadow-[0_8px_28px_rgba(212,178,111,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                <AgendarCalendarIcon className="relative z-10 w-4.5 h-4.5 text-[#0A1C24]" />
                <span className="relative z-10">Agenda tu diagnostico inicial</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
