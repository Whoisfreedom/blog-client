<template>
  <div class='dashboard-body'>
    <ul>
      <li class="article-item" v-for="item in articleList" :key="item.articleId">
        <h4>{{item.title}}</h4>
        <p>
          {{item.intruduce}}
        </p>
        <div class="article-footer">
          <div>{{item.typedesc}}</div>
          <div>{{item.createTime}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import {getList} from '@/api/article'
export default {
  data(){
    return {
      articleList: []
    }
  },
  created() {
    this.query()
  },
  methods: {
    query() {
      const params = {
        pageIndex: 1,
        pageSize: 10,
        title:'',
      }
      getList(params).then(res => {
        this.articleList = res.data.list
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style>
  .dashboard-body{
    
  }
  .article-item {
    width: 80%;
    height: 120px;
    background-color: #fff;
    margin: 20px auto;
    text-align: left;
    padding: 10px;
    border-radius: 10px;
    box-sizing: border-box;
    position: relative;
  }
  .article-item h4 {
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid #dcdfe6;
    padding-bottom: 10px;
  }
  .article-item p {
    line-height: 24px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    margin: 5px 0;
  }
  .article-footer {
    display: flex;
    justify-content:space-between;
    position: absolute;
    bottom: 10px;
    width: calc(100% - 20px);
  }
</style>


