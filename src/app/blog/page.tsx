//https://strapi-webserve-rs0o.onrender.com/api/posts

import { fetchApi } from "../helpers/fetch-api";
import PageHeader from "../components/PageHeader";
import PageCardImage from "../components/PageCardImage";
import { Post } from "@/interfaces/post";
import PagePagination from "../components/PagePagination";

const getData = async (page = 1, pagesize = 2) => {
  const path = "/posts";
  const urlParamsObject = {
    populate: "*",
    sort: {
      createdAt: "asc",
    },
    pagination: {
      page: page,
      pageSize: pagesize,
    },
  };
  const { data, meta } = await fetchApi(path, urlParamsObject);
  return {
    data: data,
    pagination: meta.pagination,
  };
};
interface Props {
  searchParams: {
    page?: string;
  };
}
const Blog = async ({ searchParams }: Props) => {
  const { page } = searchParams;
  //console.log(page);

  let pageNumber = page ? parseInt(page) : 1;

  if (isNaN(pageNumber) || pageNumber < 1) {
    pageNumber = 1;
  }

  const { data, pagination } = await getData(pageNumber);
  //console.log(data);

  return (
    <div className="space-y-8 ">
      <PageHeader text={"Lastest Posts"} />
      <PagePagination pagination={pagination} />
      <div className="grid gap-4 justify-center">
        {data.map((post: Post) => (
          <PageCardImage key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
