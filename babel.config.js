module.exports = function (api) {
  api.cache(true)

  const presets = [
    ["@babel/preset-env", {
      "targets": {
        "esmodules": false
      }
    }]
  ]
  const plugins = [
    "@babel/plugin-proposal-class-properties",
    [
      "babel-plugin-transform-builtin-extend",
      {
        "globals": [
          "Error",
          "Array"
        ],
        "approximate": true
      }
    ]
  ]

  return { presets, plugins };
}
