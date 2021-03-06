import Link from 'next/link';
import React from 'react';
import { IProps } from '../interfaces/types';
import CategoryCard from './categoryCard';

const ThumbnailLasted = (props: IProps) => {
  const { post } = props;

  return (
    <Link href={`/blog/post/${post.slug.current}`} passHref>
      <div className="relative h-96 w-80   first-of-type:  ">
        <div className="absolute w-full h-full object-cover z-0  hover:backdrop-opacity-10 hover:backdrop-invert hover:bg-slate-600/60 bg-slate-900/40 rounded-xl"></div>
        <img
          src={post.img}
          alt=""
          className="w-full h-full  object-cover rounded-xl  "
        />
        <div className="absolute bottom-0 left-0 w-2/3 pb-8 pl-8 grid  ">
          <CategoryCard category={post.category} color="" />

          <h3 className="text-emerald-50 font-bold">{post.title}</h3>
          <span className="text-emerald-50 ">December 10, 20195 Mins read</span>
        </div>
      </div>
    </Link>
  );
};

export default ThumbnailLasted;
