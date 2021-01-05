/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(
        `
        {
            articles: allDevArticle {
                edges {
                    node {
                        article {
                            slug
                        }
                    }
                }
            }
        }
      `
    )

    if (result.errors) {
        throw result.errors
    }

    // Create blog articles pages.
    const articles = result.data.articles.edges;
    articles.forEach((item) => {
        const article = item.node.article;
        createPage({
            path: `/blog/${article.slug}`,
            component: require.resolve("./src/templates/article/article.jsx"),
            context: {
                slug: article.slug,
            },
        })
    });
}