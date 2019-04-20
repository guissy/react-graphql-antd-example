var env = process.env.NODE_ENV;
// 为啥不起作用？？？？
module.exports = {
  // "sourceType": "unambiguous",
  "presets": [
    // ["@babel/env", {
    //   "targets": {
    //     "node": "current"
    //   }
    // }],
    "next/babel",
    "@zeit/next-typescript/babel"
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }],
    ["import", { "libraryName": "antd", "style": "less" }],
    ["@babel/plugin-proposal-export-default-from"],
    ["@babel/plugin-proposal-export-namespace-from"],
    ["@babel/plugin-transform-modules-commonjs"]
  ]
}