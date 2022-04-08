const presets = [
  [
    '@babel/preset-env',
    {
      modules: false,
    },
  ],
];

module.exports = {
  presets,
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-function-bind',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
  ],
  sourceType: 'unambiguous', // https://babeljs.io/docs/en/options#sourcetype needed because of transform-runtime
};
