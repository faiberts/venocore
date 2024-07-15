"use client";
import { HeroData } from "@/types/hero";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type HeroProps = {
  data: HeroData;
  id: number;
};

export const Hero = ({ data, id } : HeroProps) => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46" id={`hero-${id}`}>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              {data.header_title && (
                <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                  {data.header_title}
                </h4>
              )}
              {data.title && (
                <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                  {data.title}
                </h1>
              )}
              {data.content && <p>{data.content}</p>}
              {data.button_message &&
                data.button_redirection &&
                data.type_button && (
                  <div className="mt-10">
                    <div className="flex flex-wrap gap-5">
                      {data.type_button == "link" ? (
                        <Link
                          href={data.button_redirection}
                          aria-label="get started button"
                          className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                        >
                          {data.button_message}
                        </Link>
                      ) : (
                        <a
                          href={data.button_redirection}
                          aria-label="get started button"
                          className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                        >
                          {data.button_message}
                        </a>
                      )}
                    </div>
                  </div>
                )}
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
            { data.light_image || data.dark_image && <div className="relative 2xl:-mr-7.5">
                {data.include_icons && (
                  <>
                    <Image
                      src="/images/shape/shape-01.png"
                      alt="shape"
                      width={46}
                      height={246}
                      className="absolute -left-11.5 top-0"
                    />
                    <Image
                      src="/images/shape/shape-02.svg"
                      alt="shape"
                      width={36.9}
                      height={36.7}
                      className="absolute bottom-0 right-0 z-10"
                    />
                    <Image
                      src="/images/shape/shape-03.svg"
                      alt="shape"
                      width={21.64}
                      height={21.66}
                      className="absolute -right-6.5 bottom-0 z-1"
                    />
                  </>
                )}
                <div className=" relative aspect-[700/444] w-full">
                  { data.light_image && <Image
                    className="shadow-solid-l dark:hidden"
                    src={data.light_image}
                    alt="Hero"
                    fill
                  />}
                  {data.dark_image &&<Image
                    className="hidden shadow-solid-l dark:block"
                    src={data.dark_image}
                    alt="Hero"
                    fill
                  />}
                </div>
              </div>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;