import { Layout, Post } from 'Components';

const P = (props) => (
  <Layout docTitle={props.title}>
    <Post contents={props.contents}/>
  </Layout>
)


P.getInitialProps = async ({ asPath }) => {
  const response = await fetch(`${process.env.BACKEND_URL}/api/post${asPath}`);
  const data = await response.json();
  
  return {
    contents: data.length ? unescape(data[0].contents) : 'post do not exists',
    title: data.length ? unescape(data[0].title) : 'post do not exists'
  }
};

export default P;