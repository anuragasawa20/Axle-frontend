import Link from 'next/link';
import "../styles/blog-grid.scss"
import Image from 'next/image';

interface BlogPostGridProps {
  title?: string;
  imgUrl?: any;
  slug?: string;
  summary?: string;
}

function truncate(string: string, maxLength: number): string {
  const words = string.split(' ');
  if (words.length > maxLength) {
    return words.slice(0, maxLength).join(' ') + '...';
  }
  return string;
}

function BlogPostGrid({ title, imgUrl, slug, summary }: BlogPostGridProps) {
  const Title = truncate(title || '', 7);
  const Summary = truncate(summary || '', 15);
  return (
    <div className='blog-comp'>
      <Link href={`/blog/${slug}`}>
        <Image src={imgUrl} alt='blog-img' width={440} height={200} />
      </Link>
      <div className='p-5'>
        <Link href={`/blog/${slug}`}>
          <h3 className='py-2 hover:underline'>{Title}</h3>
        </Link>
        <p className='text-lg'>{Summary}</p>
      </div>
    </div>
  );
}

export default BlogPostGrid;
