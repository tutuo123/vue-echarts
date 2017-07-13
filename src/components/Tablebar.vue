<template>
  <div>
    <table class='table table-striped table-condensed'>
      <thead>
      <tr>
        <th></th>
        <th v-for='(item,i) in table.value'><input type='text' class='form-control form-control1' v-model='table.value[i]'></th>
        <th class='non'>折线/柱状</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for='items in table.list'>
        <td class='title'><input type='text' class='form-control form-control1' :value='items.title'></td>
        <td v-for='(item,i) in items.list' class='item'><input type='number' class='form-control form-control1' v-model='items.list[i]'></td>
        <td>
          <input class='margin-r' type='radio' value='line' v-model='items.type'>
          <input class='margin-l' type='radio' value='bar' v-model='items.type'>
        </td>
      </tr>
      </tbody>
    </table>
    <div class='container-fluid'>
      <div class='col-sm-6' v-for='items in table.text'>
        <h4>{{items.title}}</h4>
        <div class='form-group' v-for='item in items.cont'>
          <label>{{item.table}}</label>
          <input type='text' class='form-control' v-model='item.value'>
        </div>
      </div>
      <div class='row text-center'>
        <button @click='test'>{{test1}}</button>
        <router-link to='/image' id='btn' class='btn btn-success'>显示图表</router-link>
      </div>
    </div>
  </div>
</template>
<style>
    .form-control1 {
      max-width: 120px;
    }
    .margin-r {
      margin-right: 10px !important;
    }
    .margin-l {
      margin-left: 10px !important;
    }
    .non {
      min-width: 75px;
    }
</style>
<script>
export default {
  props: {
    test2: {
      type: String
    }
  },
  computed: {
    table () {
      return this.$store.state.table
    },
    test1 () {
      return this.test2
    }
  },
  methods: {
    test () {
      window.alert(this.test1)
    }
  }
}
</script>
