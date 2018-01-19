import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';

const PostListItem = ({ title, date, postId, edit }) => {
  const pathname = edit ? '/write' : '/p';
  const asPath = edit ? `/write?id=${postId}` : `/${postId}`;

  return (
    <div>
      <style jsx>{`
          li {
            margin-bottom: 1.8em;
          }
          .item_title {
            font-size: 2.3em;
            display: inline-block;
          } 
          .item_title:hover {
            text-decoration: underline;
            cursor: pointer;
          }
          .item_date {
            font-size: 1.4em;
            color: #777;
          }
          .delete {
            cursor: pointer;
          }
        `}</style>
      <li className='item_list'>
        <Link href={{ pathname, query: { id: postId } }} as={asPath}>
          <div><span className='item_title'>{title}</span></div>
        </Link>
        <span className='delete' onClick={() => onDeleteClick(postId)}>{edit ? <FaTrashO size={22} /> : null}</span>
        <span className='item_date'>{date.slice(0, 10).split('-').join('. ')}</span>
      </li>
    </div>
  );
};

const onDeleteClick = async (postId) => {
  const response = await fetch(`${process.env.BACKEND_URL}/api/post/${postId}`, {
    method: 'DELETE',
  });
  if(response.status === 200) Router.push('/edit');
}

export default PostListItem;
