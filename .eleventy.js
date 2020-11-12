module.exports = (eleventyConfig) => {
  // pass through a single file
  // eleventyConfig.addPassthroughCopy("style.css");
  // pass through an entire "assets" dir untouched
  eleventyConfig.addPassthroughCopy("assets");
};
