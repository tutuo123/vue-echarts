<template>
  <div class='container-fluid padding-top'>
    <router-link to='/' class='btn btn-primary btn1'>关闭</router-link>
    <div id='main' class='container-fluid' :style="style"></div>
    <div class='col-sm-6' v-for='items in table.text'>
      <h4>{{items.title}}</h4>
      <div class='form-group' v-for='item in items.cont'>
        <label>{{item.table}}</label>
        <input type='text' class='form-control' :value='item.value'>
      </div>
    </div>
  </div>
</template>
<style>
  .padding-top {
    padding-top:20px
  }
  .btn1 {
    position: absolute;
    z-index: 2;
    right:20px
  }
</style>
<script>
import Echarts from 'echarts'
export default {
  computed: {
    table () {
      return this.$store.state.table
    },
    style () {
      return this.$store.state.style
    }
  },
  methods: {
    modifyWH () {
      this.$store.dispatch('modifyWH', {
        width: window.innerWidth + 'px',
        height: (window.innerHeight) * 0.5 + 'px'
      })
    },
    getXColorAt (_i) {
      if (_i >= this.table.color.length) {
        this.table.color.push('#' + ('00000' + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)).slice(-6))
      }
      return this.table.color[_i]
    },
    getMagicType () {
      const arr = []
      for (var i = 0; i < this.table.list.length; i++) {
        arr.push(this.table.list[i].type)
      }
      return arr
    },
    getLegend () {
      const arr = []
      for (var i = 0; i < this.table.list.length; i++) {
        arr.push(
          {
            name: this.table.list[i].title,
            textStyle: {
              color: this.getXColorAt(i)
            }
          })
      }
      return arr
    },
    getXAxis () {
      const arr = []
      for (var i = 0; i < this.table.value.length; i++) {
        arr.push(this.table.value[i])
      }
      return arr
    },
    getSeries () {
      const arr = []
      for (var i = 0; i < this.table.list.length; i++) {
        arr.push(
          {
            name: this.table.list[i].title,
            type: this.table.list[i].type,
            data: this.table.list[i].list,
            label: {
              normal: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: this.getXColorAt(i)
              }
            }
          })
      }
      return arr
    },
    aaa () {
      this.chart = Echarts.init(document.getElementById('main'))
      this.chart.setOption({
        title: {
          text: this.table.title,
          left: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        toolbox: {
          feature: {
            dataView: {show: false, readOnly: false},
            magicType: {show: false, type: this.getMagicType()},
            restore: {show: false},
            saveAsImage: {show: false}
          }
        },
        legend: {
          data: this.getLegend(),
          orient: 'vertical',
          left: 'right',
          top: 'middle',
          padding: 10
        },
        grid: {
          left: '0%',
          right: '10%',
          bottom: '8%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.getXAxis()
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: this.getSeries()
      }
      )
    }
  },
  mounted: function () {
    this.aaa()
    var that = this
    window.onresize = function () {
      that.modifyWH()
      that.aaa()
    }
  }
}
</script>
