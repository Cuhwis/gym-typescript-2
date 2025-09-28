const { plugins } = require("./postcss.config.cjs");

module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
};
