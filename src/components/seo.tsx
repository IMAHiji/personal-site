/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type MetaProps = JSX.IntrinsicElements['meta'];
export type SEO = {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
};

function SEO({ description, lang, meta, title }: SEO) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  const metaPayload = [
    {
      name: 'Luke Askins',
      content: metaDescription,
    },
    {
      property: 'Luke Askins',
      content: title,
    },
    {
      property: 'Personal Site of Luke Askins',
      content: metaDescription,
    },
  ].concat(meta || []);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={metaPayload}
    />
  );
}

export default SEO;
