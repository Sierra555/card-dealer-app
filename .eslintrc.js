module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: [
    'prettier',
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': [
      'warn',
      {
        'endOfLine': 'auto',
      },
    ],
  },
  root: true,
};
