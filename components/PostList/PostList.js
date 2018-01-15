import { PostListItem } from 'Components';
import fetch from 'isomorphic-unfetch';

const PostList = ({ data }) => (
  <div className='post_list_container'>
      <style jsx>{`
        ul {
          list-style: none;
          padding-left: 20px;
        }
      `}</style>
      <ul className='post_list'>
        {data.map(item => (
          <PostListItem key={item.id} postId={item.id} title={item.title} date={item.post_date} />
        ))}
      </ul>
  </div>
)

export default PostList;
