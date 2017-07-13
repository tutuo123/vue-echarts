<template>
  <div class="panel panel-default">
    <a class="col-xs-2" :href="title.path"><img class="img-responsive" :src="title.logo" alt="微梦创新"></a>
    <div class="col-xs-10">
      <p><strong>说明：</strong></p>
      <ul>
        <li v-for="(item,index) in title.cont">{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<style>
  #logo {
    width:100%;
    height:100%;
  }
</style>

<script>
export default {
  computed: {
    title () {
      return this.$store.state.title
    }
  }
}
</script>
