import Link from 'next/link';

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
      <Link href='/'><h1>순우가 만든 블로그</h1></Link>
    </header>
  );
};

export default BlogTitle;
