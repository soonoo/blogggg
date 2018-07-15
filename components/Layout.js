import { Header, DocTitle } from 'Components';
import PropTypes from 'prop-types';

const Layout = (props) => (
  <div>
    <DocTitle>{props.title}</DocTitle>
    <style jsx>{`
      .container { 
        margin: 0 auto;
        max-width: 82em;
      }
    
      div.divider {
        border-bottom: 1px solid gray;
      }
    `}</style>
    <div className='container'>
      <Header />
    </div>
    <div className='divider' />
    <div className='container'>
      {props.children}
    </div>
  </div>
)

Layout.propTypes  = {
  title: PropTypes.string
};

Layout.defaultProps = {
  title: 'blog.soonoo.me'
}

export default Layout;
