import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
const state = {
  totalTime: 0,
  style: {
    width: window.innerWidth + 'px',
    height: (window.innerHeight) * 0.5 + 'px'
  },
  list: [],
  title: {
    path: 'http://shop.zbj.com/6147585/',
    logo: 'http://avatar.zbjimg.com/006/14/75/200x200_avatar_85.jpg',
    cont: [
      '点击左侧LOGO可以直接访问北京微梦创新科技发展有限公司的网站，以便获得更多信息。',
      '表的x轴、y轴均可配置；折线/柱状可以选择。',
      '本表基于ECharts3.0，可以灵活配置。',
      'MVC三层完全分开，详见本Demo源码。',
      '完美支持IE8及以上、Chrome、FireFox、360、Safari、QQ浏览器。',
      '完美兼容移动浏览器。',
      '注：本Demo中图表的颜色为随机。'
    ]
  },
  table: {
    title: '基础情景-公司整体(亿元)',
    color: [],
    value: ['前3季度', '前2季度', '前1季度', '本季度', '未来1季度', '未来2季度', '未来3季度', '未来4季度'],
    list: [
      {
        title: '业务现金流',
        list: [9.77, 9.29, 8.91, 10.21, 7.96, 7.36, 9.29, 7.90],
        type: 'line'
      },
      {
        title: '资产现金流',
        list: [-7.96, -7.25, -9.50, -0.94, -5.98, -5.15, -7.00, -5.71],
        type: 'line'
      },
      {
        title: '筹资现金流',
        list: [-2.06, -0.41, -0.42, -11.02, '0', '0', -0.64, '0'],
        type: 'line'
      },
      {
        title: '净现金流',
        list: [-0.24, 1.63, -1.01, -1.75, 1.98, 2.21, 1.65, 7.19],
        type: 'bar'
      }
    ],
    text: [
      {
        title: '对过去四个季度现金流变化的观察与分析',
        cont: [
          {
            table: '业务现金流变化的主要原因是:',
            value: ''
          },
          {
            table: '资产现金流变化的主要原因是:',
            value: ''
          },
          {
            table: '投资现金流变化的主要原因是:',
            value: ''
          },
          {
            table: '净现金流变化的主要原因是:',
            value: ''
          }
        ]
      },
      {
        title: '对未来四个季度现金流变化的观察与分析',
        cont: [
          {
            table: '业务现金流变化的主要原因是:',
            value: ''
          },
          {
            table: '资产现金流变化的主要原因是:',
            value: ''
          },
          {
            table: '投资现金流变化的主要原因是:',
            value: ''
          },
          {
            table: '净现金流变化的主要原因是:',
            value: ''
          }
        ]
      }
    ]
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
