import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
export default {
  'plans': Vue.$http.get('../../data/getPlans.json').then((response) => {
    return response.plans
  }, (response) => {
    // 响应错误回调
  })
}
