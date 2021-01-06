const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

/**
 * 
 * @param {Node} node - A Gatsby GraphQL node.
 * @param {*} param1 - Gatsby helper functions.
 */
const downloadImages = async (
    node,
    { createNode, createNodeId, getCache }
) => {
    if (node.article.cover_image) {
        const coverImageNode = await createRemoteFileNode({
            url: node.article.cover_image,
            getCache,
            createNode,
            createNodeId,
            parentNodeId: node.id,
        });
    
        if (coverImageNode) {
            node.article.cover = coverImageNode.id;
        }
    }
}

/**
 *
 * Creates nodes from JSON articles.
 * @param {object} articles - A JSON dev.to article 
 * @param {*} param1 - Gatsby helper functions 
 */
const createArticleNodes = (
    articles,
    { reporter, createNode, createNodeId, createContentDigest }
) => {
    articles.forEach(article => {
        if (!article.cover_image) {
            const error = new Error(`Article:"${article.title}" is missing a cover image.`);
            reporter.paniOnBuild(`missing cover image`, error);
        }

        const node = {
            article: Object.assign({}, article),
            id: createNodeId(`dev.to-article-${article.id}`),
            parent: null,
            children: [],
            internal: {
                type: 'DevArticle',
                contentDigest: createContentDigest(article)
            }
        };

        createNode(node);
    });
}

/**
 * 
 * @param {*} node - A Gatsby GraphQL node.
 * @param {*} param1 - Gatsby helper functions.
 */
const createMarkdownNode = (
    node,
    { createContentDigest, createNode, createNodeId }
) => {
    const markdown = node.article.body_markdown
    const markdownNode = {
        markdown: markdown,
        id: createNodeId(`dev.to-article-markdown-${node.article.id}`),
        parent: null,
        children: [],
        internal: {
            type: 'DevMarkdown',
            content: markdown,
            mediaType: 'text/markdown',
            contentDigest: createContentDigest(markdown)
        }
    };

    createNode(markdownNode);
    
    node.article.markdown = markdownNode.id;
}

module.exports = {
    createArticleNodes,
    createMarkdownNode,
    downloadImages,
}