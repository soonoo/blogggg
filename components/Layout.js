import { Header, DocTitle } from 'Components';

const Layout = (props) => (
  <div>
    <DocTitle>{props.docTitle}</DocTitle>
    <style jsx>{`
    .container { 
      margin: 0 auto;
      max-width: 70em;
    }
    `}</style>
    <div className='container'>
      <Header />
    </div>
    <hr />
    <div className='container'>
      {props.children}
    </div>
  </div>
)

export default Layout;