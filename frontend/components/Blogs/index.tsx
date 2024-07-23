import React from "react";
import { Blog } from "@/types/blog";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";

export type BlogsProps = {
  data: {
    title: string | null;
    subtitle: string | null;
    description: string | null;
    blogs: Blog[];
  };
  id: number;
};

export const Blogs = async ({ data, id }: BlogsProps) => {
  return (
    <section id={`blogs-${id}`} className="py-20 lg:py-25 xl:py-30">
      {(data.title || data.subtitle || data.description) && (
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: data.title,
                subtitle: data.subtitle,
                description: data.description,
              }}
            />
          </div>
        </div>
      )}
      {data.blogs.length && (
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.blogs.slice(0, 3).map((blog, key) => (
              <BlogItem blog={blog} key={`${key}-${id}-${blog._id}-features`} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Blogs;
