import { shallowMount } from "@vue/test-utils";
import AddCount from '@/components/AddCount.vue'

// 模擬渲染出來後, 抓取組件的內容

// 判斷按鈕是否存在: get(會爆掉) 與 find(回應error) 的差異

describe('按鈕測試', () => {
  it('判斷按鈕是否存在', () => {
    const wrapper = shallowMount(AddCount)
    const btn = wrapper.find('.add-btn')
    expect(btn.exists()).toBe(true)
  })
})
