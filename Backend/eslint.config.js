module.exports = [
    {
      files: ['**/*.js'],
      rules: {
        'no-unused-vars': 'error',
        'semi': ['error', 'always'],
      },
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
  ];
