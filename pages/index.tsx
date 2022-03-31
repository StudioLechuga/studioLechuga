/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { groq } from "next-sanity";
import Head from "next/head";
import Image from "next/image";
import CategoryCard from "../components/categoryCard";
import { urlFor } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";
import Thumbnail from "../components/Thumbnail";
import ThumbnailLasted from "../components/ThumbnaiLasted";
import Link from "next/link";
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
          {props.lastestPosts.map((post: any) => (
            <ThumbnailLasted key={post._id} post={post} />
          ))}
        </div>
      </div>
      <div className="lates-post md:w-5/6 m-auto">
        <h2 className="font-bold text-3xl mt-6">Recientes</h2>
        <div className="flex   flex-wrap">
          {props.lastestPosts.map((post: any) => (
            <Thumbnail post={post} key={post._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ preview = false }) => {
  const post = await getClient(preview).fetch(GET_LASTE_FOUR_POSTS);
  const lastestPosts = await getClient(preview).fetch(GET_LASTE_POSTS);
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
