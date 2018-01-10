import { BlogTitle, BlogTopic } from 'Components';

const Header = () => (
  <div className='title_container'>
    <BlogTitle />
    <BlogTopic />
    <hr />
  </div>
);

export default Header;