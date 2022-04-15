/* eslint-disable @next/next/no-img-element */
import { groq } from "next-sanity";
import { urlFor } from "../lib/sanity";
import { getClient } from "../lib/sanity.server";
import Thumbnail from "../components/Thumbnail";
import ThumbnailLasted from "../components/ThumbnaiLasted";
import Link from "next/link";

const GET_LASTE_FOUR_POSTS = groq`
  *[_type == "post" ][0..3] {
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
        <div className="flex justify-center align-center gap-2 flex-wrap ">
          {props.lastestPosts.map((post: any) => (
            <ThumbnailLasted key={post._id} post={post} />
          ))}
        </div>
      </div>
      <div className="lates-post flex flex-col justify-between items-center ">
        <h2 className="font-bold text-3xl mt-6 w-full">Recientes</h2>
        <div className="flex flex-wrap item-center justify-start w-full">
          {props.allPosts.map((post: any) => (
            <Thumbnail post={post} key={post._id} />
          ))}
          <article className="m-2 bg-[#ffffff]  p-2 rounded-xl shadow-md w-[364px]">
            <Link href={`/blog`} passHref>
              <div className="w-full  grid place-items-center">
              <h3 className="from-neutral-900 w-full">Leer mas...</h3>
              </div>
            </Link>
          </article>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ preview = false }) => {
  const posts = await getClient(preview).fetch(GET_LASTE_FOUR_POSTS);
  const lastestPosts = await getClient(preview).fetch(GET_LASTE_POSTS);
  console.log(lastestPosts);
  return {
    props: {
      lastestPosts: posts.map((post: any) => ({
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
