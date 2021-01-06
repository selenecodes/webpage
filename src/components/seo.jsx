/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, lang, meta, title, type, keywords, image }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        type
                        keywords
                        twitter
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;
    const metaPageType = type || site.siteMetadata.type;
    const metaPageKeywords = keywords || site.siteMetadata.keywords;
    const metaImage = image;

    return (
        <Helmet
            defer={false}
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: `keywords`,
                    content: metaPageKeywords,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: metaPageType,
                },
                {
                    property: `og:image`,
                    content: metaImage,
                },
                {
                    property: `og:site_name`,
                    content: site.siteMetadata.title,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.twitter,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `twitter:image`,
                    content: metaImage,
                },
            ].concat(meta)}
        />
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
};

export default SEO;
