import { PostListItem } from 'Components';
import fetch from 'isomorphic-unfetch';

const PostList = ({ data }) => (
  <div className='post_list_container'>
      <ul className='post_list'>
        {data.map(item => (
          <PostListItem key={item.id} postId={item.id} title={item.title} date={item.post_date} />
        ))}
      </ul>
  </div>
)

export default PostList;
