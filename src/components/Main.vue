<template>
    <div id="Wrap">
        <div id="mainWrap">
            <b-carousel :indicator="false" :indicator-inside="false" :has-drag="false"
            :pause-hover="false" :pause-info="false" :arrow="false" :arrow-hover="false" id="bgItems">
                <b-carousel-item v-for="i in 3" :key="i" id="bgItems">
                <span class="image">
                <img :src="getImgUrl(i)">
                </span>
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
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
}
#mainWrap{
    z-index: -1;
    margin-left: -200px;
    position: absolute;
    height: 100%;
    width: 1920px; 
}
</style>