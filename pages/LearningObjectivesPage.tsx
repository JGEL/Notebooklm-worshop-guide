
import React from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import { LEARNING_OBJECTIVES } from '../constants';
import type { LearningObjective } from '../types';
import { LightBulbIcon } from '../components/icons/Icons'; // Using a generic icon for the page

const LearningObjectiveItem: React.FC<{ objective: LearningObjective }> = ({ objective }) => {
  const IconComponent = objective.icon;
  return (
    <Card 
      title={objective.phase} 
      className="mb-6"
      icon={IconComponent ? <IconComponent className="h-8 w-8 text-primary" /> : undefined}
    >
      <ul className="list-disc list-inside space-y-1">
        {objective.objectives.map((item, index) => (
          <li key={index} className="text-neutral-DEFAULT">{item}</li>
        ))}
      </ul>
    </Card>
  );
};

const LearningObjectivesPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Objetivos de Aprendizaje" 
        subtitle="Al finalizar el taller, los participantes serán capaces de:"
        Icon={LightBulbIcon}
      />
      <div>
        {LEARNING_OBJECTIVES.map((objective) => (
          <LearningObjectiveItem key={objective.id} objective={objective} />
        ))}
      </div>
    </div>
  );
};

export default LearningObjectivesPage;
