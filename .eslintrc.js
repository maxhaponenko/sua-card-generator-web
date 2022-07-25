module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],

  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    },
  },
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.tsx', '.json', '...'],
      },
    },
    quotes: "off",
    'quote-props': 1,
    "comma-dangle": 0,
    "import-alias/import-alias": [
      "error",
      {
        relativeDepth: 1,
        aliases: [
          { alias: "@", matcher: "src" }, // src/modules/app/test -> @src/modules/app/test
        ],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-console': 1,
    'no-use-before-define': ['error', {
      functions: true,
      classes: true,
      variables: false,
      allowNamedExports: false,
    }],
  },
};
