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
        a, a:visited {
          color: black;
          text-decoration: none;
        }
      `}</style>
      <h1><Link href='/'><a>{BLOG_TITLE}</a></Link></h1>
    </header>
  );
};

export default BlogTitle;
