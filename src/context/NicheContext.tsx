import React, { createContext, useContext, useState, useEffect } from 'react';

export type NicheMode = 'holistica' | 'educacion';

interface NicheContextType {
  mode: NicheMode;
  setMode: (mode: NicheMode) => void;
  toggleMode: () => void;
  targetSection: string | null;
  triggerNav: (sectionId: string) => void;
}

const NicheContext = createContext<NicheContextType | undefined>(undefined);

export const NicheProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<NicheMode>(() => {
    try {
      const saved = localStorage.getItem('casaKintiMode');
      return saved === 'educacion' ? 'educacion' : 'holistica';
    } catch {
      return 'holistica';
    }
  });

  const setMode = (newMode: NicheMode) => {
    setModeState(newMode);
    try {
      localStorage.setItem('casaKintiMode', newMode);
    } catch {
      // Ignore storage errors
    }
  };

  const [targetSection, setTargetSection] = useState<string | null>(null);

  const triggerNav = (sectionId: string) => {
    const cleanId = sectionId.replace('#', '');
    setTargetSection(cleanId + '-' + Date.now());
  };

  const toggleMode = () => {
    setMode(mode === 'holistica' ? 'educacion' : 'holistica');
  };

  useEffect(() => {
    document.body.setAttribute('data-mode', mode);
  }, [mode]);

  return (
    <NicheContext.Provider value={{ mode, setMode, toggleMode, targetSection, triggerNav }}>
      {children}
    </NicheContext.Provider>
  );
};

export const useNicheMode = (): NicheContextType => {
  const context = useContext(NicheContext);
  if (!context) {
    throw new Error('useNicheMode must be used within a NicheProvider');
  }
  return context;
};
