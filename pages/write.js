import { Layout } from 'Components';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Router from 'next/router';
import React from 'react';
import fetch from 'isomorphic-unfetch';

export default class Write extends React.Component {
  constructor(props) {
    super();
    this.quillRef = null;
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      quill: null,
    };
    this.dynamicComponent = dynamic(import('react-quill'));
  }

  componentDidMount() {
    this.setState({ quill: <this.dynamicComponent ref={(quill) => { this.quillRef = quill; }} /> });
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>This page has a title 🤔</title>
          <link rel="stylesheet" type="text/css" href="https://cdn.quilljs.com/1.3.4/quill.snow.css" />
        </Head>
        <input className='input-title'/>
        {this.state.quill}
        <input type='button' onClick={this.handleClick} value='제출' />
      </Layout>
    );
  }

  handleClick = () => {
    Router.push('/p?id=3', '/3');
    return;
    const contents = document.querySelector('.ql-editor').innerHTML;
    const title = document.querySelector('.input-title').value;

    const params = new URLSearchParams();
    params.append('contents', contents);
    params.append('title', title);

    fetch('http://localhost:5000/api/post', {
      method: 'POST',
      body: params,
    })
      .then(res => console.log(res));
  }
}