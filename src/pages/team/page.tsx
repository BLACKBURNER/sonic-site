import WoodenDivider from '../../components/base/WoodenDivider';
import SectionReveal from '../../components/feature/SectionReveal';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <TeamHero />
      <WoodenDivider />
      <SectionReveal direction="up" intensity="subtle">
        <MeetTheTeam />
      </SectionReveal>
      <SectionReveal direction="up" intensity="subtle" delay={80}>
        <RecruitmentPhilosophy />
      </SectionReveal>
      <WoodenDivider />
      <SectionReveal direction="up" intensity="subtle">
        <TeamStats />
      </SectionReveal>
      <SectionReveal direction="up" intensity="subtle" delay={60}>
        <CoreValues />
      </SectionReveal>
      <WoodenDivider />
      <SectionReveal direction="up" intensity="subtle">
        <TrainingDevelopment />
      </SectionReveal>
      <SectionReveal direction="up" intensity="subtle" delay={80}>
        <ClientTrust />
      </SectionReveal>
      <WoodenDivider />
      <SectionReveal direction="up" intensity="medium">
        <TeamCTA />
      </SectionReveal>
    </div>
  );
}

import TeamHero from './components/TeamHero';
import MeetTheTeam from './components/MeetTheTeam';
import RecruitmentPhilosophy from './components/RecruitmentPhilosophy';
import TeamStats from './components/TeamStats';
import CoreValues from './components/CoreValues';
import TrainingDevelopment from './components/TrainingDevelopment';
import ClientTrust from './components/ClientTrust';
import TeamCTA from './components/TeamCTA';