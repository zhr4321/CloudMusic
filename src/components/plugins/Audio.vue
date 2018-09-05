<style lang='stylus' scoped>
    .audioBox{
        position: fixed;
        top:0;
        left:0;
        background:#fff;
        z-index:99;
        width:100%;
        height:100%;
        header{
            width: 100%;
            height: 50px;
            position: relative;
            text-align: center;
            line-height: 50px;
            color:#fff;
            span{
                position: absolute;
                top:0px;
                left:0px;
                width: 50px;
                height: 50px;
                line-height: 50px;
                text-align: center;
                font-size: 26px;
            }
        }
        .content{
            padding-top: 60px;
            position: relative;
            overflow:hidden;
            .cd{
                width: 80%;
                margin:0 auto;
                position: relative;
                img{
                    width: 100%;
                }
                .singerbg{
                    position: absolute;
                    width: 60%;
                    border-radius:50%;
                    overflow:hidden;
                    top:50%;
                    left:50%;
                    transform:translate(-50%,-50%);
                    animation:donghua 8s linear infinite paused;
                    img{
                        display:block;
                    }
                }
                @-webkit-keyframes donghua{
                    from{
                        transform:translate(-50%,-50%) rotate(0deg);
                    }
                    to{
                        transform:translate(-50%,-50%) rotate(360deg);
                    }
                }
                .singerbg.cur{
                    animation-play-state:running;
                }
            }
            .switch{
                position: absolute;
                width: 110px;
                height: 157px;
                top: -20px;
                left: 60%;
                transform:translateX(-50%) rotate(-20deg);
                transform-origin:15px 15px;
                transition:all 1s ease 0s;
                img{
                    width: 100%;
                    display: block;
                }
                &.cur{
                    transform:translateX(-50%) rotate(0deg);
                }
            }
        }
        .lrcbox{
            overflow:hidden;
            height: 400px;
            ul{
                position: relative;
                transition:all 1s ease 0s;
                li{
                    text-align: center;
                    height: 26px;
                    line-height: 26px;
                    span.animationLyric_origin{
                        position: relative;
                        color:#fff;
                        height: 26px;
                        line-height: 26px;
                        display:inline-block;
                        span.animationLyric_current{
                            position: absolute;
                            top:0px;
                            left:0px;
                            display:inline-block;
                            overflow:hidden;
                            height: 26px;
                            white-space: nowrap;
                            line-height: 26px;
                            width: 0;
                            animation-play-state:paused;
                        }
                    }
                    &.cur{
                        span.animationLyric_current{
                            color:red;
                            animation:lyricdonghua 5s linear;
                            @-webkit-keyframes lyricdonghua{
                                from{
                                    width:0%;
                                }
                                to{
                                    width: 100%;
                                }
                            }
                        }
                    }
                }
            }
        }
        ul.setting{
            overflow:hidden;
            li{
                float: left;
                width: 25%;
                height: 50px;
                line-height: 50px;
                text-align: center;
                color:#fff;
                font-size: 38px;
                &:nth-child(1){
                    font-size: 30px;
                }
            }
        }
        .progressBar{
            overflow:hidden;
            padding:12px 3%;
            font-size: 14px;
            color:rgba(255,255,255,0.8);
            p{
                float: left;
            }
            p.start{
                width: 10%;
                height: 40px;
                line-height: 40px;
                text-align: right;
            }
            p.range{
                width: 80%;
                padding:0px 3%;
                box-sizing:border-box;
                margin:18px auto;
                span.duration{
                    width: 100%;
                    height: 2px;
                    background:rgba(255,255,255,0.5);
                    display: block;
                    position: relative;
                    span.currentTime{
                        width: 50%;
                        height: 2px;
                        background:#c00;
                        display:block;
                        position: absolute;
                        top:0px;
                        left:0px;
                    }
                }
            }
            p.end{
                width: 10%;
                height: 40px;
                line-height: 40px;
                text-align: left;
            }
        }
        .controller{
            height: 50px;
            line-height: 50px;
            color:rgba(255,255,255,0.5);
            position: relative;
            text-align: center;
            position: relative;
            top:10px;
            p{
                position: absolute;
                top:0;
            }
            p.playmodelbtn{
                color:#fff;
                font-size:  30px;
                left:3%;
            }
            p.playlistbtn{
                font-size:28px;
                right:3%;
                color:#fff;
            }
            ul{
                overflow:hidden;
                width: 70%;
                margin:0 auto;
                li{
                    width: 33.333%;
                    float: left;
                    font-size: 40px;
                }
                li.icon-pause-20,li.icon-bofang{
                    font-size: 52px;
                }
            }
        }
        .popwindow{
            width: 100%;
            height: 100%;
            position: fixed;
            top:0px;
            left:0px;
            background:rgba(0, 0, 0, 0.7);
            opacity: 0;
        }
        .popwindow.cur{
            opacity: 1;
            transition:all 0.8s ease 0s;
            z-index:1;
        }
        .playlist.cur{
            bottom:0;
            z-index: 2;
        }
        .playlist{
            position: absolute;
            width: 100%;
            height: 300px;
            background:#fff;
            bottom:-300px;
            transition:all 0.8s ease 0s;
            ul{
                height: 250px;
                overflow-y:scroll;
                li{
                    overflow:hidden;
                    span{
                        width:140px;
                        text-align: center;
                        font-size: 20px;
                        float: left;
                        line-height: 50px;
                        height: 50px;
                    }
                }
                li.cur{
                    color:#c00;
                }
            }
            footer{
                position: absolute;
                bottom:0px;
                height: 50px;
                width: 100%;
                text-align: center;
                border-top: 1px solid rgba(0, 0, 0, 0.1);
                span{
                    display: block;
                    height: 50px;
                    line-height: 50px;
                    font-size: 28px;
                }
            }
        }
    }
</style>
<template>
    <div class="audioBox" :style="{background:`skyblue url(${audio.playerbg}) 0 0/ 100% 100% no-repeat`}">
        <div class="popwindow" :class="{cur:isShowPlayList}"></div>
        <header>
            <span class="iconfont icon-houtui1" @click="goback"></span>
            {{typeof audio.index == 'number' ?  audio.album[audio.index].musicName : "播放器"}}
        </header>
            <span v-if="typeof audio.index == 'number'">
                <audio :src="audio.album[audio.index].musicUrl" autoplay @timeupdate="play"></audio>
            </span>
        <div class="content" v-if="!isShowlrc" @click="showlrc">
            <div class="cd">
                <img src="../../../static/img/cd.png" />
                <div class="singerbg">
                    <img :src="audio.playerCdImg" alt="" />
                </div>
            </div>
            <div class="switch">
                <img src="../../../static/img/swith.png" />
            </div>
        </div>
        <div class="lrcbox" v-if="isShowlrc" @click="showlrc">
            <ul>
                <li v-for="(item,index) in lrc" :class="{cur:
                    currentTime > lrc[index][0]
                    &&
                    currentTime + (lrc[index][0] -lrc[index+1 > lrc.length - 1 ? lrc.length - 1 : index + 1][0] ) < lrc[index][0]
                    }">
                <!--
                    当前的播放时间 > 当前歌词的时间时候

                    但是下一行不能超过 歌词的总条数 （index + 1 > lrc.length -1 ?  lrc.length -1  : index + 1）

                 -->
                    <span class="animationLyric_origin">
                        {{item[1]}}
                        <span class="animationLyric_current" :style="[{
                            'animation-duration': lrc[index+1 > lrc.length - 1 ? lrc.length - 1 : index + 1][0] - lrc[index][0] + 's'
                        },{
                        'animation-play-state':isPlay ? 'running' : 'paused'
                        }]">
                            {{item[1]}}
                        </span>
                    </span>
                </li>
            </ul>
        </div>
        <ul class="setting">
            <li class="iconfont icon-addfile"></li>
            <li class="iconfont icon-BAI-pinglun"></li>
            <li class="iconfont icon-fenxiang1"></li>
            <li class="iconfont icon-icon--"></li>
        </ul>
        <div class="progressBar">
            <p class="start">{{currentTime|zhuanhuan}}</p>
            <p class="range">
                <span class="duration" @click="gotoTime($event)">
                    <span class="currentTime" :style="{width:currentTime / duration * 100 + '%' }"></span>
                </span>
            </p>
            <p class="end">{{duration|zhuanhuan}}</p>
        </div>
        <div class="controller">
            <p class="iconfont playmodelbtn" :class="[{'icon-singlecycle': playmodel == 'once'},{'icon-xunhuan': playmodel == 'all'} , { 'icon-bofangye-caozuolan-suijibofang' : playmodel == 'random' }]" @click="changePlaymodel"></p>
            <ul>
                <li class="iconfont icon-previous" @click="goprev"></li>
                <li class="iconfont" @click="pause_play" :class="[ isPlay == true ? 'icon-pause-20' : 'icon-bofang']"></li>
                <li class="iconfont icon-next" @click="gonext"></li>
            </ul>
            <p class="playlistbtn iconfont icon-zhankaicaidan"  @click="showPlayList"></p>
        </div>

        <div class="playlist" :class="{cur:isShowPlayList}">
            <ul>
                <li v-for="(item,index) in audio.album" :class="{cur: index == audio.index }" @click="playList(index)">
                    <span class="iconfont" :class="{'icon-laba': index == audio.index}" :style="{fontSize: index != audio.index ? '14px' : '28px'}" >{{ index != audio.index ? index + 1 : ''}}</span>
                    <span>{{item.musicName}}</span>
                </li>
            </ul>
            <footer>
                <span class="iconfont icon-guanbi"  @click="showPlayList"></span>
            </footer>
        </div>
    </div>
</template>
<script>
    export default {
        props:["audio"],
        data(){
            return {
                duration:0,
                currentTime:0,
                playmodel:"all", // once,  random ,
                isPlay:true,
                isShowPlayList:false,
                isShowlrc:false,
                lrc:[]
            }
        },
        computed:{
            playerIndex(){
                return this.$store.state.audio.index;
            }
        },
        watch:{
            playerIndex(){
                this.isPlay = true;
                var self = this;
                this.$http.get(this.audio.album[this.playerIndex].musicLyric).then(res=>{
                    self.lrc = self.geshihua(res.data);
                })
            },
            // 当专辑的 索引值变化的时候， 用watch监听， 这个值必须加引号
            '$store.state.audio.albumIndex'(){
                 var self = this;
                this.$http.get(this.audio.album[this.playerIndex].musicLyric).then(res=>{
                    self.lrc = self.geshihua(res.data);
                })
            }
        },
        methods:{
            // 显示歌词
            showlrc(){
                this.isShowlrc = !this.isShowlrc;

                // 请求歌词
                var self = this;
                this.$http.get(this.audio.album[this.playerIndex].musicLyric).then(res=>{
                    self.lrc = self.geshihua(res.data);
                })

            },
            geshihua(lrc){
                var arr = [];
                // 将所有的 歌词段落放到一个数组里
                var lines = lrc.split(/\n/);
                // 得到时间
                var getlictime = /\[\d{2}:\d{2}.\d{2}\]/g;
                // while 是过滤没有 时间的歌词
                while(!getlictime.test(lines[0])){
                    lines = lines.splice(1)
                }
                //  去重最后没有歌词的数组
                if( lines[lines.length-1].length === 0){
                    lines.pop();
                }
                //  重新遍历歌词 【把时间个歌词分开】
                lines.forEach(item=>{
                    // 得到时间 和 歌词的分界点
                    var index = item.indexOf("]");
                    // 得到时间
                    var time = item.substr(1,index -1);
                    // 将单位为分的时间 变成 s
                    var timeArr = time.split(':');
                    // 得到歌词
                    var geci = item.substr(index+1);
                    arr.push([timeArr[0]*60 + parseFloat(timeArr[1]),geci])
                })
                return arr;
            },
            goback(){
                this.$store.commit("HIDEPLAYER")
            },
            play(){
                //当歌曲播放的时候就一直监听
                // http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp
                this.duration = document.querySelector("audio").duration;
                this.currentTime = document.querySelector("audio").currentTime;

                if( document.querySelector("audio").ended){
                    if( this.playmodel == "all"){
                        if( this.playerIndex >= this.audio.album.length -1 ){
                             this.changeMusic(0)
                        }else{
                             this.changeMusic(this.playerIndex + 1)
                        }
                    }else if( this.playmodel == "once" ){
                        this.changeMusic(this.playerIndex);
                        // load是重新加载
                        document.querySelector("audio").load();
                    }else if( this.playmodel == "random" ){
                        let index =  parseInt(Math.random() * this.audio.album.length);
                        this.changeMusic(index)
                    }
                };

                // 歌曲播放的时候，歌词同步的滚动
                for (var i = 0; i < this.lrc.length; i++) {
                    if( !this.isShowlrc ) return;
                    var lrcboxH = parseInt(getComputedStyle(document.querySelector(".lrcbox")).height);

                    if( this.currentTime > this.lrc[i][0]){
                        document.querySelector(".lrcbox ul").style.top = ( lrcboxH / 2 - 26 * i ) + "px";
                    }

                };
            },
            gotoTime(event){
                var durationW = parseInt(getComputedStyle(document.querySelector(".duration")).width);
                document.querySelector("audio").currentTime = (event.offsetX / durationW) * this.duration;
            },
            changePlaymodel(){
                if( this.playmodel == "all"){
                    this.playmodel = "once"
                }else if( this.playmodel == "once"){
                    this.playmodel = "random"
                }else if( this.playmodel == "random"){
                    this.playmodel = "all"
                }
            },
            pause_play(){
                this.isPlay = !this.isPlay;

                if( this.isPlay != true){
                    document.querySelector("audio").pause();
                }else{
                    document.querySelector("audio").play();
                }
            },
            gonext(){
                // 下一首歌
                if( this.playmodel == "random"){
                   let index =  parseInt(Math.random() * this.audio.album.length);

                   this.changeMusic(index)
                }else{
                   if( this.playerIndex >= this.audio.album.length -1 ){
                        this.changeMusic(0)
                   }else{
                        this.changeMusic(this.playerIndex + 1)
                   }
                }
            },
            goprev(){
                if( this.playerIndex <= 0){
                    return;
                }else{
                    this.changeMusic(this.playerIndex - 1)
                }
            },
            changeMusic(index){
                if( this.$store.state.audio.albumIndex  == null){
                    this.$store.commit("CHANGEMUSIC",{
                        index,
                        playerbg:this.audio.album[index].playerbg,
                        playerCdImg:this.audio.album[index].singerbg
                    })
                }else if( typeof this.$store.state.audio.albumIndex == 'number'){
                    this.$store.commit("CHANGEMUSIC",{
                        index,
                        playerbg:this.audio.playerbg,
                        playerCdImg:this.audio.playerCdImg
                    })
                }
            },
            showPlayList(){
                this.isShowPlayList = !this.isShowPlayList;
            },
            playList(index){
                this.changeMusic(index);
            }
        },
        filters:{
            zhuanhuan(s){
                var t;
                if(s > -1){

                    var min = Math.floor(s/60) % 60;
                    var sec = s % 60;

                    if(min < 10){t = "0";}
                    t += min + ":";
                    if(sec < 10){t += "0";}
                    t += sec.toFixed(0);
                }
                return t;
            }
        }
    }
</script>

