module.exports = {
  '*.html': ['prettier --write'],
  '*.scss': ['stylelint --fix', 'stylelint --fix', 'prettier --write'],
  '*.{js,jsx}': ['eslint --fix', 'prettier --write'],
};
