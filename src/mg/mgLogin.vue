<template>
<div class="h100">
  <div>
    <top ></top>
    <div>
      <div class="flex-start ">
        <left></left>
      </div>
      <div>
          <slot name="top"></slot>
          <slot name="left"></slot>
      </div>

    </div>
  </div>

</div>
</template>
<script>
import top from './top'
import left from './left'
export default {
  name : 'mglogin',
  components : {
    top,left
  },
  data () {
    return {

    }
  }
}
</script>
<style>

</style>


