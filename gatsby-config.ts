require("dotenv").config();
import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title:'DevSticker',
    siteUrl: `https://www.yourdomain.tld`,
    description:"Buy the best stickers"
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `llye12wof84q`,
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: "M7fLA49me5afezCe3gXvwcjOPinaou9XPBwPquk8USk",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-mdx`,
    {
      resolve:`gatsby-source-filesystem`,
      options:{
        path:`${__dirname}/blog-posts`
      }
    },
  ],
}

export default config
