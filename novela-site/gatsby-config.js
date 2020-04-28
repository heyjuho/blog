module.exports = {
  siteMetadata: {
    title: `Juho-Taneli Henell,
    name: `Juho-Taneli Henell,
    siteUrl: `https://www.juho.no`,
    description: `I'm an entrepreneur and independent designer based in Oslo, Norway.`,
    hero: {
      heading: `Designer, entrepreneur, writer. In that order.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/heyjuho_`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/heyjuho`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/heyjuho`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
