<style lang='stylus' scoped>
    .albumPage{
        position: fixed;
        top:0;
        left:0;
        background:#fff;
        z-index:99;
        width:100%;
        height:100%;
        .header{
            height: 280px;
            header{
                position: relative;
                color:#fff;
                height: 50px;
                line-height: 50px;
                text-align: center;
                span.icon-houtui1{
                    position: absolute;
                    top:0px;
                    left:0px;
                    width: 50px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    font-size: 26px;
                    color:#111;
                }
            }
            .content{
                padding:5%;
                overflow:hidden;
                .albumImg{
                    width: 35%;
                    float: left;
                    img{
                        width: 100%;
                    }
                }
                .albumDetail{
                    width: 65%;
                    float: left;
                    padding-left:3%;
                    box-sizing:border-box;
                    color:#fff;
                    p.albumTitle{
                        height: 30px;
                        line-height: 30px;
                        margin:5px 0;
                    }
                    p.singer{
                        height: 30px;
                        img{
                            width: 30px;
                            border-radius:50%;
                            float: left;
                            margin-right:10px;
                            border: 1px solid #fff;
                        }
                        span{
                            float: left;
                            line-height: 30px;
                        }
                    }
                }
            }
            .setting{
                overflow:hidden;
                margin-top: 10px;
                li{
                    float: left;
                    height: 50px;
                    line-height: 50px;
                    width: 25%;
                    text-align: center;
                    font-size: 36px;
                    color:#fff;
                }
            }
        }
        .albumlist{
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
    <div v-if="album.isShowAlum" class="albumPage">
        <div class="header" :style="{background:`url(${album.album.albumbg}) 0 0/ 100% 100% no-repeat`}">
            <header>
                <span class="iconfont icon-houtui1" @click="hideAlbum"></span>
            </header>
            <div class="content">
                <div class="albumImg">
                    <img :src="album.album.albumImg" alt="" />
                </div>
                <div class="albumDetail">
                    <p class="albumTitle">专辑：{{album.album.albumTitle}}</p>
                    <p class="singer">
                        <img :src="album.album.albumImg" alt="" />
                        <span>歌手：{{album.album.albumSinger}}</span>
                    </p>
                </div>
            </div>
            <ul class="setting">
                <li class="iconfont icon-addfile"></li>
                <li class="iconfont icon-BAI-pinglun"></li>
                <li class="iconfont icon-fenxiang1"></li>
                <li class="iconfont icon-icon--"></li>
            </ul>
        </div>
        <div class="albumlist">
            <ul>
                <li
                    v-for="(item,index) in album.album.albumList"
                    @click="playAudio(album.album.albumList,index)"
                    :class="{cur: index == $store.state.audio.index && albumIndex == $store.state.audio.albumIndex}"
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
    export default {
        props: ["album"],
        data(){
            return {

            }
        },
        updated(){

        },
        computed:{
            albumIndex(){
                // 获取正在播放的是哪一个专辑
                return this.$store.state.albumList.index
            }
        },
        methods:{
            hideAlbum(){
                this.$store.commit("HIDEALBUM");
            },
            // 显示播放器的参数值
            playAudio(playlist,index){
                this.$store.commit("SHOWPLAYER",{
                    // 显示播放器的页面
                    isShowAudio:true,
                    // 播放歌曲所在的类表
                    album:playlist,
                    // 播放歌曲的下标
                    index,
                    // 播放的专辑
                    albumIndex:this.albumIndex,
                    // 播放器的背景图
                    playerbg:this.album.album.playerbg,
                    // cd上的图片
                    playerCdImg:this.album.album.albumImg
                })
            }
        }
    }
</script>