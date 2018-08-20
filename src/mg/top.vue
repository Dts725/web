<template>
  <div class="h100 bg white left" >
      <ul class="flex-start h12">
        <li class="w20">小明</li>
        <li class="w20">搜索</li>
      </ul>
  </div>
</template>
<script>
export default {
  name : 'left',
  props : {
    type : Object,
    default : null
  },
  data () {
    return {};
  }
}
</script>
 <style scoped>
 li {
   cursor: pointer;
 }
li:hover {
      color: aqua;
}
</style>
