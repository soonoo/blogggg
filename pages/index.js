import { Layout, PostList } from 'Components';
import React from 'react';
import fetch from 'isomorphic-unfetch';

const Index = ({ json }) => (
  <Layout>
    <PostList data={json}/>
  </Layout>
)

Index.getInitialProps = async () => {
  const data = await fetch(`${process.env.BACKEND_URL}/api/post/list`);
  const json = await data.json();
  return {
    json
  };
}

export default Index;
