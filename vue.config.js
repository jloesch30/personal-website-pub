/*
* Config file for gh-pages entry point for files
*/

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/personal-website/'
    : '/'
};