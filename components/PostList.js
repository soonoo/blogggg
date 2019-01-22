import { PostListItem } from 'Components';

const PostList = ({ data, edit }) => (
  <div className='post_list_container'>
      <style jsx>{`
        ul {
          list-style: none;
          padding-left: 20px;
        }
      `}</style>
      <ul className='post_list'>
        {data.map(item => (
          <PostListItem
            edit={edit}
            key={item.id}
            postId={item.id}
            title={item.title} 
            date={item.post_date} 
            tags={item.tags}
          />
        ))}
      </ul>
  </div>
)

export default PostList;
