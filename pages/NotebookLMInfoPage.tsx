
import React from 'react';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import { NOTEBOOKLM_DEFINITION, NOTEBOOKLM_FUNCTIONALITIES } from '../constants';
import type { NotebookLMFunctionality, FunctionalityDetail } from '../types';
import { BookOpenIcon } from '../components/icons/Icons';


const FunctionalityDetailDisplay: React.FC<{ detail: FunctionalityDetail }> = ({ detail }) => (
  <>
    {detail.title && <p className="font-semibold text-neutral-dark mt-2">{detail.title}</p>}
    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
      {detail.points.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </>
);

const NotebookLMFunctionalityCard: React.FC<{ functionality: NotebookLMFunctionality }> = ({ functionality }) => {
  const IconComponent = functionality.icon;
  return (
    <Card 
      title={functionality.title} 
      className="h-full"
      icon={IconComponent ? <IconComponent className="h-7 w-7 text-primary" /> : undefined}
    >
      {functionality.details.map((detail, index) => (
        <FunctionalityDetailDisplay key={index} detail={detail} />
      ))}
    </Card>
  );
};


const NotebookLMInfoPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <PageHeader title="Análisis de NotebookLM en Educación Médica" Icon={BookOpenIcon} />
      
      <Card>
        <h2 className="text-2xl font-semibold text-primary mb-3">{NOTEBOOKLM_DEFINITION.title}</h2>
        <p className="text-lg leading-relaxed text-neutral-dark">{NOTEBOOKLM_DEFINITION.text}</p>
      </Card>

      <section>
        <h2 className="text-2xl font-semibold text-neutral-dark mb-6 text-center">Funcionalidades Principales</h2>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {NOTEBOOKLM_FUNCTIONALITIES.map((func) => (
            <NotebookLMFunctionalityCard key={func.id} functionality={func} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default NotebookLMInfoPage;
