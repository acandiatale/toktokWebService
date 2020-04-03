<template>
    <div id="wrap">
        <div id="mainWrap">
            <b-carousel :autoplay="false" animated="fade" interval="4000" :indicator="false" :indicator-inside="false" :has-drag="false"
            :pause-hover="false" :pause-info="false" :arrow="false" :arrow-hover="false" id="bgItems">
                <b-carousel-item v-for="i in 3" :key="i" id="bgItems">
                <span class="image">
                <img :src="getImgUrl(i)" id="bgItem">
                </span>
                <div class="inner">
                    <img src="../assets/mvis_txt.png" id="innerImage">
                </div>
            </b-carousel-item>
            </b-carousel>
        </div>
        <section id="shortcut">
            <div id="mboard">
                <strong id="board">
                    <img src="../assets/mbd_tit.jpg">
                </strong>
                <ul>
                    <li>
                        {{fbw}}
                    </li>
                </ul>
                <div id="more">
                    <img src="../assets/mbd_more.png">
                </div>
            </div>
            <div id="mboard_content">
                <div id="con1" class="content1" @click="introduction" @mouseenter="changebtn1(true)" @mouseleave="changebtn1(false)">
                    <img src="../assets/mbn1_bg.jpg">
                    <i><img src="../assets/mbn1_icon.png"></i>
                    <dl>
                        <dt>톡톡경희한의원 소개</dt>
                        <dd>ORIENTAL MEDICAL CLINIC</dd>
                        <dd><span id="view_btn1">view more</span></dd>
                    </dl>
                </div>
                <div id="con2" class="content1" @mouseenter="changebtn2(true)" @mouseleave="changebtn2(false)">
                    <img src="../assets/mbn2_bg.jpg">
                    <i><img src="../assets/mbn2_icon.png"></i>
                    <dl>
                        <dt>원장님 소개</dt>
                        <dd>INTRODUCTION</dd>
                        <dd><span id="view_btn2">view more</span></dd>
                    </dl>
                </div>
                <section id="content2">
                    <div id="top">
                        <div id="top1" class="top">
                            <i><img src="../assets/mbn3_icon.png"></i>
                            <dl>
                                <dt>진료안내</dt>
                                <dd>GUIDE</dd>
                            </dl>
                        </div>
                        <div id="top2" class="top">
                            <i><img src="../assets/mbn4_icon.png"></i>
                            <dl>
                                <dt>오시는길</dt>
                                <dd>LOCATION</dd>
                            </dl>
                        </div>
                    </div>
                    <div id="bottom">
                        <dl>
                            <dt>CUSTOMER CENTER</dt>
                            <dd>031.767.0075</dd>
                        <p>
                            <span>진료시간</span>
                            <br>
                            "평일 : AM9시 - PM8시 I 토요일 : AM9시 - PM2시"
                            <br>
                            "공휴일 : AM9시 - PM1시(추석, 설, 신정 연휴만 휴무)"
                        </p>
                        </dl>
                    </div>
                </section>
            </div>
        </section>
        <footer>
            <div id="footer_logo">
            </div>
            <div id="footer_addr">
            </div>
            <div id="footer_sns">
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    data(){
        return{
            fbw: "갑작스런 목통증 해결방법",
        }
    },
    methods: {
        getImgUrl: function(value){
            return require(`../assets/mvis_img0${value}.jpg`);
        },
        introduction: function() {
            this.$router.push('/introduction');
        },
        changebtn1: function(boolean){
            if(boolean){
                document.getElementById("view_btn1").style.background = "#ff6400";
            }else{
                document.getElementById("view_btn1").style.background = "#222";
            }
        },
        changebtn2: function(boolean){
            if(boolean){
                document.getElementById("view_btn2").style.background = "#ff6400";
            }else{
                document.getElementById("view_btn2").style.background = "#222";
            }
        }
    },
}
</script>
<style scoped>
#Wrap{
    z-index: 3;
    position: absolute;
    top:0;
    right:0;
    width: 100%;
    height: 100%;
    /* display: block; */
    /* overflow: hidden; */
}
#mainWrap{
    z-index: -1;
    position: absolute;
    top:0;
    right:0;
    height: 100%;
    width: 100%; 
}
#bgItems{
    position: fixed;
    width: 1800px;
    right: 0;
    top: 0;
    display: block;
    overflow: hidden;
    /* margin-left: -300px; */
    height: 100%;
}
.inner{
    /* margin: 0; */
    position: fixed;
    left: 4%;
    top: 11%;
    width: 30%;
    max-width: 340px;
    margin-left: 21%;
}
.inner .innerImage{
    margin: 0;
    width: 90%;
    height: auto;
}
#shortcut{
    position: absolute;
    background-color: white;
    right: 0;
    bottom:100px;
    width: 60%;
    max-width:780px;
    max-height: 282px;
    /* max-height: 280px;
    height: 100%; */
    margin-bottom: -0.8%;
    display: flex;
    flex-direction: column;
}
#mboard{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 48px;
}
#mboard ul{
    background-color: white;
    float: left;
    width: 70%;
    line-height: 48px;
    padding: 0;
}
#mboard ul li{
    padding-left: 20px;
}
#board{
    display: block;
    float: left;
    width: 54px;
    height: 100%;
}
#more{
    position: absolute;
    top: 0;
    right: 0;
    width: 48px;
    height: 48px;;
}
#more img{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    width: 22px;
    height: 22px;
}
#mboard_content{
    width: 100%;
    /* height: 30%; */
    display: flex;
    flex-direction: row;
}
.content1{
    flex: 3;
    cursor: pointer;
    position: relative;
    
}
.content1 img{
    height: auto;
}
#con1 i{
    position: absolute;
    width: 15%;
    top: 35%;
    left: 10%;
}
#con1 i img{
    width: 100%;
    height: auto;
}
dl{
    margin: 0;
    padding: 0;
    border: 0;
    position: absolute;
    top: 50%;
    left: 10%;
}
dl dt{
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    margin-bottom: -2%;
}
dl dd{
    font-size: 13px;
    font-weight: 400;
    color: #fff;
}
#con2 i{
    position: absolute;
    width: 15%;
    top: 35%;
    left: 10%;
}
#con2 i img{
    width: 100%;
    height: auto;
}
#con2 dl dt{
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    margin-bottom: -4%;
}
#view_btn1{
    display: inline-block;
    padding: 2px 18px;
    border: none;
    background: #222;
    border-radius: 20px;
    margin-top: 10px;
    color: #fff;
    font-size: 8px;
    font-weight: 300;
    transition: 1s;
}
#view_btn2{
    display: inline-block;
    padding: 2px 18px;
    border: none;
    background: #222;
    border-radius: 20px;
    margin-top: 10px;
    color: #fff;
    font-size: 8px;
    font-weight: 300;
    transition: 1s;
}
#content2{
    flex:4;
    display: flex;
    flex-direction: column;
}
#top{
    position:relative;
    display: flex;
    flex-direction: row;
    flex: 1;
}
#top dl{
    top:10%
}
#top dl dt{
    font-size: 15px;
}
#top i{
    position: absolute;
    width: 20%;
    bottom: 10%;
    right: 10%;
}
#top img{
    width: 100%;
    height: auto;
}
#top1{
    position:relative;
    background-color: #ff6400;
    background-size: cover;
    display: flex;
    /* height: 100%; */
    width: 15%;
    flex:1;   
}
#top2{
    position:relative;
    background-color: #424242;
    background-size: cover;
    display: flex;    
    /* height: 100%; */
    flex:1
}
#top2 dl dt{
    margin-bottom: -4%;
}

#bottom{
    background-color: white;
    background-size: cover;
    /* height: 100%; */
    flex: 1;
    position: relative;
    align-content: center;
    text-align: center;
    margin:0;
    padding: 0;
}
#bottom dl{
    top: 2%;
    left: 4%;
    /* padding: 10%; */
    align-content: center;
}
#bottom dl dt{
    font-size: 11px;
    color:black;
    font-weight: 400;
}
#bottom dl dd{
    margin-top: -3%;
    font-size: 21px;
    color: #ff6400;
    font-weight: 800;
}
#bottom p{
    color: #888888;
    font-size: 12px;
    font-weight: 500;
    margin-top: -2%;
}
#bottom span{
    font-weight: 500;
    font-size: 13px;
    color: black;
}
footer{
    display: table;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100px;
    background: #272727;
    vertical-align: middle;
}
@media screen and (max-width: 1300px){
    #shorcut{
        margin-bottom: -0.8%;
    }
    #bottom dl{
        top: 8%;
        left: 6%;
    }
    #bottom dl dt{
        font-size: 10px;
    }
    #bottom dl dd{
        margin-top: -3%;
        font-size: 19px;
    }
    #bottom p{
        font-size: 11px;
        margin-top: -2%;
    }
    #bottom span{
        font-weight: 500;
        font-size: 12px;
    }
}
@media screen and (max-width: 1170px){
    /* #top{
        flex:1
    }
    #bottom{
        flex: 1.3;
    } */
    dl{
        top: 53%;
    }
    dl dt{
        font-size: 15px;
        font-weight: 500;
        color: #fff;
        margin-bottom: -2%;
    }
    dl dd{
        font-size: 10px;
        font-weight: 400;
        color: #fff;
    }
    #con2 dl dt{
        font-size: 15px;
        font-weight: 500;
        color: #fff;
        margin-bottom: -4%;
    }
}

@media screen and (max-width: 1020px) {
    #wrap{
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    #mainWrap{
        z-index: 10;
        position: relative;
        display:flex;
        flex: 2;
        height: 100%;
        width: 100%;
    }
    #bgItems{
        position: relative;
        width: 100%;
        display: flex;
        overflow: hidden;
        margin-left:0;
        height: 100%;
    }
    #shortcut{
        position: relative;
        background-color: white;
        z-index: 1;
        width: 100%;
        max-width: 100%;
        max-height: 100%;
        top:0;
        left:0;
        display: flex;
        flex: 12;
    }
    .inner{
        margin-left: 0;
        height: auto;
    }
    footer{
        position: static;
        height: 100px;
        flex: 5;
        display: block;
    }
}
</style>