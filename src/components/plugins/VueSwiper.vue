<style lang='stylus' scoped>
    img{
        width:100%;
        display:block;
    }
</style>
<template>
    <swiper ref="mySwiper" :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in swiperArr" :key="index">
            <a :href="item.href"><img :src="item.imgSrc" /></a>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
</template>
<script>
    export default {
        props:["swiperArr"],
        data() {
          return {
            swiperOption: {
              pagination: {
                el: '.swiper-pagination'
              }
            }
          }
        }
    }
</script>