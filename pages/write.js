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
    const modules = {
      syntax: true,
      toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
      ],
    }

    const formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
      'list', 'bullet', 'indent',
      'link', 'image'
    ]
      this.setState({ quill: <this.dynamicComponent modules={modules} formats={formats} ref={(quill) => { this.quillRef = quill; }} /> });
  }

  render() {
    return (
      <Layout>
        <style jsx>{`
          .input-title {
            width: 100%;
            box-sizing: border-box;
            height: 37px;
            font-size: 1.2em;
            padding-left: 7px;
            padding-right: 7px;
            margin-bottom: 2px;
          }
          .input-pw, .input-submit {
            height: 25px;
            box-sizing: border-box;
            margin-top: 2px;
            margin-right: 10px;
          }
        `}</style>
        <Head>
          <link rel="stylesheet" type="text/css" href="https://cdn.quilljs.com/1.3.4/quill.snow.css" />
        </Head>
        <input className='input-title' />
        {this.state.quill}
        <div>
          <input className='input-submit' type='button' onClick={this.handleClick} value='제출' />
          <input className='input-pw' />
        </div>
      </Layout>
    );
  }

  handleClick = async () => {
    const contents = document.querySelector('.ql-editor').innerHTML;
    const title = document.querySelector('.input-title').value;
    const pw = document.querySelector('.input-pw').value;

    const params = new URLSearchParams();
    params.append('contents', contents);
    params.append('title', title);
    params.append('pw', pw);

    const response = await fetch(`${process.env.BACKEND_URL}/api/post`, {
      method: 'POST',
      body: params,
    });

    const body = await response.json();

    Router.push(`/p?id=${body.id}`, `/${body.id}`)
  }
}