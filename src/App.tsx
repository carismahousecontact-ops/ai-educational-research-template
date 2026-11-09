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
import { WisdomOperations } from './components/WisdomOperations';
import { LearningAgentCockpit } from './components/LearningAgentCockpit';
import { FirebaseSkillsManager } from './components/FirebaseSkillsManager';
import { ProjectsMatrix } from './components/ProjectsMatrix';
import { InvitedTalksTerminal } from './components/InvitedTalksTerminal';
import { WritingReader } from './components/WritingReader';
import { Footer } from './components/Footer';
import { ThinkChallenge } from './components/ThinkChallenge';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [thinkChallengeOpen, setThinkChallengeOpen] = useState<boolean>(false);

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
      id="top"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[var(--logos-navy)] text-[var(--logos-ivory)] flex flex-col font-sans transition-colors selection:bg-blue-600/30 selection:text-white relative"
    >
      <ParticleBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header
          lang={lang}
          onToggleLang={handleToggleLang}
          onOpenCockpit={() => scrollToSection('cockpit')}
          onOpenThinkChallenge={() => setThinkChallengeOpen(true)}
        />
        <main className="flex-1">
          <Hero
            lang={lang}
            onExploreCockpit={() => scrollToSection('cockpit')}
            onExploreProjects={() => scrollToSection('projects')}
          />
          <ResearchPathways lang={lang} />
          <WisdomOperations lang={lang} />
          <LearningAgentCockpit lang={lang} />
          <FirebaseSkillsManager lang={lang} />
          <ProjectsMatrix lang={lang} />
          <InvitedTalksTerminal lang={lang} />
          <WritingReader lang={lang} />
        </main>
        <Footer lang={lang} />
        <ThinkChallenge
          lang={lang}
          isOpen={thinkChallengeOpen}
          onClose={() => setThinkChallengeOpen(false)}
        />
      </div>
    </div>
  );
}
