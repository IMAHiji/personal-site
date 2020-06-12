import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

type queryData = {
  site: {
    siteMetaData: {
      description: string;
      title: string;
    };
  };
  wordpressPost: {
    content: string;
    title: string;
  };
};

type Post = {
  children: unknown;
  data: queryData;
  location: {
    action: string;
    hash: string;
    host: string;
    hostname: string;
    href: string;
    key: string;
    origin: string;
    pathname: string;
    port: number;
    protocol: string;
    search: string;
  };
  navigate: unknown;
  pageContext: {
    id: string;
  };
  pageResources: unknown;
  path: string;
  pathContext: unknown;
  uri: string;
};

const Post = (props: Post) => {
  const post = props.data.wordpressPost;
  return (
    <Layout>
      <h1>{post.title}</h1>
      <div
        key={`body`}
        id="__gatsby"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Layout>
  );
};

export default Post;

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
