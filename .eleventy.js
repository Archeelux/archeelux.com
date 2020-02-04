const util = require("util");
const format = require("date-format");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");

  eleventyConfig.addFilter("dump", obj => {
    return util.inspect(obj);
  });

  eleventyConfig.addFilter("formatDate", dte =>
    dte ? format("dd/MM/yyyy hh:mm:ss", dte) : null
  );

  return {
    dir: { input: "src", output: "dist", data: "_data" },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "html", "yml"],
    htmlTemplateEngine: "njk"
  };
};
