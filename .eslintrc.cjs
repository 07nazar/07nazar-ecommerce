const { layersLib } = require('@feature-sliced/eslint-config/utils')

const FS_SEGMENTS_EXTENDED = [...layersLib.FS_SEGMENTS, 'assets']

const FS_SLICED_LAYERS_REG = layersLib.getUpperLayers('shared').join('|')
const FS_SEGMENTS_REG = [
  ...FS_SEGMENTS_EXTENDED,
  ...FS_SEGMENTS_EXTENDED.map((seg) => `${seg}.*`),
].join('|')

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:react-hooks/recommended',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    '@feature-sliced/eslint-config/rules/layers-slices',
    '@feature-sliced/eslint-config/rules/import-order/experimental',
    '@feature-sliced/eslint-config/rules/public-api',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  plugins: ['react', '@typescript-eslint', 'import', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-internal-modules': [
      'error',
      {
        allow: [
          `**/*(${FS_SLICED_LAYERS_REG})/!(${FS_SEGMENTS_REG})`,
          `**/*(${FS_SLICED_LAYERS_REG})/!(${FS_SEGMENTS_REG})/!(${FS_SEGMENTS_REG})`,
          `**/*shared/*(${FS_SEGMENTS_REG})/!(${FS_SEGMENTS_REG})`,
          `**/*shared/*(${FS_SEGMENTS_REG})`,
          `**/*shared/_*`,
          `**/*shared/_*/*`,
          '**/assets/*',
          '@mui/**/*',
          'react-dom/*',
        ],
      },
    ],
  },
}
