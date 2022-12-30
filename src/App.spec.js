// 先用測試幫我們渲染組件，在來測試
import { shallowMount, mount } from "@vue/test-utils";
import App from '@/App.vue'

describe('App Test', () => {
  it('Unit Test 淺渲染', () => {
    const wrapper = shallowMount(App)
    console.log(wrapper.text())
    expect(wrapper.text()).toMatch('更有效率地完成 Vue 的單元測試!')
  })
})

describe('App Test', () => {
  it('Unit Test 渲染', () => {
    const wrapper = mount(App)
    console.log(wrapper.text())
    expect(wrapper.text()).toMatch('更有效率地完成 Vue 的單元測試!')
  })
})
