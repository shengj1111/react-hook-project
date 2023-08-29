module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'indent': [2, 2], // 强制使用一致的缩进
    'eqeqeq': [2, 'always'], // 要求使用 === 和 !==
    'semi': [2, 'never'], // 要求或禁止使用分号代替 ASI 
    'quotes': [2, 'single'],  // 强制使用一致的反勾号、双引号或单引号
    'no-var': 2,
    'jsx-quotes': ["error", "prefer-single"]
  },  
}
