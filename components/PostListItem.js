import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const PostListItem = ({ title, date, postId, edit }) => {
  const pathname = edit ? '/edit' : '/p';
  const asPath = edit ? `/edit?id=${postId}` : `/${postId}`;

  return (
    <div>
      <style jsx>{`
          li {
            margin-bottom: 1.8em;
          }
          .item_title {
            display: inline;
            font-size: 1.8em;
          } 
          .item_title:hover {
            text-decoration: underline;
            cursor: pointer;
          }
          .item_date {
            font-size: 1em;
            color: #777;
          }
        `}</style>
      <li className='item_list'>
        <Link href={{ pathname, query: { id: postId } }} as={asPath}>
          <div className='item_title'>{title}</div>
        </Link>
        <div className='item_date'>{date.slice(0, 10).split('-').join('. ')}</div>
      </li>
    </div>
  );
};

export default PostListItem;
