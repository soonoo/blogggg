import { Header } from 'Components';

const Layout = (props) => (
  <div>
    <Header />
    <div>
      {props.children}
    </div>
  </div>
)

export default Layout;