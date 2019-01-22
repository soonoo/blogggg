const PostList = ({ data, edit }) => (
  <div className='point_list_container'>
      <style jsx>{`
        ul {
          list-style: none;
          padding-left: 20px;
        }
      `}</style>
      <ul className='point_list'>
        {data.map(item => (
          <div>d</div>
        ))}
      </ul>
  </div>
)

export default PostList;
