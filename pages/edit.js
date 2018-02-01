import { Layout, PostList } from 'Components';
import React from 'react';

const Index = ({ json }) => (
  <Layout>
    <PostList data={json} edit={true}/>
  </Layout>
)

Index.getInitialProps = async ({ asPath }) => {
  const url = process.env.BACKEND_URL;
  const data = await fetch(`${url}/api/post/list`);
  const json = await escape(data).json();
  return {
    json
  };
}

export default Index;