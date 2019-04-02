<template>
  <div class="blog-container">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  .blog-container {
    margin-left: 250px;
    height: calc(100% - 160px);
    overflow: auto;
    background-color:ghostwhite;
  }
</style>


