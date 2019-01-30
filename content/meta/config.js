const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Halcyon Days", // <title>
  shortSiteTitle: "Halcyon Days", // <title> ending for posts and pages
  siteDescription: "",
  siteUrl: "https://halcyond.net",
  pathPrefix: "",
  siteLanguage: "en",
  // author
  authorName: "erich dalton",
  authorTwitterAccount: "chalcyondays",
  // info
  infoTitle: "erich dalton",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "Halcyon Days",
  manifestShortName: "HalcyonDays", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "erich@halcyond.net",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/takakoshimizu" },
    { name: "twitter", url: "https://twitter.com/chalcyondays" }
  ]
};
