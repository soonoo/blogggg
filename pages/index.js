import { Layout, PostList } from 'Components';
import React from 'react';

const Index = ({ json }) => (
  <Layout>
    <PostList data={json}/>
  </Layout>
)

Index.getInitialProps = async () => {
  const data = await fetch('http://localhost:5000/api/post/list');
  const json = await data.json();
  return {
    json
  };
}

export default Index;