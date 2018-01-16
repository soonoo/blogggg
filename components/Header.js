import { BlogTitle, BlogTopic } from 'Components';

const Header = () => (
  <div className='header'>
  <style jsx>{` .header { margin-left: 10px; } `}</style>
    <BlogTitle />
    <BlogTopic />
  </div>
);

export default Header;