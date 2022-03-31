import Link from 'next/link';
import React from 'react';
import { IProps } from '../interfaces/types';
import CategoryCard from './categoryCard';

const Thumbnail = (props: IProps) => {
  const { post } = props;
  return (
    <article className="m-2 bg-[#0a0908] text-white p-2 rounded-xl">
      <Link href={`/blog/post/${post?.slug?.current}`} passHref>
        <div className=" w-full ">
          <img
            src={post.img}
            alt={post.title}
            className="w-full  h-[222px]   rounded-xl object-cover"
          />
          <div className="">
            <CategoryCard category={post.category} color="" />
            <h3 className="">{post.title}</h3>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Thumbnail;
