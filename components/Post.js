import fetch from 'isomorphic-unfetch';
import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='ql-container ql-snow'>
        <style jsx>{`
        .ql-editor {
          padding-left: 20px;
        }
      `}</style>
        <div className='ql-editor' dangerouslySetInnerHTML={{ __html: unescape(this.props.contents) }} />
      </div>
    );
  }

  componentDidMount() {
    const prefix = document.querySelector('.ql-editor').classList[0];
    document.querySelectorAll('pre').forEach(el => {
      el.classList.add(prefix);
    });    
  }
};

export default Post;
