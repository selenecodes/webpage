require('dotenv').config();

const fetchData = require('./fetch');
const typeDefs = require('./typedefs');
const {
    createArticleNodes,
    createMarkdownNode,
    downloadImages
} = require('./utils');

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    createTypes(typeDefs.TYPE_DEFS)
};

exports.sourceNodes = async (
    { actions: { createNode }, reporter, createNodeId, createContentDigest, getCache },
    {
        pageSize = 1000,
    }
) => {
    const API_KEY = process.env.DEVTO_API_KEY;
    if (!API_KEY) {
        const err = new Error("couldn't find environment variable DEVTO_API_KEY, please make sure to create it.");
        reporter.panicOnBuild(`gatsby-source-devto`, err);
    }

    // Start activity, dev.to data fetching
    const fetchActivity = reporter.activityTimer(`Finished dev.to data-ingress`);
    fetchActivity.start();

    const articles = await fetchData({
        API_KEY,
        pageSize,
        reporter
    });
    reporter.info('Finished fetching dev.to articles');

    createArticleNodes(articles, {
        reporter,
        createNode,
        createContentDigest,
        createNodeId,
        getCache
    });
    reporter.info('Created dev.to nodes succesfully');

    fetchActivity.end();
};


exports.onCreateNode = async ({
    actions: { createNode },
    getCache,
    createNodeId,
    createContentDigest,
    node,
    reporter
}) => {
    if (node.internal.type === `DevArticle`) {
        reporter.info('Creating markdown and images.')
        downloadImages(node, {
            createNode,
            createNodeId,
            getCache
        });
    
        createMarkdownNode(node, {
            createContentDigest,
            createNode,
            createNodeId
        });
    }
}