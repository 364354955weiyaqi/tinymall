<template>
  <div id="home">
    <nav-bar class="nav-home"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
  </div>
</template>
<script>
  import NavBar from  'components/common/navbar/NavBar'
  import HomeSwiper from "./childcomponents/HomeSwiper"
  import {getHomeMutiData} from 'network/home'
  export default {
    name: "Home",
    components: {
      HomeSwiper,
      NavBar,
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      //请求多个数据
      getHomeMutiData().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .nav-home {
    background-color: var(--color-tint);
  }
</style>
