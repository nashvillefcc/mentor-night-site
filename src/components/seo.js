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

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {
          name: `description`,
          content: 'A place for Q&A and free mentorship',
        },
        {
          property: `og:title`,
          content: 'Mentor Night | Free Code Camp',
        },
        {
          property: `og:description`,
          content: 'A place to be coached or to coach for free along your developer journey',
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: '@freeCodeCamp,'
        },
        {
          name:'url',
          content:"https://nashvillefcc.github.io/mentor-night-site/", //Added line 52 and it's key:value pair because the content key was present in other examples
        },
        {
          name: `twitter:title`,
          content: 'Mentor Night on Twitter',
        },
        {
          name: 'og:image',
          content: URL('../images/mnsCard.png'),
        },
        // {
        //   name: `twitter:description`,
        //   content: metaDescription,
        // },
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
