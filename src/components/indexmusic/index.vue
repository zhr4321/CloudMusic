<style lang='stylus' scoped>
    .indexmusic{
         overflow-y:scroll;
        h3{
            font-weight:normal;
            font-size: 18px;
            height: 40px;
            line-height: 40px;
            &::before{
                content: "|";
                color:#c00;
                font-size: 24px;
                margin:0px 6px;
                float: left;
                font-weight: bold;
            }
        }
        .album{
            ul{
                overflow:hidden;
                li{
                    float: left;
                    width: 33.3333%;
                    text-align: center;
                    img{
                        width: 96%;
                        display:block;
                        padding:4%;
                        box-shadow:0px 0px 5px rgba(0, 0, 0,0.3);
                        box-sizing:border-box;
                    }
                }
            }
        }
        .recommend{
            ul{
                li{
                    overflow:hidden;
                    padding-top:5px;
                    .index{
                        width: 50px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        float: left;
                    }
                    div{
                        float: left;
                        p{
                            height: 25px;
                            line-height: 25px;
                            &:nth-child(1){
                                font-size: 16px;
                                color:#333;
                            }
                            &:nth-child(2){
                                font-size: 14px;
                                color:#888;
                            }
                        }
                    }
                    .icon-laba{
                        width: 50px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        float: right;
                        font-size: 28px;
                    }
                    &.cur{
                        color:red;
                        div{
                            p{
                                color:red;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="indexmusic">
        <VueSwiper :swiperArr ="swiperArr"></VueSwiper>
        <!-- 专辑 -->
        <div class="album">
            <h3>推荐专辑</h3>
            <ul>
                <li v-for="(item,index) in album"
                    :key="index"
                    @click = "showAlbum(item,index)"
                >
                    <img :src="item.albumImg" />
                    <p>{{item.albumTitle}}</p>
                </li>
            </ul>
        </div>
        <div class="recommend">
            <h3>热歌列表</h3>
            <ul>
                <li
                    v-for= "(item,index) in recommend"
                    :key="index"
                    @click="playRecommend(recommend,index)"
                    :class="{cur:index == $store.state.audio.index && $store.state.audio.albumIndex == null}"
                    >
                    <span class="index">{{index+1}}</span>
                    <div>
                        <p>{{item.musicName}}</p>
                        <p>{{item.musicSinger}}</p>
                    </div>
                    <span class="iconfont icon-laba"></span>
                </li>
            </ul>
        </div>
    </div>

</template>
<script>
    import VueSwiper from "../../components/plugins/VueSwiper.vue";
    export default {
        data(){
            return {
                // 轮播图的图片
                swiperArr:[
                    {
                        "imgSrc":"http://p1.music.126.net/ELhgp9z9MvA6ffTVxZTS0g==/109951163517819307.jpg",
                        "href":"https://music.163.com/mv?id=10769027"
                    },
                    {
                        "imgSrc":"http://p1.music.126.net/CEznnRcRcLpen07YSbMD3g==/109951163517815037.jpg",
                        "href":"http://music.163.com/m/at/5b7fc9ea04e590b2b58212b8"
                    },
                    {
                        "imgSrc":"http://p1.music.126.net/3ovn332Vy0MsvA3Q8kWvOw==/109951163515911854.jpg",
                        "href":"https://music.163.com/store/newalbum/detail?id=72645619"
                    },
                    {
                        "imgSrc":"http://p1.music.126.net/3SDM63zl5TUuJu6FBwXmWg==/109951163518304299.jpg",
                        "href":"https://music.163.com/album?id=72302940"
                    }
                ]
            }
        },
        components:{
            VueSwiper
        },
        created(){
            this.$store.dispatch("GETAll");
        },
        computed:{
            album(){
                // 得到专辑列表
                return this.$store.state.mapList.album;
            },
            recommend(){
                // 得到热歌列表
                return this.$store.state.mapList.recommend;
            }
        },
        methods:{
            showAlbum(item,index){
                // 点击专辑图片的时候，需要知道是第几个专辑，和该专辑的列表
                this.$store.commit("ChANGEALBUM",{
                    // 可见性
                    isShowAlum:true,
                    // 专辑类表
                    album:item,
                    // 专辑的序号
                    index
                })
            },
            playRecommend(recommend,index){
                this.$store.commit("SHOWPLAYER",{
                    isShowAudio:true,
                    album:recommend,
                    index,
                    // 这里从 推荐专辑点入的时候是 专辑的索引值 0、1、2 ... ,从热歌类表点入时候是null。
                    albumIndex:null,
                    playerbg:recommend[index].playerbg,
                    playerCdImg:recommend[index].singerImg
                })
            }
        }
    }
</script>