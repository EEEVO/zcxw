<template>
  <div class="icon-wrapper">
    职位(500+)
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component({
    name: 'icon',
    components: {}
  })
  export default class extends Vue {

  }
</script>

<style lang="scss" scoped>
  .icon-wrapper {
    display: inline-block;
    width: 149px;
    line-height: 46px;
    text-align: center;
    background-image: url('../../../src/assets/500+.png');
    color: $white;
  }
</style>
