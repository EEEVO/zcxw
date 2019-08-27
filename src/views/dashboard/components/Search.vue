<template>
  <div class="search-wrapper">
    <div class="search-label">
      <search-label></search-label>
    </div>
    <div class="search-chunk clearfix">
      <input autocomplete="off" id="search_input" placeholder="搜索职位或公司" type="text" v-model="searchValue"></input>
      <input @click="searchHandle" id="search_button" type="submit" value="搜索">
    </div>
    <div class="search-hot">
      <span>热门搜索:</span>
      <span class="search-hot-label" v-for="item of hotLableArr">{{item.name}}</span>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import SearchLabel from '@/components/SearchLabel/index.vue'

  // TODO:实际结构根据后端返回格式来，尽量保证一致，确保代码可读性
  interface InavItem {
    name: string,   //名称
    link: string,   //路由地址
  }

  @Component({
    name: 'Search',
    components: {
      SearchLabel
    }
  })
  export default class extends Vue {
    // 热门搜索标签
    hotLableArr: InavItem[] = [
      {
        name: '应届生',
        link: '',
      },
      {
        name: '普工',
        link: '',
      },
      {
        name: '五险一金',
        link: '',
      },
    ];
    private searchValue: string = '';

    // 搜索按钮点击事件
    searchHandle() {
      console.log(this.searchValue)
    }
  }
</script>

<style lang="scss" scoped>
  .search-wrapper {
    width: 100%;
    color: $navBtnColor;
    padding: 35px 110px 24px 110px;

    .search-chunk {
      margin: 20px 0;
      width: 940px;

      #search_input {
        width: 762px;
        height: 46px;
        line-height: 20px;
        float: left;
        font-size: 16px;
        padding: 12px 16px;
        margin: 0;
        border: 1px solid #E8E8E8;
        border-right: 0;

        &:focus {
          border: 1px solid $btnBg;
          border-right: 0;
        }
      }

      #search_button {
        float: left;
        width: 142px;
        height: 46px;
        font-size: 18px;
        color: $white;
        border: 0;
        background: $btnBg;
        cursor: pointer;
        text-align: center;

        &:hover {
          background: #00a57f;
        }

        &:focus {
          outline-offset: 0;
        }
      }
    }

    .search-hot {
      .search-hot-label {
        color: $blue;
        margin-left: 10px;
        cursor: pointer;
        font-size: 14px;
      }
    }
  }
</style>
