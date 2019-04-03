<template>
  <div class="blog-menu">
    <ul>
      <router-link class="menu-li" to="dashboard" tag="li">首页</router-link>
      <router-link class="menu-li" v-for="item in typeList"
      :key='item.code' :to="item.code" tag="li">{{item.label}}</router-link>
    </ul>
  </div>
</template>
<script>
import { getCodeList } from '@/api/article'
export default {
  data() {
    return {
      typeList: []
    }
  },
  created() {
    getCodeList().then(res=>{
      this.typeList = res.data.data
    }).catch(err=>{
      console.log(err)
    })
  },
  methods: {
    
  }
}
</script>
<style>
  .blog-menu {
    width: 250px;
    height: calc(100% - 160px);
    background-color: #fff;
    position: absolute;
    left: 0;
    padding-top: 90px;
    box-sizing: border-box;
    text-align: center;
  }
  .blog-menu > ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .menu-li {
    height: 50px;
    width: 100%;
    line-height: 50px;
    cursor: pointer;
  }
  .menu-li:hover {
    background-color: #446cb3;
    color:#fff;
  }
  .menu-li.router-link-active {
    background-color: #446cb3;
    color:#fff;
  }
</style>


