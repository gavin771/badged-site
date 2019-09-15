module.exports = {
  siteMetadata: {
    title: `Badged`,
    description: `Creat your own unique badge to use anywhere`,
    author: `@gavin771`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `custom-badge`,
        short_name: `badged`,
        start_url: `/`,
        background_color: `#057C67`,
        theme_color: `#057C67`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Josefin+Slab`,
          `Open+Sans+Condensed\:300`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
}
