import { Layout, PostList } from 'Components';
import React from 'react';

const Index = ({ json }) => (
  <Layout>
    <PostList data={json} edit={true}/>
  </Layout>
)

Index.getInitialProps = async ({ asPath }) => {
  const data = await fetch(`${BACKEND_URLl}/api/post/list`);
  const json = await data.json();
  return {
    json
  };
}

export default Index;