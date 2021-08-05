const namingConvention = {
  '@typescript-eslint/camelcase': 'off',
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: ['variableLike'],
      format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow',
    },
    {
      selector: ['class', 'interface', 'typeAlias'],
      format: ['PascalCase'],
    },
    {
      selector: ['enum'],
      format: ['PascalCase', 'UPPER_CASE'],
    },
  ],
};

module.exports = {
  namingConvention,
};
