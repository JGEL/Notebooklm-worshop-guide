
import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Card from '../components/Card';
import { WORKSHOP_INTRODUCTION, NAV_LINKS } from '../constants';
import { ChevronRightIcon, AcademicCapIcon } from '../components/icons/Icons';

const HomePage: React.FC = () => {
  const pageNavLinks = NAV_LINKS.filter(link => link.path !== '/');

  return (
    <div className="space-y-12">
      <PageHeader title={WORKSHOP_INTRODUCTION.title} Icon={AcademicCapIcon} />
      
      <Card className="bg-gradient-to-r from-primary to-sky-500 text-white shadow-2xl">
        <p className="text-xl leading-relaxed">{WORKSHOP_INTRODUCTION.text}</p>
      </Card>

      <section>
        <h2 className="text-2xl font-semibold text-neutral-dark mb-6 text-center">Explorar Secciones</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pageNavLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              <Card 
                title={link.label} 
                className="hover:shadow-2xl hover:scale-105 transform transition-all duration-300 cursor-pointer border border-primary-light hover:border-primary"
                icon={<ChevronRightIcon className="h-6 w-6" />}
              >
                <p className="text-sm text-neutral-DEFAULT">
                  Haz clic para ver detalles sobre {link.label.toLowerCase()}.
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Card>
        <h3 className="text-xl font-semibold text-neutral-dark mb-3">Bienvenido/a al Taller</h3>
        <p>
          Esta guía interactiva te ayudará a comprender todos los aspectos del taller "Experiencia Práctica con NotebookLM". 
          Navega a través de las secciones para conocer la estructura, los objetivos de aprendizaje, 
          las capacidades de NotebookLM y cómo puede ser aplicado en la educación médica.
        </p>
      </Card>
    </div>
  );
};

export default HomePage;
