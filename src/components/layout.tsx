import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import '../../assets/styles/index.css';

export type Layout = {
  children: React.ReactNode;
};

const Layout = ({ children }: Layout) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="container">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Built with</footer>
      </div>
    </div>
  );
};

export default Layout;
