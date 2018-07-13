import React from 'react';
import Link from 'next/link';
import FaPencilSquare from 'react-icons/lib/fa/pencil-square';

const BlogTopic = () => {
  return (
    <div className='links'>
      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          display: inline;
          margin-right: 20px;
          cursor: pointer;
        }
        a, a:visited {
          color: black;
          text-decoration: none;
        }
      `}</style>
      <ul className='title_bar'>
        <li><Link href='/'><a href='/'>Home</a></Link></li>
        <li><Link href='/about'><a>About</a></Link></li>
        <li><Link href='/univ'><a>Univ-courses</a></Link></li>
        <li><Link href='/point'><a>리빙 포인트</a></Link></li>
        {/* <Link href='/write'><li><FaPencilSquare color='black' size={22} /></li></Link> */}
      </ul>
    </div>
  );
};

export default BlogTopic;
