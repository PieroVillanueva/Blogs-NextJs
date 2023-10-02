import React from "react";
import { Post } from "@/interfaces/post";
import Link from "next/link";
import Image from "next/image";
interface Props {
  post: Post;
}

const PageCardImage = ({ post }: Props) => {
  const { title, description, slug, createdAt, image } = post.attributes;
  const { url, width, height } = image.data[0].attributes.formats.medium;
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-w-md">
      <Link href={`/blog/${slug}`}>
        <Image
          className="rounded-t-lg "
          src={url}
          alt={`Image ${title}`}
          width={width}
          height={height}
        />
      </Link>
      <div className="p-5">
        <Link href={`/blog/${slug}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PageCardImage;
