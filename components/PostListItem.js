import React from 'react';
import Link from 'next/link';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
import StyledLink from './StyledLink';

const PostListItem = ({ title, date, postId, edit, tags }) => {
  const pathname = edit ? '/write' : '/p';
  const asPath = edit ? `/write?id=${postId}` : `/${postId}`;

  tags = decodeURI(tags);
  title = decodeURI(title);
  return (
      <li className='item_list'>
      <style jsx>{`
          li {
            margin-bottom: 1.8em;
          }
          .item_title {
            font-size: 1.3em;
            color: black;
            text-decoration: none;
            display: inline-block;
          } 
          .item_title:hover {
            text-decoration: underline;
            cursor: pointer;
          }
          .item_title:visited {
            color: #888;
          }
          .item_date {
            font-size: 1.0em;
            margin-right: 6px;
            color: #888;
            position: relative;
            top: 4px;
          }
          .item_tags {
            font-size: 1.0em;
            top: 4px;
            position: relative;
            left: 10px;
          }
          .tag_link {
            border-radius: 3px;
            padding: 1px 4px 1px 4px;
            text-decoration: none;
            color: darkgreen;
          }
          .tag_link:hover{
            background-color: #ddd;
            cursor: pointer;
          }
          .delete {
            margin-right: 6px;
            cursor: pointer;
          }
          .delete-pw input {
            border: none;
          }
        `}</style>
        <div>
          <Link href={{ pathname, query: { id: postId } }} as={asPath}>
            <a className='item_title'>{title}</a>
          </Link>
        </div>
        {edit ?
          <span className='delete' data-display={false} onClick={() => onDeleteClick(postId)}>
            <FaTrashO size={22} />
          </span> 
          : null}
        <span className='item_date'>{date.slice(0, 10).split('-').join('. ')}</span>
        {tags !== 'null' ?
          <span className='item_tags'>
            {tags.split(",").map((s) => <Link href={`/tag?t=${s.trim()}`}><a className='tag_link'>{s.trim()}</a></Link>)}
          </span> : null}
        {edit ? <span className='delete-pw' ><input id={postId} ></input></span> : null}
      </li>
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
