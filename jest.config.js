/*
 * @Author: zengxm
 * @Date: 2021-11-23 17:22:13
 * @LastEditors: zengxm
 * @LastEditTime: 2021-11-23 17:22:13
 * @Description: change
 * @FilePath: /demo-vue3/jest.config.js
 */
module.exports = {
  moduleFileExtensions: ['vue', 'js', 'ts'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest', // vue 文件用 vue-jest 转换
    '^.+\\.ts$': 'ts-jest' // ts 文件用 ts-jest 转换
  },
  // 匹配 __tests__ 目录下的 .js/.ts 文件 或其他目录下的 xx.test.js/ts xx.spec.js/ts
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts)$'
}
