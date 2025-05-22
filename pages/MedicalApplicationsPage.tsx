
import React from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import { MEDICAL_APPLICATIONS } from '../constants';
import type { MedicalApplication } from '../types';
import { BeakerIcon } from '../components/icons/Icons';


const MedicalApplicationCard: React.FC<{ application: MedicalApplication }> = ({ application }) => {
    const IconComponent = application.icon;
    return (
    <Card 
        title={application.title} 
        className="h-full"
        icon={IconComponent ? <IconComponent className="h-7 w-7 text-primary" /> : undefined}
    >
      <ul className="list-disc list-inside space-y-1 text-sm">
        {application.details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Card>
  );
};

const MedicalApplicationsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <PageHeader 
        title="Aplicaciones en Educación Médica" 
        subtitle="NotebookLM ofrece diversas aplicaciones potenciales en el contexto de la educación médica:"
        Icon={BeakerIcon} 
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MEDICAL_APPLICATIONS.map((app) => (
          <MedicalApplicationCard key={app.id} application={app} />
        ))}
      </div>
    </div>
  );
};

export default MedicalApplicationsPage;
