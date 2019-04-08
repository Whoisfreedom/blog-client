<template>
  <div class='dashboard-body'>
    <ul>
      <li class="article-item" @click="goDetail(item)" v-for="item in articleList" :key="item.articleId">
        <h4>{{item.title}}</h4>
        <p>
          {{item.intruduce}}
        </p>
        <div class="article-footer">
          <div>{{item.typedesc}}</div>
          <div>{{item.createTime}}</div>
        </div>
      </li>
      <div class="footer-btn">
        <button @click="pageBefore" v-if="pageIndex>1">上一页</button>
        <span v-else> </span>
        <div>
          <span>{{pageIndex}}</span>
          <span>/</span>
          <span>{{total}}</span>
        </div>
        <button @click="pageNext" v-if="pageIndex<total">下一页</button>
        <span v-else> </span>
      </div>
      
    </ul>
  </div>
</template>
<script>
import {getList} from '@/api/article'
export default {
  data(){
    return {
      articleList: [],
      pageIndex: 1,
      total: 0,
    }
  },
  created() {
    this.query()
  },
  methods: {
    query() {
      const params = {
        pageIndex: this.pageIndex,
        pageSize: 10,
        title:'',
        type: this.$route.name,
      }
      getList(params).then(res => {
        this.articleList = res.data.list
        this.total = Math.ceil(res.data.total/10)
      }).catch(() => {
      })
    },
    pageBefore() {
      this.pageIndex--;
      this.query()
    },
    pageNext() {
      this.pageIndex++;
      this.query()
    },
    goDetail(item) {
      this.$router.push({name:'articleDetail',query:{articleId:item.articleId}})
    }
  }
}
</script>
<style>
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
    cursor: pointer;
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
  .footer-btn {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer-btn button {
    background-color: cornflowerblue;
    color: #fff;
    display: inline-block;
    height: 30px;
    border: 1px transparent solid;
    cursor: pointer;
    border-radius: 5px;
  }
</style>


