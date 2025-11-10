export default {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2024,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier'
  ],
  settings: {
    react: { version: 'detect' },
    'import/resolver': { typescript: {} }
  },
  rules: {
    // stylistic choices
    'prettier/prettier': ['error', { 'trailingComma': 'none' }],
    'comma-dangle': ['error', 'never'],
    // recommended TS rules
    '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    // react rules
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    // import order (basic)
    'import/order': ['warn', { 'groups': ['builtin','external','internal','parent','sibling','index'] }],
  },
};
