<template>
  <div class="app-wrapper">
    <navbar/>
    <app-main/>
    <copyright></copyright>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {AppMain, Copyright, Navbar} from './components'

  @Component({
    name: 'Layout',
    components: {
      AppMain,
      Navbar,
      Copyright
    }
  })
  export default class extends Vue {

  }
</script>

<style lang="scss" scoped>
  .app-wrapper {

  }
</style>
