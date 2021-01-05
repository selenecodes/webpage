const TYPE_DEFS = `
    type DevArticle implements Node {
        id: ID!
        parent: Node!
        children: [Node!]!
        internal: Internal!
        article: Article!
    }

    type DevMarkdown implements Node {
        id: ID!
        parent: Node!
        children: [Node!]!
        internal: Internal!
        childMarkdownRemark: MarkdownRemark!
    }
  
    type Article {
        type_of: String!
        id: Int!
        title: String!
        description: String
        cover_image: String
        cover: File @link
        markdown: DevMarkdown @link
        published: Boolean!
        published_at: String
        tag_list: [String]
        slug: String!
        path: String!
        url: String!
        canonical_url: String
        comments_count: Int!
        positive_reactions_count: Int!
        page_views_count: Int!
        published_timestamp: String
        body_markdown: String
        user: User!
        organization: Organization
        flare_tag: Flare
    }

    type User {
        name: String!
        username: String!
        twitter_username: String
        github_username: String
        website_url: String
        profile_image: String!
        profile_image_90: String
    }

    type Organization {
        name: String!
        username: String!
        slug: String!
        profile_image: String!
        profile_image_90: String
    }

    type Flare {
        name: String!
        bg_color_hex: String
        text_color_hex: String
    }
`

module.exports = {
    TYPE_DEFS: TYPE_DEFS
}