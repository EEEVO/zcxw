<template>
  <div class="copyright-wrapper">
    底部
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component({
    name: 'Copyright',
    components: {}
  })
  export default class extends Vue {

  }
</script>

<style lang="scss" scoped>
  .copyright-wrapper {
    width: 100vw;
    height: 100px;
    background-color: $footerBgColor;
    color: $navBtnColor;
  }
</style>
