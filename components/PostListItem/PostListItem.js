import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const PostListItem = ({ title, date, postId }) => {
  return (
    <Link href={{ pathname: '/p', query: { id: postId } }} as={`/${postId}`}>
      <li className='item_list'>
        <div className='item_title'>{title}</div>
        <div className='item_date'>{date.slice(0, 10).split('-').join('. ')}</div>
      </li>
    </Link>
  );
};

export default PostListItem;
