module.exports = {
  siteMetadata: {
    title: `SeleneCodes`,
    description: `Want to have fun with Angular, Gatsby, D3.js and many more? Join now!`,
    author: `Selene Blok`,
    twitter: `@selene_codes`,
    siteUrl: `https://selene.codes`,
    type: `website`,
    keywords: ['Gatsby', 'D3', 'Data Science']
  },
  plugins: [
    "gatsby-plugin-root-import",
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Jost:300,400,500,600']
        }
      }
    },
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
        sitemap: "https://selene.codes/sitemap.xml",
        host: "https://selene.codes",
      }
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: require.resolve('./plugins/gatsby-source-devto'),
    },
    {
      resolve: require.resolve('./plugins/gatsby-medium-zoom'),
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Selene Codes`,
        short_name: `Selene`,
        start_url: `/`,
        background_color: `#2d2d2d`,
        theme_color: `#2d2d2d`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-liquid-tags`,
          {
            resolve: `gatsby-remark-images-anywhere`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 880,
              linkImagesToOriginal: false
            },

          },
          // `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              injectStyles: false,
              theme: 'One Dark Pro', // Or install your favorite theme from GitHub
              extensions: ['material-theme']
            }
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/ // See below to configure properly
        }
      }
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg']
      }
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
