import fetch from 'isomorphic-unfetch';

const Post = ({ contents }) => {
  return (
    <div className='ql-container ql-snow'>
      <style jsx>{`
        .ql-editor {
          padding-left: 20px;
        }
      `}</style>
      <div className='ql-editor' dangerouslySetInnerHTML={{__html: unescape(contents)}}/>
    </div>
  );
};

export default Post;
