const kebabCase = '+([a-z0-9_.])*(-+([a-z0-9_.]))';
const checkFileNaming = {
  'check-file/folder-match-with-fex': 0,
  'check-file/no-index': 0,
  'check-file/filename-naming-convention': [
    'error',
    {
      '*.{jsx,tsx}': kebabCase,
      '*.{js,ts}': kebabCase,
    },
  ],
  'check-file/folder-naming-convention': [
    'error',
    {
      'src/**/': kebabCase,
    },
  ],
};

module.exports = checkFileNaming;
