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
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;
  const metaTitle = title || site.siteMetadata.title;

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
          name: 'twitter:card',
          content: metaDescription,
        },
        {
          name: 'twitter:creator',
          content: '@https://twitter.com/nashvillefcc',
        },
        {
          name: 'url',
          content: 'https://nashvillefcc.github.io/mentor-night-site/',
        },
        {
          name: 'twitter:title',
          content: metaTitle,
        },
        {
          name: 'og:image',
          content: URL('../images/mnsCard.png'),
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
