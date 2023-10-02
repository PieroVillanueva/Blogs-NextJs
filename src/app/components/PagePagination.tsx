import React from "react";
import Link from "next/link";
interface Props {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

const PagePagination = ({ pagination }: Props) => {
  const { page, pageSize, pageCount, total } = pagination;

  const classNumber =
    "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
  const classNumberActive =
    "px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";
  const classPrevious =
    "px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
  const classNext =
    "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px">
        <li>
          <Link
            href={page === 1 ? `/blog?page=${page}` : `/blog?page=${page - 1}`}
            className={`${classPrevious} ${
              page === 1 ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            Previous
          </Link>
        </li>

        {Array.from({ length: pageCount }).map((_, index) => (
          <li>
            <Link
              href={`/blog?page=${index + 1}`}
              className={index + 1 === page ? classNumberActive : classNumber}
            >
              {index + 1}
            </Link>
          </li>
        ))}

        <li>
          <Link
            href={
              page === pageCount
                ? `/blog?page=${page}`
                : `/blog?page=${page + 1}`
            }
            className={`${classNext} ${
              page === pageCount ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default PagePagination;
