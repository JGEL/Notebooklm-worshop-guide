
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, Icon }) => {
  return (
    <div className="mb-8 text-center border-b-2 border-primary pb-4">
      <div className="flex justify-center items-center mb-2">
        {Icon && <Icon className="h-12 w-12 text-primary mr-3" />}
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark">{title}</h1>
      </div>
      {subtitle && <p className="text-lg text-neutral-DEFAULT mt-2">{subtitle}</p>}
    </div>
  );
};

export default PageHeader;
