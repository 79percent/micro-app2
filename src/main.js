import Vue from "vue";
import Vuex from 'vuex';
import App from "./App.vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    url: 'https://79percent.github.io/micro-app2'
  },
})

Vue.config.productionTip = false;

// 声明变量管理vue及路由实例
let instance = null;
// 导出子应用生命周期 挂载前
export async function bootstrap(props) {
  console.log(props)
}
// 导出子应用生命周期 挂载前 挂载后
export async function mount() {
  instance = new Vue({
    store,
    render: h => h(App)
  }).$mount("#app");
}
// 导出子应用生命周期 挂载前 卸载后
export async function unmount() {
  instance.$destroy();
  instance = null;
}
// 单独开发环境
mount();