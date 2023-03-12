require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_PROJECT_DATASET,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: true,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter Sanity Homepage",
        short_name: "Gatsby",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffe491",
        theme_color: "#004ca3",
        icon: "src/favicon.png",
      },
    },
    {
     resolve: `gatsby-plugin-google-gtag`,
     options: {
       // You can add multiple tracking ids and a pageview event will be fired for all of them.
       trackingIds: [
         "G-LHVX9LSCST", // Google Analytics / GA
       ],
       // This object is used for configuration specific to this plugin
       pluginConfig: {
         // Puts tracking script in the head instead of the body
         head: true,
         // Setting this parameter is also optional
         respectDNT: true,
         // Avoids sending pageview hits from custom paths
         exclude: ["/preview/**", "/do-not-track/me/too/"],
       },
     },
   },
  ],
}
