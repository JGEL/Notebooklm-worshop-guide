
import React from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import { WORKSHOP_PHASES } from '../constants';
import type { WorkshopPhase } from '../types';
import { PresentationChartLineIcon } from '../components/icons/Icons';

const WorkshopPhaseCard: React.FC<{ phase: WorkshopPhase }> = ({ phase }) => {
  const IconComponent = phase.icon;
  return (
    <Card 
      title={phase.title} 
      className="h-full flex flex-col"
      icon={IconComponent ? <IconComponent className="h-8 w-8 text-primary" /> : undefined}
    >
      <p className="text-sm text-accent font-semibold mb-2">{phase.duration}</p>
      <ul className="list-disc list-inside space-y-1 text-sm flex-grow">
        {phase.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Card>
  );
};

const WorkshopStructurePage: React.FC = () => {
  return (
    <div className="space-y-8">
      <PageHeader title="Estructura del Taller" subtitle="El taller se divide en cuatro fases secuenciales:" Icon={PresentationChartLineIcon} />
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {WORKSHOP_PHASES.map((phase) => (
          <WorkshopPhaseCard key={phase.id} phase={phase} />
        ))}
      </div>
    </div>
  );
};

export default WorkshopStructurePage;
