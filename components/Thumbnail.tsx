import Link from "next/link";
import React from "react";
import CategoryCard from "./categoryCard";
interface IProps {
  post: {
    _id: string;
    img: string;
    category: string;
    title: string;
    slug: {
      current: string;
    };
  };
}
const Thumbnail = (props: IProps) => {
  const { post } = props;

  return (
    <Link href={`/blog/post/${post?.slug?.current}`} passHref>
      <div className="md:w-1/4 w-full p-4 ">
        <img src={post.img} alt="" className="w-full  h-[222px]   rounded-xl" />
        <div>
          <CategoryCard category={post.category} color="" />
          <h3>{post.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Thumbnail;
