const vue = require('eslint-plugin-vue');

module.exports = [
  {
    files: ['**/*.vue', '**/*.js'], // Aplica a archivos Vue y JS
    plugins: { vue },
    rules: {
      'vue/no-unused-vars': 'error',
      'vue/html-indent': ['error', 2],
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
  },
];
