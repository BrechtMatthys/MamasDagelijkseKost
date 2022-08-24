const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/reset.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  // eleventyConfig.addPassthroughCopy('./src/js/script.js');

  // eleventyConfig.addFilter("postDate", (dateObj) => {
  //    return DateTime.fromJSDate(dateObj).toLocalString(DateTime.DATE_MED);
  // })

  // https://github.com/11ty/eleventy/issues/411 alfabetisch

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
}
