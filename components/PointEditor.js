import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import marked from 'marked';
import Router from 'next/router';

class PointEditor extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      html: '',
    }

    this.onEditContents = this.onEditContents.bind(this);
    this.onEditTitle = this.onEditTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onEditContents(e) {
    this.setState({
      ...this.state,
      html: e.target.value,
    });
  }

  onEditTitle(e) {
    this.setState({
      ...this.state,
      title: e.target.value,
    });
  }

  onSubmit() {
    fetch('/api/points', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        contents: this.state.html,
      }),
    })
      .then(() => {
        Router.push('/point')
      })
  }

  render() {
    return (
      <div>
        <style jsx>{`
        .title-input {
          display: block;
          height: 40px;
          padding: 5px;
          font-size: 20px;
          box-sizing: border-box;
          width: 100%;
        }

        .editor-container {
          width: 100%;
          display: flex;
        }

        .editor-wrapper, .editor-preview {
          width: 50%;
          box-sizing: border-box;
          height: 70vh;
        }

        .editor {
          box-sizing: border-box;
          resize: none;
          outline: none;
          border: 1px solid #999;
          width: 100%;
          height: 100%;
          padding: 10px;
        }
        .editor-preview {
          padding: 10px;
        }
        `}</style>
      <input className='title-input' value={this.state.title} onChange={this.onEditTitle} />
      <div className='editor-container'>

        <div className='editor-wrapper'>
          <textarea className='editor' onChange={this.onEditContents} />
        </div>
        <div className='editor-preview' dangerouslySetInnerHTML={{__html: marked(this.state.html)}}/>
      </div>
      <button onClick={this.onSubmit}>submit</button>
    </div>
    );
  }
};

export default PointEditor;

