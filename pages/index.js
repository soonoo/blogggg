import { Layout, PostList } from 'Components';
import React from 'react';

const Index = ({ json }) => (
  <Layout>
    <PostList data={json}/>
  </Layout>
)

Index.getInitialProps = async () => {
  const data = await fetch(`${BACKEND_URL}/api/post/list`);
  const json = await data.json();
  return {
    json
  };
}

export default Index;