import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from "vuex";
Vue.use(Vuex);
// 做异步的插件
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
// 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
// 数据
const store = new Vuex.Store({
    state:{
        mapList:{},
        // 专辑的管理数据
        albumList:{
            isShowAlum:false,
            album:{},
            index:null
        },
        // 播放器的管理数据
        audio:{
            isShowAudio:false,
            album:[],
            index:null,
            // 这里从 推荐专辑点入的时候是 专辑的索引值 0、1、2 ... ,从热歌类表点入时候是null。
            albumIndex:null,
            playerbg:null,
            playerCdImg:null
        }

    },
    mutations:{
        GETAll(state,payload){
           state.mapList = payload.mapList;
        },
        ChANGEALBUM(state,payload){
            state.albumList.isShowAlum = payload.isShowAlum;
            state.albumList.album = payload.album;
            state.albumList.index = payload.index;
        },
        HIDEALBUM(state){
            state.albumList.isShowAlum = false;
        },
        SHOWPLAYER(state,payload){
            // 显示播放器的页面
            state.audio.isShowAudio = payload.isShowAudio;
            // 播放歌曲所在的类表
            state.audio.album = payload.album;
            // 播放歌曲的下标
            state.audio.index = payload.index;
            // 播放的专辑
            state.audio.albumIndex = payload.albumIndex,
            // 播放器的背景图
            state.audio.playerbg = payload.playerbg;
            // cd上的图片
            state.audio.playerCdImg = payload.playerCdImg;
        },
        HIDEPLAYER(state){

            state.audio.isShowAudio =  !state.audio.isShowAudio;
        },
        CHANGEMUSIC(state,payload){
            // 播放歌曲的下标
            state.audio.index = payload.index;
            // 播放器的背景图
            state.audio.playerbg = payload.playerbg;
            // cd上的图片
            state.audio.playerCdImg = payload.playerCdImg;
        }
    },
    actions:{
        GETAll({commit}){
            Vue.axios.get("../static/data.json").then(res=>{
                commit("GETAll",res.data);
            })
        }
    }
})
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
