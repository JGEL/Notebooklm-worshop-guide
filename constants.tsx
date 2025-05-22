
import React from 'react';
import type { NavLinkItem, WorkshopPhase, LearningObjective, NotebookLMFunctionality, MedicalApplication, ParticipantProfileItem } from './types';
import { AcademicCapIcon, BeakerIcon, BookOpenIcon, ChatBubbleLeftEllipsisIcon, DocumentChartBarIcon, DocumentMagnifyingGlassIcon, LightBulbIcon, PresentationChartLineIcon, SparklesIcon, UserGroupIcon, VideoCameraIcon } from './components/icons/Icons';


export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Estructura del Taller', path: '/estructura' },
  { label: 'Objetivos de Aprendizaje', path: '/objetivos' },
  { label: 'Sobre NotebookLM', path: '/notebooklm' },
  { label: 'Aplicaciones Médicas', path: '/aplicaciones' },
  { label: 'Perfil del Participante', path: '/perfil' },
];

export const WORKSHOP_INTRODUCTION = {
  title: "Guía de Implementación: Taller NotebookLM en Educación Médica",
  text: "Este documento proporciona una visión general de los materiales desarrollados para el taller \"Experiencia Práctica con NotebookLM\" enfocado en educación médica. El taller está diseñado para ser implementado en un formato de 60 minutos con trabajo en grupos pequeños, siguiendo una metodología de Design Thinking adaptada al contexto médico.",
};

export const WORKSHOP_PHASES: WorkshopPhase[] = [
  {
    id: 'fase1',
    title: 'EXPLORACIÓN EN CUADERNO',
    duration: '20 min',
    description: [
      'Familiarización con la interfaz y funcionalidades básicas',
      'Carga y análisis de documentos médicos de muestra',
    ],
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    id: 'fase2',
    title: 'DEFINICIÓN DE LA APLICACIÓN',
    duration: '10 min',
    description: [
      'Identificación de problemas o necesidades en la educación médica',
      'Selección y definición clara del problema a abordar',
    ],
    icon: LightBulbIcon,
  },
  {
    id: 'fase3',
    title: 'IDEACIÓN DE SOLUCIONES',
    duration: '20 min',
    description: [
      'Generación de ideas sobre aplicaciones de NotebookLM',
      'Desarrollo de conceptos iniciales',
    ],
    icon: SparklesIcon,
  },
  {
    id: 'fase4',
    title: 'SELECCIÓN Y PROTOTIPADO',
    duration: '10 min',
    description: [
      'Evaluación y selección de ideas prometedoras',
      'Desarrollo de un prototipo conceptual o plan de implementación',
    ],
    icon: PresentationChartLineIcon,
  },
];

export const LEARNING_OBJECTIVES: LearningObjective[] = [
  {
    id: 'obj1',
    phase: 'Fase de Exploración',
    objectives: [
      'Navegar con fluidez por la interfaz de NotebookLM',
      'Cargar y organizar diferentes tipos de documentos médicos',
      'Realizar consultas básicas sobre el contenido cargado',
    ],
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    id: 'obj2',
    phase: 'Fase de Definición',
    objectives: [
      'Identificar problemas específicos en la educación médica que podrían beneficiarse del uso de NotebookLM',
      'Analizar las limitaciones actuales en el procesamiento de información médica',
      'Formular objetivos claros para el uso de la herramienta',
    ],
    icon: LightBulbIcon,
  },
  {
    id: 'obj3',
    phase: 'Fase de Ideación',
    objectives: [
      'Generar propuestas innovadoras para aplicar NotebookLM en diferentes contextos educativos médicos',
      'Diseñar flujos de trabajo que integren la herramienta en procesos educativos existentes',
      'Proponer soluciones a desafíos específicos de la educación médica',
    ],
    icon: SparklesIcon,
  },
  {
    id: 'obj4',
    phase: 'Fase de Selección y Prototipado',
    objectives: [
      'Evaluar la viabilidad y el impacto potencial de diferentes ideas',
      'Desarrollar un prototipo o plan de implementación para la aplicación seleccionada',
      'Presentar de manera efectiva la propuesta desarrollada',
    ],
    icon: PresentationChartLineIcon,
  },
];

export const NOTEBOOKLM_DEFINITION = {
  title: "¿Qué es NotebookLM?",
  text: "NotebookLM es una herramienta de inteligencia artificial desarrollada por Google, basada en el modelo Gemini 2.0, que funciona como un asistente de investigación y aprendizaje personalizado. Permite a los usuarios cargar, organizar y analizar diversos tipos de documentos, extrayendo información relevante, respondiendo preguntas y generando contenido basado en las fuentes proporcionadas.",
};

export const NOTEBOOKLM_FUNCTIONALITIES: NotebookLMFunctionality[] = [
  {
    id: 'func1',
    title: 'Carga y análisis de documentos',
    icon: DocumentChartBarIcon,
    details: [
      {
        title: 'Permite subir hasta 50 archivos diferentes (300 en la versión Plus) de diversos formatos:',
        points: ['PDFS', 'Google Docs', 'Presentaciones', 'Vídeos de YouTube', 'Sitios web', 'Archivos de audio'],
      }
    ],
  },
  {
    id: 'func2',
    title: 'Procesamiento de información',
    icon: BookOpenIcon,
    details: [
        {
            title: '',
            points: [
                'Análisis de contenido y establecimiento de conexiones entre fuentes',
                'Extracción de puntos clave',
                'Generación de resúmenes',
                'Respuestas a preguntas específicas basadas en el contenido',
            ]
        }
    ],
  },
  {
    id: 'func3',
    title: 'Creación de contenido',
    icon: AcademicCapIcon,
    details: [
        {
            title: '',
            points: [
                'Generación de guías de estudio',
                'Creación de cuestionarios',
                'Elaboración de planes de clase',
                'Organización de información en diferentes formatos (cronogramas, índices, etc.)',
            ]
        }
    ],
  },
  {
    id: 'func4',
    title: 'Funciones multimodales',
    icon: VideoCameraIcon,
    details: [
        {
            title: '',
            points: [
                'Conversión de texto a audio',
                'Análisis de contenido visual',
                'Creación de diálogos y formatos interactivos',
            ]
        }
    ],
  },
];

export const MEDICAL_APPLICATIONS: MedicalApplication[] = [
  {
    id: 'app1',
    title: 'Organización y síntesis de literatura médica',
    details: [
      'Análisis de artículos científicos y guías clínicas',
      'Extracción de hallazgos clave de múltiples estudios',
      'Comparación de diferentes enfoques terapéuticos',
    ],
    icon: DocumentChartBarIcon,
  },
  {
    id: 'app2',
    title: 'Apoyo al aprendizaje personalizado',
    details: [
      'Creación de materiales de estudio adaptados a diferentes especialidades',
      'Generación de preguntas de autoevaluación basadas en contenido específico',
      'Explicación de conceptos médicos complejos en términos más accesibles',
    ],
    icon: AcademicCapIcon,
  },
  {
    id: 'app3',
    title: 'Preparación de casos clínicos',
    details: [
      'Organización de información de historias clínicas para su estudio',
      'Generación de preguntas de análisis sobre casos específicos',
      'Creación de escenarios de simulación para práctica clínica',
    ],
    icon: PresentationChartLineIcon,
  },
  {
    id: 'app4',
    title: 'Investigación médica',
    details: [
      'Análisis de grandes volúmenes de literatura científica',
      'Identificación de patrones y conexiones entre diferentes estudios',
      'Generación de hipótesis basadas en la evidencia disponible',
    ],
    icon: BeakerIcon,
  },
  {
    id: 'app5',
    title: 'Educación continua',
    details: [
      'Actualización de conocimientos basados en las últimas publicaciones',
      'Creación de resúmenes de conferencias y seminarios',
      'Organización de información para certificaciones y recertificaciones',
    ],
    icon: ChatBubbleLeftEllipsisIcon,
  },
];

export const PARTICIPANT_PROFILES: ParticipantProfileItem[] = [
    { id: 'p1', profile: 'Docentes de facultades de medicina' },
    { id: 'p2', profile: 'Estudiantes de medicina en diferentes niveles' },
    { id: 'p3', profile: 'Médicos residentes' },
    { id: 'p4', profile: 'Profesionales de la salud interesados en educación médica' },
    { id: 'p5', profile: 'Investigadores en ciencias de la salud' },
];

export const PARTICIPANT_PROFILE_INFO = {
    title: "Perfil de los participantes",
    description: "El taller está dirigido a profesionales del ámbito médico, que pueden incluir:",
    icon: UserGroupIcon,
};


