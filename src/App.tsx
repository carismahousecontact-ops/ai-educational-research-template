/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { ParticleBackground } from './components/ParticleBackground';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LearningAgentCockpit } from './components/LearningAgentCockpit';
import { ProjectsMatrix } from './components/ProjectsMatrix';
import { JourneyRadar } from './components/JourneyRadar';
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
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#08090b] text-[#f0f2f7] flex flex-col font-sans transition-colors selection:bg-blue-600/30 selection:text-white relative"
    >
      {/* Three.js Interactive Particle Background Canvas (Exact feature provided by user) */}
      <ParticleBackground />

      {/* Main UI Overlay (relative z-10) */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Antigravity Header */}
        <Header
          lang={lang}
          onToggleLang={handleToggleLang}
          onOpenCockpit={() => scrollToSection('cockpit')}
          zeroGActive={zeroGOpen}
          onToggleZeroG={() => setZeroGOpen((prev) => !prev)}
        />

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <Hero
            lang={lang}
            onExploreCockpit={() => scrollToSection('cockpit')}
            onExploreProjects={() => scrollToSection('projects')}
          />

          {/* Antigravity Agent Cockpit for Education Agent Skills */}
          <LearningAgentCockpit lang={lang} />

          {/* Selected Work & Systems Matrix */}
          <ProjectsMatrix lang={lang} />

          {/* Fieldwork & Implementation Trajectory (27 Regions) */}
          <JourneyRadar lang={lang} />

          {/* Global Research & Policy Panels (UNESCO, Stanford, IIT) */}
          <InvitedTalksTerminal lang={lang} />

          {/* Architectural Monographs & Research Papers */}
          <WritingReader lang={lang} />
        </main>

        {/* Footer */}
        <Footer lang={lang} onOpenZeroG={() => setZeroGOpen(true)} />

        {/* Zero Gravity Physics Easter Egg */}
        <ZeroGravityPlayground
          lang={lang}
          isOpen={zeroGOpen}
          onClose={() => setZeroGOpen(false)}
        />
      </div>
    </div>
  );
}
