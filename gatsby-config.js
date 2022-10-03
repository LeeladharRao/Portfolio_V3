const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Leeladhar Rao',
    description:
      'Leeladhar Rao is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.',
    siteUrl: 'https://LeeladharRao.com', 
    image: '',
    twitterUsername: '@leela',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": "src/components",
          '@styles': 'src/styles',
          '@config': 'src/config',
          '@utils': 'src/utils',
          '@hooks': 'src/hooks',
          '@fonts': 'src/fonts',
        },
        extensions: [
          "js",
        ],
      }
    }
  ]
};