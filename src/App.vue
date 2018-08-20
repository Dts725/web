<template>
  <div id="app"  v-cloak ref ='apps'>
    <router-view/>
  </div>
</template>

<script>
import './store/index'
export default {
  name: 'App',
  data (){
    return {

    }
  },
  mounted () {
      window.document.body.style.height = window.document.body.clientWidth + 'px';
      this.$store.commit('windowHeight',window.document.body.clientWidth)  ;
  },
}
</script>

<style>
[v-cloak] {
display: none !important;
}
#app {
  height: 100%;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
  letter-spacing: 2px;

}

</style>
