module.exports = function(config){
  config.set({
    basePath: ".",

    files: [
      "./matchNames.js",
      "./test/matchNamesTest.js",
      "./test/front-endTest.js"
    ],

    autoWatch: true,

    reporters: ["progress"],

    colors: true,

    port: 9876,

    logLevel: config.LOG_INFO,

    //continuous integration mode
    singleRun: false,

    frameworks: ["mocha", "chai-http", "chai", "browserify"],

    browsers: ['Chrome', "Safari"],

    preprocessors: {
      "test/*.js": ["browserify"],
      "*.js": ["browserify"]
    },

    plugins: [
      "karma-chrome-launcher",
      "karma-safari-launcher",
      "karma-mocha",
      "karma-browserify",
      "karma-chai",
      "karma-chai-http"
    ]
  });
};
