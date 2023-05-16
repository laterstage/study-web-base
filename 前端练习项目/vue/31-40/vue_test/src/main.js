import Vue from 'vue'
import App from './App.vue'
/**改文件是所有文件的入口感
 *
 * 他是所有组件的父组件
 *
 * */
Vue.config.productionTip = false
//关闭vue所有错误提示
new Vue({
  el:'#app',
  //进行创建组件标签 因为没有调用 组件则用this 用箭头 es代表模块化
  render: h => h(App),
})
/**
 * vue.js 与vue.runtime.xxx.js的区别
 * 1.vue.js 是完成版本
 * 2.vue.runtime.xxx.js是运行版本vue质保函核心功能，没有魔板解析器
 * 3.因为vue.runtime.xxx.js没有使用魔板解析器，所以不能使用template配置项
 * 需要使用render函数接收到createElement函数制定具体内容
 *
 * vue inspect > output.js 是将所有的vue 配置整理成js文件
 *
 *
 *
 * */
