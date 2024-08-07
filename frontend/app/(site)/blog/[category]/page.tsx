import SectionHeader from "@/components/Common/SectionHeader";
import { fetchAPI } from "@/utils/fetch-api";
import PostList from "@/components/PostList";

async function fetchPostsByCategory(filter: string) {
  try {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/articles`;
    const urlParamsObject = {
      sort: { createdAt: "desc" },
      filters: {
        category: {
          slug: filter,
        },
      },
      populate: {
        cover: { fields: ["url"] },
        category: {
          populate: "*",
        },
        authorsBio: {
          populate: "*",
        },
      },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const responseData = await fetchAPI(path, urlParamsObject, options);
    return responseData;
  } catch (error) {
    console.error(error);
  }
}

export default async function CategoryRoute({
  params,
}: {
  params: { category: string };
}) {
  const filter = params.category;
  const { data } = await fetchPostsByCategory(filter);

  //TODO: CREATE A COMPONENT FOR THIS
  if (data.length === 0) return <div>Not Posts In this category</div>;

  const { name, description } = data[0]?.attributes.category.data.attributes;

  return (
    <div>
      <SectionHeader
        headerInfo={{
          title: name,
          description: description,
          subtitle: null,
        }}
      />
      <PostList data={data} />
    </div>
  );
}

export async function generateStaticParams() {
  return [];
}
