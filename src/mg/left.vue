<template>
  <div class="w100">
      <ul  class="top w100 bg white">
        <li class="w100">评论管理</li>
      </ul>
  </div>
</template>
<script>
import '../store/index'
export default {
  name : 'top',
  props : {
    type : Object,
    default : null
  },
  mounted () {
    console.log(this.$store.height.state.height)
  },
  data () {
    return {};
  }
}
</script>
 <style scoped>
 .top {
   height: 100%;
   width: 2rem;

 }
 .top li {
   height: 2rem;
 }
  .top li:hover {
    color: aqua;

  }
</style>
