import { Metadata } from "next";
import SelectComponent from "@/components/SelectComponent";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQS";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blogs from "@/components/Blogs";
import Testimonial from "@/components/Testimonial";
import initData from '../../data/testData.json';

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
  // other metadata
};

export default function Home() {

  return (
    <main>
      {initData.components.map((component, index) => { 
        return <SelectComponent
          key={index}
          componentType={component.type}
          data={component.data}
          id={index}
        />
      })}
    </main>
  );
}
