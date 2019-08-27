<template>
  <div class="dashboard-container">
    <!--搜索块-->
    <search></search>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {UserModule} from '@/store/modules/user'
  import {Search} from './components'

  @Component({
    name: 'Dashboard',
    components: {
      Search
    }
  })
  export default class extends Vue {
    get roles() {
      return UserModule.roles
    }
  }
</script>
