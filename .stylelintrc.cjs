module.exports = {
  defaultSeverity: 'warning',
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
    'stylelint-config-prettier-scss',
  ],
  rules: {
    'selector-id-pattern': null,
    'selector-class-pattern': null,
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['inside-block', 'blockless-after-blockless'],
        ignore: ['after-comment'],
      },
    ],
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['inside-block'],
        ignore: ['after-comment'],
      },
    ],
  },
};
