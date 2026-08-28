import React from 'react';
import { Sparkles } from 'lucide-react';

export const CredentialsStrip: React.FC = () => {
  const credentials = [
    'EDUCADORA INFANTIL BILINGÜE',
    'MÁSTER EN PROBLEMAS DE APRENDIZAJE',
    'TERAPEUTA EN FLORES DE BACH Y HERBOLARIA',
    'MUJER MEDICINA CERTIFICADA EN MEDICINA ANCESTRAL',
  ];

  return (
    <div className="relative z-20 py-5 bg-gradient-to-r from-[#C9D4F5] via-[#FFFFFF] to-[#C9D4F5] border-y border-[#9B8FD9]/30 shadow-2xs overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center">
          {credentials.map((cred, index) => (
            <React.Fragment key={index}>
              <div className="inline-flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#6B7FD1] shrink-0" />
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.18em] text-[#3E4A7A] uppercase">
                  {cred}
                </span>
              </div>
              {index < credentials.length - 1 && (
                <span className="hidden md:inline-block text-[#9B8FD9] font-bold select-none">
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
