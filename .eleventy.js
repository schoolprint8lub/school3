const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    // Копіювання папки адмін-панелі у вихідну директорію
    eleventyConfig.addPassthroughCopy("admin");
    // Копіювання зображень (якщо будуть)
    eleventyConfig.addPassthroughCopy("src/images");
    // Копіювання стилів
    eleventyConfig.addPassthroughCopy("src/css");

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }
    };
};
