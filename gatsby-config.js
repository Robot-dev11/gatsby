/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ExelaTech`,
    siteUrl: `https://www.yourdomain.tld`,
    twitterUsername: `@gatsbyjs`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://www.yourdomain.tld`, // this is use for seo optimization
  },
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-google-gtag", "gatsby-plugin-image", "gatsby-plugin-sitemap","gatsby-plugin-image","gatsby-plugin-sharp", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "blog",
      "path": `${__dirname}/blog`
    },
    __key: "pages"
  }]
};