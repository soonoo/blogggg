import fetch from 'isomorphic-unfetch';

const Post = ({ contents }) => {
  return (
    <div className='ql-container ql-snow'>
      <div className='ql-editor' dangerouslySetInnerHTML={{__html: unescape(contents)}}/>
    </div>
  );
};

export default Post;
