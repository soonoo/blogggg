import { Layout, PostList } from 'Components';
import React from 'react';

const Index = ({ json }) => (
  <Layout docTitle={'blog.soonoo.me'}>
    <PostList data={json}/>
  </Layout>
)

Index.getInitialProps = async () => {
  const url = process.env.BACKEND_URL;
  const data = await fetch(`${url}/api/post/list`);
  const json = await data.json();
  return {
    json
  };
}

export default Index;