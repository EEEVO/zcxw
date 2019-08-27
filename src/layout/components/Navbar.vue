<template>
  <div class="navbar-wrapper">
    <div class="inner">
      <div class="lg_tbar_l">
        <a class="logo" href="https://www.lagou.com/"></a>
      </div>
      <ul class="lg_tbar_m">
        <li v-for="item of tabrM">
          <router-link :to="item.link">{{item.name}}</router-link>
        </li>
      </ul>
      <div class="lo_tbar_r">
        <ul>
          <li v-for="item of tabrR">
            <router-link :to="item.link">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  interface InavItem {
    name: string,   //名称
    link: string,   //路由地址
  }

  @Component({
    name: 'Navbar',
    components: {}
  })
  export default class extends Vue {
    tabrM: InavItem[] = [{
      name: '首页',
      link: '',
    }, {
      name: '检索',
      link: '',
    }, {
      name: '在线培训',
      link: '',
    }, {
      name: '线下招聘',
      link: '',
    }];

    tabrR: InavItem[] = [{
      name: '消息',
      link: '',
    }, {
      name: '简历',
      link: '',
    }, {
      name: '投递箱',
      link: '',
    }, {
      name: '收藏夹',
      link: '',
    }, {
      name: '用户名',
      link: '',
    }, {
      name: '进入企业版',
      link: '',
    }]
  }
</script>

<style lang="scss" scoped>
  .navbar-wrapper {
    width: 100vw;
    height: 40px;
    background-color: $navBg;

    .inner {
      position: relative;
      max-width: $maxWidth;
      margin: 0 auto;
      color: $navBtnColor;

      .logo {
        width: 43px;
        height: 21px;
        float: left;
        margin-top: 9px;
        background-image: url('../../../src/assets/logo.png');
        background-repeat: no-repeat;
        background-position: -10px -10px;
        background-size: 64px 128px;
        display: block;
        padding-left: 0;
      }

      .lg_tbar_l {
        float: left;
      }

      .lg_tbar_m {
        float: left;
        overflow: hidden;
        margin-left: 34px;

      }

      .lo_tbar_r {
        float: right;
      }

      li {
        line-height: 40px;
        float: left;
        text-align: center;

        a {
          position: relative;
          font-size: 14px;
          /*color: #afb5c0;*/
          padding: 0 21px;
          height: 100%;
          display: block;
          text-align: center;
        }
      }
    }
  }
</style>
