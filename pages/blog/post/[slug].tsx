
import { groq } from 'next-sanity'
import React from 'react'
import { PortableText } from "../../../lib/sanity"
import { getClient } from '../../../lib/sanity.server'
const GET_POST = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    body,
    mainImage,
    categories[]->{
      _id,
      title
    },
    
    "slug": slug.current
  }
`
const Index = (props:any) => {
  console.log(props)

  return (
    <div className=' md:w-5/6 p-3 m-auto grid place-items-center'>
      <article >
        <PortableText blocks={props.post.body} className="prose prose-slate" />
      </article>
    </div>
  )
}

export const getServerSideProps = async ({ query, preview = false }: any) => {
  const post = await getClient(preview).fetch(GET_POST, { slug: query.slug });
  return {
    props: {
      post
    }
  }
}
export default Index
