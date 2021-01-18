/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const path = require("path")

const tailwindConfig = require("./tailwind.config.js")

const dotenv = require("dotenv")
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Michael Mangialardi",
    titleTemplate: "%s · Michael Mangialardi",
    description:
      "Web development tutorials from an impostor syndrome survivor. Learn React, JavaScript, CSS, and more!",
    url: "https://michaelmang.dev", // No trailing slash allowed!
    image: "/card.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@michaelmangial1",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    "gatsby-plugin-provide-react",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-graphcms",
      options: {
        // Your GraphCMS API endpoint. Available from your project settings.
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        // A PAT (Permanent Auth Token) for your project. Required if your project is not available publicly, or you want to scope access to a specific content stage (i.e. draft content).
        token: process.env.GRAPHCMS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Michael Mangialardi",
        short_name: "Michael Mangialardi",
        start_url: "/",
        background_color: "#0081A7",
        theme_color: "#FDFCDC",
        display: "standalone",
        icon: "src/images/mario_square.png",
      },
    },
    'gatsby-plugin-catch-links',
  ],
}
