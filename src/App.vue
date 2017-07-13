<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <titlebar></titlebar>
    </nav>
      <tablebar :test2="abc"></tablebar>
      <button @click='test'>{{abc}}</button>
  </div>
</template>

<script>
  import Titlebar from './components/Titlebar.vue'
  import Tablebar from './components/Tablebar.vue'
  export default {
    data () {
      return {
        abc: 'test'
      }
    },
    components: { 'titlebar': Titlebar, 'tablebar': Tablebar },
    methods: {
      test () {
        window.alert(this.abc)
      }
    }
  }
</script>
