module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:prettier/recommended', // 添加 prettier 插件 解决冲突
    'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/no-multiple-template-root': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state', 'config']
      }
    ],
    'vue/multi-word-component-names': [
      'error',
      {
        // 忽略的文件
        ignores: []
      }
    ],
    // 项目代码中不允许出现 console.log 代码
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-unused-vars': 'off'
  }
}
