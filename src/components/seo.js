import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

function SEO({ description, lang, meta, keywords, title }) {
  const { site } = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          baseUrl
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = site.siteMetadata.title || title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: metaTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'og:image',
          content: new URL(site.siteMetadata.baseUrl + '/mnsCard.png'),
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:creator',
          content: '@https://twitter.com/nashvillefcc',
        },
        {
          name: 'twitter:title',
          content: metaTitle,
        },
        {
          name: 'twitter:image',
          content: new URL(site.siteMetadata.baseUrl + '/mnsCard.png'),
        },
        {
          name: 'url',
          content: 'https://nashvillefcc.github.io/mentor-night-site/',
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  keywords: [],
  meta: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default SEO;
