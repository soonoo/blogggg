import { Layout, Post } from 'Components';
import 'fetch' from 'isomorphic-unfetch';

const P = (props) => (
  <Layout title={props.title}>
    <Post contents={props.contents}/>
  </Layout>
)


P.getInitialProps = async ({ asPath }) => {
  const response = await fetch(`https://soonoo.me/api/post${asPath}`);
  const data = await response.json();

  return {
    contents: data.length ? decodeURI(data[0].contents) : '존재하지 않는 포스트입니다.',
    title: data.length ? decodeURI(data[0].title) : 'post do not exists',
    tags: data.length ? decodeURI(data[0].tags) : 'post do not exists'
  }
};

export default P;
