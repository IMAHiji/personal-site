import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

type Edge = {
  node: {
    excerpt: string;
    id: string;
    slug: string;
    title: string;
  };
};

type WordPressPosts = {
  edges: Edge[];
};

type PostsData = {
  allWordpressPost: WordPressPosts;
  site: unknown;
};

type Posts = {
  children: unknown;
  data: PostsData;
  location: unknown;
  navigate: unknown;
  pageContext: unknown;
  pageResources: unknown;
  path: string;
  pathContext: unknown;
  uri: string;
};

const PostsPage = (props: Posts) => {
  console.log(props);
  const { data } = props;
  return (
    <Layout>
      <SEO title="Posts" />
      <h1>Posts</h1>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div key={node.slug}>
          <Link to={`/${node.slug}`}>
            <h2>{node.title}</h2>
          </Link>
          <h3 dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default PostsPage;

export const postsQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          id
          title
          slug
          excerpt
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
