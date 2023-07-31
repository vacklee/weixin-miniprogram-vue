module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.wxml'],
      plugins: ['wxml'],
      processor: 'wxml/wxml',
      parser: '@wxml/parser',
      rules: {
        'wxml/empty-tag-self-closing': 'warn',
        'wxml/event-binding-style': ['warn', 'colon'],
        'wxml/forbid-tags': ['error', {
          forbid: [
            { tag: 'div', message: '请使用 <view />' },
            { tag: 'span', message: '请使用 <text />' }
          ]
        }],
        'wxml/no-duplicate-attributes': 'error',
        'wxml/no-inconsistent-tagname': 'error',
        'wxml/no-inline-wxs': 'error',
        'wxml/no-unexpected-string-bool': 'warn',
        'wxml/no-unnecessary-block': 'error',
        'wxml/no-vue-directive': 'error',
        'wxml/no-wx-for-with-wx-else': 'error',
        'wxml/no-wx-for-with-wx-if': 'error',
        'wxml/no-wx-if-string': 'error',
        'wxml/quotes': ['warn', 'double'],
        'wxml/report-interpolation-error': 'error',
        'wxml/report-wxml-syntax-error': 'error',
        'wxml/report-wxs-syntax-error': 'error',
        'wxml/wx-key': 'warn',
        'wxml/wxs-must-be-top-level': 'error'
      }
    },
    {
      files: ['*.js'],
      env: {
        es6: true,
        browser: true,
        node: true
      },
      ecmaFeatures: {
        modules: true
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
      },
      extends: ['standard'],
      globals: {
        wx: true,
        App: true,
        Page: true,
        getCurrentPages: true,
        getApp: true,
        Component: true,
        requirePlugin: true,
        requireMiniProgram: true
      }
    }
  ]
}
