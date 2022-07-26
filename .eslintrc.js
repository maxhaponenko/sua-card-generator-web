module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended'
  ],
  plugins: [
    // '@typescript-eslint',
    // 'react'
  ],

  settings: {

    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.tsx', '.json'],
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"]
        }
      },
    },

  },

  "rules": {
    
    // General core JS rules

    "quotes": "off", // [1, "single"],
    "semi": "off",
    "quote-props": 1,
    "comma-dangle": 0,
    "eol-last": 0,
    'no-console': 1,
    'no-use-before-define': ['error', {
      functions: false,
      classes: true,
      variables: false,
      allowNamedExports: true,
    }],

    // Plugins or extends rules

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

    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 0,
    
    "@typescript-eslint/no-var-requires": "off"
  },
};
