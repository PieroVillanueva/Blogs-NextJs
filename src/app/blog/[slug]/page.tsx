import { fetchApi } from "@/app/helpers/fetch-api";
import React from "react";
import { Post } from "@/interfaces/post";
import { notFound } from "next/navigation";
import PageHeader from "@/app/components/PageHeader";
import { formatDate } from "@/app/helpers/format-date-helper";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
const getData = async (slug = "") => {
  const path = "/posts";
  const urlParamsObject = {
    populate: "image",
    filters: {
      slug: slug,
    },
  };
  const { data } = await fetchApi(path, urlParamsObject);
  return data[0];
};
interface Props {
  params: {
    slug: string;
  };
}
const Slug = async ({ params }: Props) => {
  const { slug } = params;
  const post: Post = await getData(slug);

  const { title, body, description, createdAt, image } = post.attributes;
  const { url, width, height } = image.data[0].attributes.formats.medium;

  if (!post) {
    notFound();
  }
  return (
    <div className="space-y-8">
      <PageHeader text={title} />
      <p className="text-gray-500">{formatDate(createdAt)}</p>
      <Image
        className="rounded-t-lg"
        src={url}
        alt={`Image ${title}`}
        width={width}
        height={height}
      />
      <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
        {description}
      </p>
      <div className="prose">
        <MDXRemote source={body} />
      </div>
    </div>
  );
};

export default Slug;
