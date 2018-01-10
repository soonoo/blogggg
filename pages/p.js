import { Layout, Post } from 'Components';

const P = (props) => (
  <Layout>
    <Post contents={props.contents}/>
  </Layout>
)


P.getInitialProps = async ({ asPath }) => {
  const response = await fetch(`http://localhost:5000/api/post${asPath}`);
  const data = await response.json();
  
  return {
    contents: data.length ? data[0].contents : 'post do not exists',
  }
};

export default P;