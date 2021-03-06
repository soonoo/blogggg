import { Layout, PostList, TagPageTitle } from 'Components';
import fetch from 'isomorphic-unfetch';


const Tag = ({json, query}) => (
    <Layout>
        <TagPageTitle tagName={query} />
        <PostList data={json} />
    </Layout>
);

Tag.getInitialProps = async (props) => {
  console.log(process.env.BACKEND_URL)
    const postList = await fetch(`${process.env.BACKEND_URL}/api/post${props.asPath}`);
    const json = await postList.json();
    return {
        json,
        query: props.query.t
    };
}

export default Tag;
