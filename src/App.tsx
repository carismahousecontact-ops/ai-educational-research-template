/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { ParticleBackground } from './components/ParticleBackground';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ResearchPathways } from './components/ResearchPathways';
import { LearningAgentCockpit } from './components/LearningAgentCockpit';
import { FirebaseSkillsManager } from './components/FirebaseSkillsManager';
import { ProjectsMatrix } from './components/ProjectsMatrix';
import { InvitedTalksTerminal } from './components/InvitedTalksTerminal';
import { WritingReader } from './components/WritingReader';
import { Footer } from './components/Footer';
import { ZeroGravityPlayground } from './components/ZeroGravityPlayground';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [zeroGOpen, setZeroGOpen] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#08090b] text-[#f0f2f7] flex flex-col font-sans transition-colors selection:bg-blue-600/30 selection:text-white relative"
    >
      <ParticleBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header
          lang={lang}
          onToggleLang={handleToggleLang}
          onOpenCockpit={() => scrollToSection('cockpit')}
          zeroGActive={zeroGOpen}
          onToggleZeroG={() => setZeroGOpen((prev) => !prev)}
        />
        <main className="flex-1">
          <Hero
            lang={lang}
            onExploreCockpit={() => scrollToSection('cockpit')}
            onExploreProjects={() => scrollToSection('projects')}
          />
          <ResearchPathways lang={lang} />
          <LearningAgentCockpit lang={lang} />
          <FirebaseSkillsManager lang={lang} />
          <ProjectsMatrix lang={lang} />
          <InvitedTalksTerminal lang={lang} />
          <WritingReader lang={lang} />
        </main>
        <Footer lang={lang} onOpenZeroG={() => setZeroGOpen(true)} />
        <ZeroGravityPlayground
          lang={lang}
          isOpen={zeroGOpen}
          onClose={() => setZeroGOpen(false)}
        />
      </div>
    </div>
  );
}
