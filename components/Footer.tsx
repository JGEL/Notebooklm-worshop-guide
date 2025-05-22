
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-dark text-neutral-light py-6 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Guía del Taller NotebookLM. 
          Basado en la documentación proporcionada.
        </p>
        <p className="text-xs mt-1">
          Desarrollado con fines educativos.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
