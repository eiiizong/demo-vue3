/*
 * @Author: zengxm
 * @Date: 2021-11-23 17:22:52
 * @LastEditors: zengxm
 * @LastEditTime: 2021-11-23 17:24:07
 * @Description: change
 * @FilePath: /demo-vue3/tests/Test.spec.ts
 */
import { mount } from '@vue/test-utils'
import Test from '../src/views/Test.vue'

test('Test.vue', async () => {
  const wrapper = mount(Test)
  expect(wrapper.html()).toContain('Unit Test Page')
  expect(wrapper.html()).toContain('count is: 0')
  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('count is: 1')
})
