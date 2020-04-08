<template>
    <div id="wrap">
        <div id="mainWrap">
            <div id="image" class="imgclass0">
            </div>
        </div>
        <section id="shortcut">
           <section id="mboard" class="sc_con">
                <strong id="title_img"><img src="../assets/mbd_tit.jpg"></strong>
                <a>{{fbw}}</a>
                <img src="../assets/mbd_more.png">
           </section>
           <nav id="navi">
               <section id="top">
                    <div id="top1" class="sc_con">
                        <a class="con">
                            <img src="../assets/mbn1_icon.png">
                            <ul>
                            <li>톡톡 경희한의원 소개</li>
                            <li>ORIENTAL MEDICAL CLINIC</li>
                            </ul>
                        </a>
                    </div>
                    <div id="top2" class="sc_con">
                        <a class="con">
                            <img src="../assets/mbn2_icon.png">
                            <ul>
                            <li>원장님 소개</li>
                            <li>INTRODUCTION</li>
                            </ul>
                        </a>
                    </div>
               </section>
                <section id="bottom">
                    <section id="b_top">
                        <div id="b_top1" class="sc_con">
                            <a class="con">
                                <img src="../assets/mbn3_icon.png">
                                <ul>
                                    <li>진료안내</li>
                                    <li>GUIDE</li>
                                </ul>
                            </a>
                        </div>
                        <div id="b_top2" class="sc_con">
                            <a class="con">
                                <img src="../assets/mbn4_icon.png">
                                <ul>
                                    <li>오시는길</li>
                                    <li>LOCATION</li>
                                </ul>
                            </a>
                        </div>
                    </section>
                    <div id="b_bottom" class="sc_con">
                        <a class="con">
                        <ul>
                            <li>CUSTOMER CENTER</li>
                            <li>031.767.0075</li>
                            <li>진료시간</li>
                            <!-- <p>
                                평일 : AM9시 - PM8시 I 토요일 : AM9시 - PM2시
                                공휴일 : AM9시 - PM1시(추석, 설, 신정 연휴만 휴무)
                            </p> -->
                        </ul>
                        </a>
                    </div>
                </section>
           </nav>
        </section>
        <footer>
            <div id="footer_logo">
                <p>askdjlfakjsldkf</p>
            </div>
            <div id="footer_addr">
            </div>
            <div id="footer_sns">
            </div>
        </footer>
    </div>
</template>
<script>
import { setInterval } from 'timers';
export default {
    data(){
        return{
            fbw: "갑작스런 목통증 해결방법",
            imageUrls: [],
            position: -1,
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
#image{
    background-repeat: no-repeat;
    background-size: cover;
    transition: 1s;
    position: absolute;
    width: 120%;
    height: 100%;
    right: 0;
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
#shortcut ul li, #shortcut p{
    font-size: 12px;
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
#mboard{
    position: relative;
    width: 100%;
    height: 48px;
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
footer{
display: table;
position: absolute;
bottom: 0;
left: 0;
z-index: 999;
width: 100%;
height: 100px;
background: #272727;
vertical-align: middle;
}
#footer_logo p{
    height:100px;
}
@media screen and (max-width: 1300px){
   
}
@media screen and (max-width: 1170px){
    
}

@media screen and (max-width: 1020px) {
    /* #wrap{
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
    .inner{
        margin-left: 0;
        position:absolute;
        height: auto;
    }
    footer{
        position: relative;
        height: 100px;
        flex: 5;
        display: block;
    } */
}
@media screen and (max-width: 980px) {
    
}

</style>