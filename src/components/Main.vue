<template>
    <div id="wrap">
        <div id="mainWrap">
            <div id="image" class="imgclass0">
            </div>
        </div>
        <div id="hoverimg">
        </div>
        <section id="shortcut">
           <section id="mboard" class="sc_con">
                <strong id="title_img"><img src="../assets/mbd_tit.jpg"></strong>
                <a>{{fbw}}</a>
                <img id="more" src="../assets/mbd_more.png">
           </section>
           <nav id="navi">
               <section id="top">
                    <div id="top1" class="sc_con" @mouseenter="changebtn1(true)" @mouseleave="changebtn1(false)">
                        <a class="con">
                            <img class="top_img" src="../assets/mbn1_icon.png">
                            <ul>
                            <li>톡톡 경희한의원 소개</li>
                            <li id="hospital">ORIENTAL MEDICAL CLINIC</li>
                            </ul>
                            <span class="view_more" id="view_btn1">view more</span>
                        </a>
                    </div>
                    <div id="top2" class="sc_con" @mouseenter="changebtn2(true)" @mouseleave="changebtn2(false)">
                        <a class="con">
                            <img class="top_img" src="../assets/mbn2_icon.png">
                            <ul>
                            <li>원장님 소개</li>
                            <li id="doctor">INTRODUCTION</li>
                            </ul>
                            <span class="view_more" id="view_btn2">view more</span>
                        </a>
                    </div>
               </section>
                <section id="bottom">
                    <section id="b_top">
                        <div id="b_top1" class="sc_con">
                            <a class="con">
                                <ul>
                                    <li class="b_li_top">진료안내</li>
                                    <li>GUIDE</li>
                                </ul>
                                <img class="b_top_img" src="../assets/mbn3_icon.png">
                            </a>
                        </div>
                        <div id="b_top2" class="sc_con">
                            <a class="con">
                                <ul>
                                    <li class="b_li_top">오시는길</li>
                                    <li>LOCATION</li>
                                </ul>
                                <img class="b_top_img" src="../assets/mbn4_icon.png">
                            </a>
                        </div>
                    </section>
                    <div id="b_bottom">
                        <ul id="b_ul">
                            <p id="cutomer_center">CUSTOMER CENTER</p>
                            <strong>031.767.0075</strong>
                            <p>진료시간</p>
                            <h2 id="time">
                                평일 : AM9시 - PM8시 I 토요일 : AM9시 - PM2시
                            </h2>
                            <h2 id="time">
                                공휴일 : AM9시 - PM1시(추석, 설, 신정 연휴만 휴무)
                            </h2>
                        </ul>
                    </div>
                </section>
           </nav>
        </section>
    </div>
</template>
<script>
import { setInterval } from 'timers';
export default {
    data(){
        return{
            fbw: "갑작스런 목통증 해결방법",
            imageUrls: [],
            position: 0,
            view1: false,
            view2: false,
        }
    },
    methods: {
        getImgUrl: function(value){
            return require(`../assets/mvis_img0${value}.jpg`);
        },
        imageUrl: function(){
            this.position = this.position + 1;
            if(this.position === 3){
                this.position = 0;
                console.log("interval" + this.position);
            }
            document.getElementById("image").className =  "imgclass"+ this.position;
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
        },
       
    },
    mounted: function () {
        this.$nextTick(function () {
            setInterval(() => {
                this.imageUrl()
            }, 4000);
        })
    }
}
</script>
<style scoped>
#wrap{
    z-index: 3;
    position: relative;
    top:0;
    right:0;
    width: 100%;
    height: 100%;
    /* display: block; */
    /* overflow: hidden; */
}
#mainWrap{
    z-index: 0;
    position: relative;
    /* top:0;
    right:0; */
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
    height: auto;
}
#hoverimg{
    background-image: url("../assets/mvis_txt.png");
    position: absolute;
    top: 10%;
    left: 10%;
    width: 40%;
    height: 30%;
    max-width: 469px;
    
    background-repeat: no-repeat;
    background-size: contain;
}
#image{
    background-repeat: no-repeat;
    background-size: cover;
    transition: 1s;
    position: absolute;
    width: 120%;
    height: 100%;
    right: 0;
}
#title_img{
    display: inline-block;
}
.imgclass0{
    background-image: url("../assets/mvis_img01.jpg");
}
.imgclass1{
    background-image: url("../assets/mvis_img02.jpg");
}
.imgclass2{
    background-image: url("../assets/mvis_img03.jpg");
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
    background: white;
    max-width: 780px;
    width: 70%;
    max-height: 282;
    position:absolute;
    right: 0;
    bottom: 100px;
}
#shortcut ul li{
    color: white;
    font-size: 18px;
    font-weight: 500;
}
#top1 a img, #top1 a ul, .view_more , #top2 a img, #top2 a ul{
    position: absolute !important;
}
#top1 a ul, #top2 a ul {
    top: 53%;
}
#top1 a ul li:not(:first-child), #top2 a ul li:not(:first-child){
    margin-top: -3%;
}
.top_img{
    top: 35%;
    width: 15% !important;
}
.view_more{
    font-size: 12px;
    color: white;
    background: #222;
    width: 80px;
    height: 20px;
    border-radius: 20px;
    text-align: center;
    line-height: 1.6;
    bottom: 13%;
    transition: 1s;
}
#hospital, #doctor{
    font-size: 13px !important;
    font-weight: 600 !important;
}
#navi{
    display:flex;
}
#navi a img{
    width: 25%;
}
#navi a{
    display: block;
    width:100%;
    height: 100%;
    padding: 10%;
}
#top{
    display:flex;
    flex-direction: row;
    flex:6;
}
#bottom{
    display:flex;
    flex-direction: column;
    flex:4;
}
#b_top{
    flex: 1;
    display:flex;
    flex-direction: row;
}
#b_bottom{
    flex:1;
}
#b_ul{
    text-align: center;
}
#b_ul li{
    font-size: 12px !important;
    color: #888 !important;
    font-weight: 200 !important;
}
#b_ul strong{
    font-size: 20px;
    color: #ff6201;
    margin-top: -2%;
    display:block;
}
#cutomer_center{
    font-size: 13px;
    color: #000;
    font-weight: 200;
}
#b_ul p:not(:first-child){
    margin-top: -2%;
    font-size: 12px !important;
    color: #000 !important;
    font-weight: 200 !important;
}
#time{
    color: #888888;
    font-size: 12px;
    word-break: break-all;
}
#mboard{
    position: relative;
    width: 100%;
    height: 48px;
}
#mboard a{
    color: #888;
    font-size: 14px;
    display: block;
    width: 40%;
    top: 27%;
    left: 12%;
    position: absolute;
}
#more{
    position: absolute;
    right: 5%;
    top: 25%;
}
#top1, #top2, #b_top1, #b_top2, #bottom{
    position: relative;
}

#top1{
    background: url("../assets/mbn1_bg.jpg");
    background-size: cover;
    flex:3;
}
#top2{
    background: url("../assets/mbn2_bg.jpg");
    background-size: cover;
    flex:3;
}
.b_top_img{
    position: relative;
    margin-left: 75%;
}
#b_top1 ul li, #b_top2 ul li {
    font-family: GmarketSansLight, sans-serif;
    font-size: 12px;
    font-weight: 500;
}
.b_li_top{
    font-size : 14px !important;
}
#b_top1{
    background: #ff6400;
    background-size: cover;
    flex:1;
}
#b_top2{
    flex:1;
    background: #424242;
    background-size: cover;
}

@media screen and (max-width: 1240px){
    #top1 a ul li, #top2 a ul li{
        font-size: 12px !important;
    }
    #b_ul p[data-v-54d3a52e] {
        font-size: 12px !important;
        color: #000 !important;
        font-weight: 200 !important;
    }
    #time{
        font-size: 11px;
    }
}
@media screen and (max-width: 1024px) {
    #wrap{
        display:flex;
        flex-direction: column;
    }
    #mainWrap{
        display:block;
        position:relative;
    }
    #shortcut{
        max-width: unset;
        width: 100%;
        display: block;
        position:relative;
        bottom: unset;
    }
    
}
 @font-face { 
    font-family: 'GmarketSansLight'; 
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff'); 
    font-weight: normal; 
    font-style: normal; }
</style>