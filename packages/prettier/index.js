module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  printWidth: 140,
  bracketSpacing: true,
  arrowParens: 'always',
  importOrder: [
    './styles/entry.scss',
    '^react',
    '^antd',
    '^(?!(([./])|(@|src)/))',
    '^(@|src)/',
    '^[./].*(?<!(css|scss|less|sass))$',
    '\\.(css|scss|less|sass)$',
  ],
};
