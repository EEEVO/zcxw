<template>
  <div class="search-label-wrapper">
    <icon></icon>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import icon from './icon.vue'

  @Component({
    name: 'SearchLabel',
    components: {
      icon
    }
  })
  export default class extends Vue {

  }
</script>

<style lang="scss" scoped>
  .search-label-wrapper {
    width: 100%;
  }
</style>
