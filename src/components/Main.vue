<template>
    <div id="Wrap">
        <div id="mainWrap">
            <b-carousel :indicator="false" :indicator-inside="false" :has-drag="false"
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
    <footer>
    </footer>
    </div>
</template>
<script>
export default {
    data(){
        return{

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
    width: 100%;
    height: 100%;
    /* display: block; */
    overflow: hidden;
}
#mainWrap{
    z-index: -1;
    position: absolute;
    height: 100%;
    width: 100%; 
    overflow:hidden
}
#bgItems{
    position: fixed;
    width: 1800px;
    left: 0;
    top: 0;
    display: block;
    overflow: hidden;
    margin-left: -300px;
    height: 88%;
}
.inner{
    /* margin: 0; */
    position: fixed;
    left: 4%;
    top: 11%;
    width: 30%;
    max-width: 469px;
    margin-left: 28%;
}
.inner .innerImage{
    margin: 0;
    width: 90%;
    height: auto;
}
@media screen and (max-width: 800px) {
    .inner{
    /* margin: 0; */
    position: absolute;
    left: 4%;
    top: 13%;
    width: 230px;
    /* max-width: 469px; */
    margin-left: 27%;
}
.inner .innerImage{
    margin: 0;
    width: 90%;
    height: auto;
}
}
</style>