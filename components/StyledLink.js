import { withRouter } from 'next/router';
import styled from 'styled-components';

const StyledLink = ({ children, router, href }) => {
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  }

  return (
    <a href={href} onClick={handleClick}>
      {children}
      <style jsx>{`
        a {
          margin-right: 10px;
          transition: all 0.4s;
          color: ${href === router.pathname ? 'black' : '#bbb'};
          border-bottom: ${href === router.pathname ? '4px solid black' : '4px solid white'};
          padding: 12px 5px;
          text-decoration: none;
        }
        a:hover {
          transition: all 0.4s;
          border-bottom: 4px solid black;
        }
      `}</style>
    </a>
  );
}

export default withRouter(StyledLink);

