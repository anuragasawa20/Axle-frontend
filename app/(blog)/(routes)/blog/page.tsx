import getBlogs from '@/app/actions/getBlogs'
import Pagenation from '@/components/Pagenation';
import BlogPostGrid from '@/components/blog-comp/BlogPostGrid'
import '../../styles/blog.scss'
import { Metadata } from 'next'
import BlogHero from '@/components/blog-comp/BlogHero';


export const metadata: Metadata = {
  title: 'Blog | Axle Gaming',
  description: 'Read our Blogs.',
}

async function Blog({searchParams}:any) {

const pageSize = 20;  
const pageNumber = typeof searchParams.page === 'string' ? Number(searchParams.page): 1;
const search = typeof searchParams.search === 'string' ? searchParams.search: "";
const blog:any = await getBlogs(pageNumber, pageSize, search)

 const totalPages:number = blog.totalPages

  return (
    <section className="container m-auto relative min-h-[70vh]">
      <BlogHero/>
      <div className='blog-grid'>
      {blog.blogs.length > 0 ? (
          blog.blogs.map((item: any) => (
            <BlogPostGrid key={item.id} title={item.title} imgUrl={item.image} slug={item.slug} summary={item.summary} />
          ))
        ) : (
          <div><h2>No blogs found.</h2></div>
        )}
      </div>

      <div className='h-16'>
      <div className='absolute bottom-0 w-full flex justify-center'>
      {/* <Pagenation url={"/blog"} pageNumber={pageNumber} totalPages={totalPages} search={search} /> */}
      </div>
      </div>
    </section>
  )
}

export default Blog