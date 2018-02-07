import { Layout, Post } from 'Components';

const P = (props) => (
  <Layout docTitle={props.title}>
    <Post contents={props.contents}/>
  </Layout>
)


P.getInitialProps = async ({ asPath }) => {
  const response = await fetch(`${BACKEND_URL}/api/post${asPath}`);
  const data = await response.json();

  return {
    contents: data.length ? decodeURI(data[0].contents) : '존재하지 않는 포스트입니다.',
    title: data.length ? decodeURI(data[0].title) : 'post do not exists'
  }
};

export default P;