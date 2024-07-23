import React from 'react';
import Hero from '../Hero';
import Features from '../Features';
import Blogs from '../Blogs';
import FeaturesTab from '../FeaturesTab';
import CTA from '../CTA';
import FAQ from '../FAQS';

interface CommonProps {
  data: any;
  id: number;
}

interface DynamicComponentProps extends CommonProps {
  componentType: string;
}

const DynamicComponent: React.FC<DynamicComponentProps> = ({ componentType, data, id }) => {
  switch (componentType) {
    case 'Hero':
      return <Hero data={data} id={id}/>;
    case 'Features':
      return <Features data={data} id={id} />;
    case 'Blogs':
      return <Blogs data={data} id={id} />;
    case 'FeaturesTab':
      return <FeaturesTab data={data} id={id} />;
    case 'CTA':
      return <CTA data={data} id={id} />;
    case 'FAQ':
      return <FAQ data={data} id={id} />;
    default:
      return null;
  }
};

export default DynamicComponent;
