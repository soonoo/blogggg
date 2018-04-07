import fetch from 'isomorphic-unfetch';
import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='ql-container ql-snow'>
        <div className='ql-editor' dangerouslySetInnerHTML={{ __html: decodeURI(this.props.contents) }} />
      </div>
    );
  }

  componentDidMount() {
    const prefix = document.querySelector('.ql-editor').classList[0];
    Array.prototype.forEach.call(document.querySelectorAll('pre'), (el) => {
      el.classList.add(prefix);
    });
  }
};

export default Post;
