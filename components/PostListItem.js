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
            margin-left: 5px;
            margin-right: 6px;
            color: #777;
            position: relative;
            top: 4px;
          }
          .delete {
            cursor: pointer;
          }
          .delete-pw input {
            border: none;
          }
        `}</style>
      <li className='item_list'>
        <div>
          <Link href={{ pathname, query: { id: postId } }} as={asPath}>
            <span className='item_title'>{title}</span>
          </Link>
        </div>
        <span className='delete' data-display={false} onClick={() => onDeleteClick(postId)}>
          {edit ? <FaTrashO size={22} /> : null}
        </span>
        <span className='item_date'>{date.slice(0, 10).split('-').join('. ')}</span>
        <span className='delete-pw' ><input id={postId} ></input></span>
      </li>
    </div>
  );
};

const onDeleteClick = async (postId) => {
  const params = new URLSearchParams();
  params.append('pw', document.getElementById(postId).value);

  const response = await fetch(`${process.env.BACKEND_URL}/api/post/${postId}`, {
    method: 'DELETE',
    body: params,
  });
  if(response.status === 200) Router.push('/edit', '/edit');
}

export default PostListItem;
