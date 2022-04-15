import { groq } from "next-sanity";
import { useRouter } from "next/router";
import React from "react";
import PaginationComponent from "../../components/paginationComponent";
import Thumbnail from "../../components/Thumbnail";
import { urlFor } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";
const GET_LASTE_POSTS = groq`
  *[_type == "post" ][$init..$end] {
    _id,
    title,
    mainImage,
    slug,
    publishedAt,
    "categories":categories[]->{
      title
    },
    
  }| order(year desc)
`;
interface IProps {
  lastestPosts: any;
  allPosts: any;
  preview?: boolean;
}
const Index = (props: IProps) => {
  const router = useRouter();
  return (
    <div className=" w-full flex flex-1 flex-col">
      <div className="lates-post flex flex-col justify-between items-center ">
      
        <div className="flex flex-wrap item-center justify-start w-full">
          {props.allPosts.length > 0 ? (
            props.allPosts.map((post: any) => (
              <Thumbnail post={post} key={post._id} />
            ))
          ) : (
            <div>Noy hay post en la page :{router.query.page} </div>
          )}{" "}
        </div>{" "}
      </div>
      <PaginationComponent />
    </div>
  );
};
export const getServerSideProps = async ({ preview = false, query }: any) => {
  const lastestPosts = await getClient(preview).fetch(GET_LASTE_POSTS, {
    init: query.page * query.limit - query.limit,
    end: query.page * query.limit,
  });
  console.log(lastestPosts);
  return {
    props: {
      allPosts: lastestPosts.map((post: any) => ({
        ...post,
        img: urlFor(post.mainImage).url(),
        category: post.categories[0].title,
      })),
      preview,
    },
  };
};

export default Index;
