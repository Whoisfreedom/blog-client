<template>
  <div class="blog-articleDetail">
    <h3>{{data.title}}</h3>
    <div class="article-desc">
      <span>
        {{data.typedesc}}
      </span>
      <span>
        {{data.createTime}}
      </span>
    </div>
    <div class="article-body" v-html="data.text">

    </div>
  </div>
</template>
<script>
import {articleById} from '@/api/article'
export default {
  data() {
    return {
      data:{}
    }
  },
  created() {
    this.query()
  },
  methods: {
    query() {
      articleById({id:this.$route.query.articleId}).then(res=>{
        this.data = res.data.article
        console.log(res)
      }).catch(err=>{
        console.log(err)
      }) 
    }
  }
}
</script>
<style>
  .blog-articleDetail {
    width: 80%;
    margin: 20px auto;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 5px #f4f4f4;
    box-sizing: border-box;
    background-color: #fff;
  }
  .blog-articleDetail h3 {
    font-size: 30px;
    padding: 10px;
    text-align: center;
  }
  .blog-articleDetail .article-body{
    padding: 10px;
  }
  .article-desc {
    display: flex;
    justify-content:space-between;
    padding: 10px;
  }
</style>


