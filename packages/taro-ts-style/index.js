module.exports = {
  extends: ['taro/react'],
  plugins: ['no-inline-styles'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'no-inline-styles/no-inline-styles': 2,
  },
  overrides: [
    {
      files: ['scripts/*', '.eslintrc.js', 'postcss.config.js', 'babel.config.js', 'config/*'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'import/no-commonjs': 'off',
      },
    },
  ],
};
