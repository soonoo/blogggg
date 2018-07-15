import React from 'react';
import Link from 'next/link';
import FaPencilSquare from 'react-icons/lib/fa/pencil-square';
import StyledLink from './StyledLink';

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
        <li><StyledLink href='/'>Home</StyledLink></li>
        <li><StyledLink href='/about'>About</StyledLink></li>
        <li><StyledLink href='/point'>리빙 포인트</StyledLink></li>
        {/* <StyledLink href='/write'><li><FaPencilSquare color='black' size={22} /></li></StyledLink> */}
      </ul>
    </div>
  );
};

export default BlogTopic;
