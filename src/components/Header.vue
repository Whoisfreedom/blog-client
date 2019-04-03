<template>
  <div class="blog-header">
    <img class="header-icon" :src="iconUrl" alt="">
    <div class="header-word">
      <h4>whoisfreedom</h4>
      <p>行到水穷处，坐看云起时！</p>
    </div>
  </div>
</template>
<script>
import iconUrl from '../assets/headerIcon.jpg'
export default {
  data() {
    return {
      iconUrl: iconUrl
    }
  }
}
</script>
<style>
  .blog-header {
    background-color: #446cb3;
    height: 160px;
    width: 100%;
    position: relative;
  }
  .header-icon {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    position: absolute;
    left: 50px;
    top: 90px;
    z-index: 100;
    box-shadow: -2px 2px 1px 1px gray;
  }
  .header-word {
    color: #fff;
    text-align: left;
    padding-left: 300px;
    padding-top: 30px;
  }
  .header-word h4 {
    font-size: 36px;
    margin: 10px 0;
  }
  .header-word p {
    line-height: 20px;
    margin-top: 10px;
  }
</style>


