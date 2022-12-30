module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  testMatch: ["**/src/**/*.spec.[jt]s?(x)"],
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest"
  },
}

// 讓測試框架可以直接指向鄰近檔案，而不是全部去 unit 裡面撈