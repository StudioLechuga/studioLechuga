import { useRouter } from "next/router";
import React from "react";
const PaginationComponent = () => {
  const route = useRouter();
  const { page, limit } = route.query;

  const handleClick = (page: number) => {
    route.push(`/blog?page=${page}&limit=${10}`);
  };

  return (
    <div className="w-full flex justify-between items-center">
      <span>Showing 1 to 10 of 97 results</span>

      <div className=" w-2/4  h-12 flex gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 rounded-lg grid place-items-center "
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
            clipRule="evenodd"
          />
        </svg>

        {[...Array(9)].map((_, index) => (
          <span
            key={index}
            onClick={() => handleClick(index + 1)}
            className="h-10 w-10 rounded-lg bg-white grid place-items-center hover:bg-lechuga-700/40 border-2 "
          >
            {index + 1}
          </span>
        ))}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 rounded-lg  grid place-items-center"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default PaginationComponent;
