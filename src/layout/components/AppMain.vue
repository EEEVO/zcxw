<template>
  <section class="app-main">
    <transition mode="out-in" name="fade-transform">
      <keep-alive>
        <router-view :key="key"/>
      </keep-alive>
    </transition>
  </section>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component({
    name: 'AppMain'
  })
  export default class extends Vue {
    get key() {
      return this.$route.path
    }
  }
</script>

<style lang="scss" scoped>
  .app-main {
    /* 50= navbar  50  */
    min-height: calc(100vh - 50px);
    margin: 0 auto;
    max-width: $maxWidth;
    position: relative;
    overflow: hidden;
  }

  .fixed-header + .app-main {
    padding-top: 50px;
    height: 100vh;
    overflow: auto;
  }

  .hasTagsView {
    .app-main {
      /* 84 = navbar + tags-view = 50 + 34 */
      min-height: calc(100vh - 84px);
    }

    .fixed-header + .app-main {
      padding-top: 84px;
    }
  }
</style>
