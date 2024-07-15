"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import Brands, { BrandsProps } from "../Brands";
import { Feature } from "@/types/feature";

export type FeaturesProps = {
  data: {
    title: string | null;
    subtitle: string | null;
    description: string | null;
    brands: BrandsProps["data"];
    features: Feature[];
  };
  id: number;
};

export const Features = ({ data, id }: FeaturesProps) => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id={`features-${id}`} className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          {data.title ||
            data.subtitle ||
            (data.description && (
              <SectionHeader
                headerInfo={{
                  title: data.title,
                  subtitle: data.subtitle,
                  description: data.description,
                }}
              />
            ))}
          {/* <!-- Section Title End --> */}
          {data.brands.length && <Brands data={data.brands} id={id} />}
          {data.features.length && (
            <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
              {/* <!-- Features item Start --> */}

              {data.features.map((feature, key) => (
                <SingleFeature feature={feature} key={`${key}-${id}-${feature.id}-features`} />
              ))}
              {/* <!-- Features item End --> */}
            </div>
          )}
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Features;
