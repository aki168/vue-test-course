import { shallowMount } from "@vue/test-utils";
import UserList from "@/components/UserList.vue";


// findAll 運用 

// .at(index) 指定位置元素
// .length 確認渲染出來的個數
// 推斷元素被渲染出來後的模樣

describe('測試員工編號',()=>{
  it('user DOM', ()=>{
    const wrapper = shallowMount(UserList)

    console.log(wrapper.findAll('.user_list'))
    expect(wrapper.findAll('.user_list').at(0).text()).toMatch('員工編號: 399')
    expect(wrapper.findAll('.user_list').length).toBe(6)
  })
})