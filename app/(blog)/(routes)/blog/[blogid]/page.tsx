import getBlogById from "@/app/actions/blogBySlug";
import FormattedDate from "@/components/blog-comp/FormatDate";
import React from "react";
import '../../../styles/blog.scss'
import PublishBy from "@/components/blog-comp/PublishBy";
import type { Metadata } from 'next'
import Image from "next/image";
import BlogTags from "@/components/blog-comp/BlogTags";

interface IParams {
  blogid?: any;
}

export  async function generateMetadata({ params }: { params: IParams }): Promise<Metadata> {
  const blogSlug = params.blogid;
  const blog:any = await getBlogById(blogSlug);

  return {
    title: blog.title,
    description: blog.summary,
    openGraph: {
      images: [blog?.image]
    }
  };
};

async function Blog({ params }: { params: IParams }) {
  const blogSlug = params.blogid;
  const blog: any = await getBlogById(blogSlug);

  return (

    <section>
      <div className="container m-auto">
        <h5 className="my-8 tracking-widest text-lg">BLOG POST</h5>
        <div className="blog-title">
          <h1>{blog?.title}</h1>
          <div>
            <PublishBy />
            <FormattedDate createdAt={blog?.createdAt} />
          </div>
        </div>
      </div>

      <div className="blog-body">
        

        <div className="container m-auto">
        <Image src={blog?.image} alt="blog-img" width={1200} height={676} />
        <h2 className="py-10 uppercase">
          {blog?.summary}
        </h2>
        <BlogTags/>
        <div className="blog-description" dangerouslySetInnerHTML={{ __html: blog?.description }} />
        </div>
      </div>
    </section>
  );
}

export default Blog;
