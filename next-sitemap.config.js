/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL ||
    'https://hwell-app-8fvb-5jgccpvm7-leevscode.vercel.app',
  generateRobotsTxt: true, // (optional)
  // ...other options
};
