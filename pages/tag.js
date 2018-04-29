import { Layout, PostList } from 'Components';

const Tag = ({json}) => (
    <Layout>
        <PostList data={json}/>
    </Layout>
);

Tag.getInitialProps = async ({ asPath }) => {
    const postList = await fetch(`${process.env.BACKEND_URL}/api/post${asPath}`);
    const json = await postList.json();

    return {
        json
    };
}

export default Tag;