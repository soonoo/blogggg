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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      quill: null,
    };
    this.dynamicComponent = dynamic(import('react-quill'));
  }

  static async getInitialProps({ asPath }) {
    const id = asPath === '/write' ? '' : asPath.slice(asPath.indexOf('=') + 1);
    if (!id) {
      return {
        title: '',
        contents: '',
        id: '',
      };
    }

    const response = await fetch(`${process.env.BACKEND_URL}/api/post/${id}`);;
    const data = await response.json();
    const c = data[0].contents

    return {
      title: decodeURI(data[0].title),
      contents: decodeURI(data[0].contents),
      id: data[0].id,
    };
  }

  unloadHandler() {
    return "Data will be lost if you leave the page, are you sure?";
  }

  onscrollHandler() {
    const ipnut = document.querySelector('.input-title');
    const toolbar = document.querySelector('.ql-toolbar');

    if (ipnut.getBoundingClientRect().y <= -37) toolbar.classList.add('fixed');
    else toolbar.classList.remove('fixed');
  }

  componentDidMount() {
    const modules = {
      syntax: true,
      toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
        [{ 'direction': 'rtl' }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
      ],

    }

    const formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
      'color', 'background ',
      'list', 'bullet', 'indent',
      'link', 'image'
    ]

    this.setState({
      quill:
        <this.dynamicComponent modules={modules} ref={(quill) => { this.quillRef = quill; }}>
          <div className="custom-editing-area" dangerouslySetInnerHTML={{ __html: this.props.contents }} />
        </this.dynamicComponent>
    });

    document.querySelector('.input-title').value = this.props.title;

    window.onbeforeunload = this.unloadHandler;
    window.onscroll = this.onscrollHandler;
  }

  componentWillUnmount() {
    window.onbeforeunload = null;
    window.onscroll = null;
  }

  render() {
    return (
      <Layout>
        <style jsx>{`
          .input-title, .input-tags {
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
            margin-bottom: 60px;
          }
        `}</style>
        <input className='input-title' />
        <input className='input-tags' />
        {this.state.quill}
        <div>
          <input className='input-submit' type='button' onClick={this.handleSubmit} value='제출' />
          <input className='input-pw' />
        </div>
      </Layout>
    );
  }

  handleSubmit = async () => {
    const contents = document.querySelector('.ql-editor').innerHTML;
    const title = document.querySelector('.input-title').value;
    const pw = document.querySelector('.input-pw').value;
    const tags = document.querySelector('.input-tags').value;

    const params = new URLSearchParams();
    params.append('contents', encodeURI(contents));
    params.append('title', encodeURI(title));
    params.append('pw', encodeURI(pw));
    params.append('id', this.props.id);
    params.append('tags', encodeURI(tags.split(" ").join("")));

    const response = await fetch(`${process.env.BACKEND_URL}/api/post`, {
      method: this.props.id ? 'PUT' : 'POST',
      body: params,
    });

    if (response.status !== 200) {
      alert(response.statusText);
      return;
    }
    const body = await response.json();

    Router.push(`/p?id=${body.id}`, `/${body.id}`);
  }
}