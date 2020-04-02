<template>
    <div id="Wrap">
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
                <div id="content1">
                    <img src="../assets/mbn1_bg.jpg">
                </div>
                <div id="content2">
                </div>
                <div id="content3">
                </div>
            </div>
        </section>
    <footer>
    </footer>
    </div>
</template>
<script>
export default {
    data(){
        return{
            fbw: "갑작스런 목통증 해결방법"
        }
    },
    methods: {
        getImgUrl: function(value){
            return require(`../assets/mvis_img0${value}.jpg`);
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
}#mboard ul li{
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
    /* width: 100%; */
    height: 100%;
    display: flex;
    flex-direction: row
    
}
#content1{
    flex: 3;
}
#content1 img{
    height: auto;
}
#content2{
    flex:3;
}
#content3{
    flex: 4;
}

@media screen and (max-width: 1020px) {
   .inner{
    margin: 0;
    position: fixed;
    left: 0%;
    width: 300px;
    /* max-width: 469px; */
    
    margin-left: 26%;
}
.inner .innerImage{
    margin: 0;
    width: 90%;
    height: auto;
}
}
</style>