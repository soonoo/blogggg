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
      `}</style>
      <ul className='title_bar'>
        <Link href='/'><li>Home</li></Link>
        <Link href='/about'><li>About</li></Link>
        {/* <Link href='/write'><li><FaPencilSquare color='black' size={22} /></li></Link> */}
      </ul>
    </div>
  );
};

export default BlogTopic;
