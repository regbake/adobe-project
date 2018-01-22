module.exports = function(config){
  config.set({
    basePath: ".",

    // files: [
    //   {pattern: "test/matchNamesTest.js", included: true},
    //   {pattern: "*.js", included: true}
    // ],

    files: [
      "./matchNames.js",
      "./test/matchNamesTest.js"

    ],

    autoWatch: true,

    reporters: ["progress"],

    colors: true,

    port: 9876,

    logLevel: config.LOG_INFO,

    //continuous integration mode
    singleRun: false,

    frameworks: ["mocha", "browserify"],

    browsers: ['Chrome', "Safari"],

    preprocessors: {
      "test/*.js": ["browserify"]
    },

    plugins: [
      "karma-chrome-launcher",
      "karma-safari-launcher",
      "karma-mocha",
      "karma-browserify"
    ]
  });
};
