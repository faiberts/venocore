import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Article {
  id: number;
  attributes: {
    title: string;
    slug: string;
  };
}

interface params {
  slug: string;
  category: string;
};

const RelatedPost = async ({ articles, params }: { articles: Article[], params }) => {
  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          Posts relacionados
        </h4>

        <div>
          {articles.map((article, key) => (
            <div
              className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
              key={key}
            >
              <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                <Link
                  rel="noopener noreferrer"
                  href={`/${params.category}/${article.attributes.slug}`}
                  className={`${
                    params.slug === article.attributes.slug && "text-violet-400"
                  }  hover:underline hover:text-violet-400 transition-colors duration-200`}
                >
                  {article.attributes.title}
                </Link>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
