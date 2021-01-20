module.exports = {
  siteMetadata: {
    title: "Jose Galdámez",
    description: "Web developer in Guatemala",
    author: "@eladiogaldamez",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "José Galdámez",
        short_name: "starter",
        start_url: "/",
        background_color: "#333646",
        theme_color: "#333646",
        display: "minimal-ui",
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        display: 'swap',
        fonts: [
          "Nunito:400,600,700,900"
        ],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
  ],
}
