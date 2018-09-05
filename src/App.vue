<style scoped lang='stylus'>
  header{
    position: relative;
    color:#fff;
    .icon-caidan,.icon-zhuanjiguangpan{
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-size: 26px;
      position: absolute;
      text-align: center;
      top:0;
      left:0px;
    }
    .icon-zhuanjiguangpan{
      left:auto;
      right:0;
    }
    .header{
      height: 50px;
      line-height: 50px;
      background:#C20C0C;
      ul{
        width: 70%;
        margin:0 auto;
        overflow:hidden;
        li{
          font-size: 26px;
          width: 33.3333%;
          float: left;
          text-align: center;
          &.cur{
            background:#600;
          }

        }
      }
    }
  }
  .abcd-enter-active{
    transition: all 0.5s ease;
  }
  .abcd-leave-active{
    display: none;
    transition: all 0.5s ease;
  }
  .abcd-enter,.abcd-leave-to{
    transform: translateX(300px);
  }
</style>
<template>
  <div id="app">
    <header>
        <span class="iconfont icon-caidan"></span>
        <div class="header">
            <ul>
                <li
                    class="iconfont"
                    v-for="item in tabNav"
                    :class="[item.fontClass,{cur:$route.name == item.fontClass}]"
                    @click="routerGo(item.url)"
                ></li>
            </ul>
        </div>
        <span class="iconfont icon-zhuanjiguangpan" @click="showPlayer"></span>
    </header>
    <!-- 三个路由 -->
    <transition name="abcd">
        <router-view/>
    </transition>
    <!-- 专辑列表的组件 -->
    <transition name="abcd">
        <Album :album="album"></Album>
    </transition>
    <!-- 播放器的组件 -->
    <transition name="abcd">
        <Audio :audio="audio" v-show="audio.isShowAudio"></Audio>
    </transition>
  </div>
</template>

<script>
import Album from "./components/plugins/Album.vue";
import Audio from "./components/plugins/Audio.vue";
export default {
  name: 'App',
  data(){
    return {
        tabNav:[
            {
                fontClass:"icon-music",
                url:"/indexmusic"
            },
            {
                fontClass:"icon-wangyiyunyinlezizhi-copy",
                url:"/faxianmusic"
            },
            {
                fontClass:"icon-diantai",
                url:"/radiomusic"
            }
        ]
    }
  },
  methods:{
    routerGo(url){
        // vue 跳转路由
        this.$router.push({
            path:url
        })
    },
    showPlayer(){
      this.$store.commit("HIDEPLAYER")
    }
  },
  computed:{
    album(){
        return this.$store.state.albumList
    },
    audio(){
        return this.$store.state.audio
    }
  },
  components:{
    Album,
    Audio
  }
}
</script>
