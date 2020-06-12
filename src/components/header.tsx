import React from 'react';
import { Link } from 'gatsby';

export type Header = {
  siteTitle: string;
};

const Header = ({ siteTitle }: Header) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `black`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
      <Link to="/posts">Posts</Link>
    </div>
  </header>
);

export default Header;
