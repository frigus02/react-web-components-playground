const withTM = require("next-transpile-modules");

module.exports = withTM({
  transpileModules: ["shared-custom-element-wrapper"]
});
