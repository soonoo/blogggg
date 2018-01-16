import Link from 'next/link';
import { BLOG_TITLE } from 'Components';

const BlogTitle = () => {
  return (
    <header>
      <style jsx>{`
        h1 {
          cursor: pointer;
          font-weight: 400;
          font-size: 2.3em;
        }
      `}</style>
      <Link href='/'><h1>{BLOG_TITLE}</h1></Link>
    </header>
  );
};

export default BlogTitle;
