import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#000097',
    secondary: '#fe0000',
  },
};

export type Layout = {
  children: React.ReactNode;
};

const Container = styled.div`
  background: 'white';
`;

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
    <ThemeProvider theme={theme}>
      <Container className="container">
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
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
