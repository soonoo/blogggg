import { Layout, Post } from 'Components';

const P = (props) => (
  <Layout docTitle={`${props.title}`}>
    <style jsx>{`
    .ql-snow {
      border: none;
    }
    .ql-container {
      padding: 40px;
    }
    `}</style>
    <Post contents={props.contents}/>
  </Layout>
)


P.getInitialProps = async ({ asPath }) => {
  const response = await fetch(`${process.env.BACKEND_URL}/api/post${asPath}`);
  const data = await response.json();
  
  return {
    contents: data.length ? data[0].contents : 'post do not exists',
    title: data.length ? data[0].title : 'post do not exists'
  }
};

export default P;