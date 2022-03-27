/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { groq } from "next-sanity";
import Head from "next/head";
import Image from "next/image";
import CategoryCard from "../components/categoryCard";
import { urlFor } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";
import styles from "../styles/Home.module.css";
const GET_LASTE_FOUR_POSTS = groq`
  *[_type == "post" ][0..4] {
    _id,
    title,
    mainImage,
    slug,
    publishedAt,
    "categories":categories[]->{
      title
    },
    
  }
`;
const GET_LASTE_POSTS = groq`
  *[_type == "post" ][0..6] {
    _id,
    title,
    mainImage,
    slug,
    publishedAt,
    "categories":categories[]->{
      title
    },
    
  }
`;

interface IProps {
  lastestPosts: any;
  allPosts: any;
  preview?: boolean;
}
const Home = (props: IProps) => {
  return (
    <>
      <div className="hero">
        <div className="grid grid-cols-1 md:grid-cols-4">
          {props.lastestPosts.map((post) => (
            <div
              className="relative h-96 w-full   first-of-type:  "
              key={post._id}
            >
              <div className="absolute w-full h-full object-cover z-0  hover:backdrop-opacity-10 hover:backdrop-invert hover:bg-slate-600/60 bg-slate-900/40 "></div>
              <img
                src={post.img}
                alt=""
                className="w-full h-full  object-cover  "
              />
              <div className="absolute bottom-0 left-0 w-2/3 pb-8 pl-8 grid  ">
                <CategoryCard category={post.category} color="" />

                <h3 className="text-emerald-50 font-bold">{post.title}</h3>
                <span className="text-emerald-50 ">
                  December 10, 20195 Mins read
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lates-post md:w-5/6 m-auto">
        <h2 className="font-bold text-3xl mt-6">Recientes</h2>
        <div className="flex   flex-wrap">
          {props.lastestPosts.map((post) => (
            <div key={post._id} className="md:w-1/4 w-full p-4 ">
              <img src={post.img} alt="" className="w-full rounded-xl" />

              <div>
                <CategoryCard category={post.category} color="" />
                <h3>{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ preview = false }) => {
  const post = await getClient(preview).fetch(GET_LASTE_FOUR_POSTS);
  const lastestPosts = await getClient(preview).fetch(GET_LASTE_POSTS);
  console.log(post);
  return {
    props: {
      lastestPosts: post.map((post: any) => ({
        ...post,
        img: urlFor(post.mainImage).url(),
        category: post.categories[0].title,
      })),
      allPosts: lastestPosts.map((post: any) => ({
        ...post,
        img: urlFor(post.mainImage).url(),
        category: post.categories[0].title,
      })),
      preview,
    },
  };
};

export default Home;
