module.exports = function(config){
  config.set({
    basePath: "../",

    files: [
      "./*.js",
      "../*.js"
    ],

    autoWatch: false,

    frameworks: ["mocha"],

    browsers: ['Chrome', "Firefox"],

    preprocessors: {},

    plugins: [
      "karma-chrome-launcher",
      "karma-mocha"
    ]
  });
};
