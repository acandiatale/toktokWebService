<template>
  <div id="app">
      
      <header id="header">
        <div id="logo">
            <img id="logo_img" src="./assets/logo.png" @click="getMain">
        </div>
        
        <div id="navbar">
            <ul id="mainList">
                <li @mouseenter="getSubList(item.id)" @mouseleave="outSubList()" @click="changePage" id="li_main" v-for="item in items" :key="item.id">
                    <router-link :to="item.router" class="itemRouter">{{item.text}}</router-link>
                    <ul id="subList" v-show="currentId == item.id">
                        <li class="li_sub" v-for="content in item.content" :key="content.text">
                            <!-- <router-link :to="content.router" class="subItemRouter">{{content.text}}</router-link> -->
                            {{content.text}}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div id="nav_mobile">

        </div>
    </header>
    <div id="menu">
        <ul>
            <li id="menuList" v-for="item in menu" :key="item.text">
                {{item.text}}
            </li>
        </ul>
    </div>

    <div id="content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
      return {
        items: [
            {id: 0, text: "톡톡경희한의원",router: "/introduction",
                content: [{text: "인사말", router: "/introduction"}, {text: "원장님소개", router: "/introduction02"}, {text: "병원갤러리", router: "/introduction03"},
                {text: "진료안내", router: "/introduction04"}, {text: "오시는길", router: "/introduction05"}]},
            {id: 1, text: "기본진료", router: "/care",
                content: [{text: "침"}, {text: "약"}, {text: "부항"}, {text: "다이어트한약"}, {text: "교통사고"}]},
            {id: 2, text: "공간척추교정", router: "/chuna", 
                content: [{text: "공간척추교정법이란"}, {text: "특징 및 장점"}, {text: "구성"}, {text: "안정성"}, {text: "치료도구"}, {text: "특효질환"}]},
            {id: 3, text: "턱관절교정", router: "/jaw", 
                content:[{text: "FCST원리소개"}, {text: "FCST관련질환"}, {text: "턱관절의 중요성1"}, {text: "턱관절의 중요성2"}, {text: "FCST 10가지 균형요법"}]},
            {id: 4, text: "치료이야기", router: "/story", 
                content: [{text: "치료이야기"}]},
            {id: 5, text: "고객센터", router: "/center",
                content: [{text: "공지사항"}]}
        ],
        menu: [
            {text: "HOME", router: "/main"},
            {text: "JOIN"},
            {text: "LOGIN"},
            {text: "ADMIN"},
        ],
        currentId: -1,
        currentPage: -1,
      }
  },
  methods: {
        getSubList: function(id) {
            this.currentId = id;
            console.log(this.currentId);
        },
        outSubList: function() {
           this.currentId = -1;
           console.log(this.currentId);
        },
        getMain: function(){
            if(this.currentPage !== -1){
                this.$router.push("/main");
                this.currentPage = -1;
            }
        },
        changePage: function(){
            this.currentPage = 0;
            console.log("currentPage:" + this.currentPage);
        },
  },
  mounted(){
      this.$router.push("/main");
      console.log("currentPage:" + this.currentPage);
  },
}
</script>

<style>
html{
    overflow-y:hidden;
}
html, body {
    margin: 0;
    height: 100%;
    overflow: hidden;
    overflow-y: hidden;
}
#app{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    /* overflow: hidden; */
}
#header{
    /* position: absolute; */
    background-color: white;
    z-index: 998;
    display: flex;
    flex: 2;
    flex-direction: column;
    width: 20%;
    height: 100%;
    max-width: 340px;
    min-width: 230px;
}
#logo_img{
    margin-top: 80px;
    margin-left: 17%;
    margin-bottom: 20px;
    width: 167px;
    height: 59px;
    max-height: 5rem;
}
#logo_img:hover{
    cursor: pointer;
}
#mainList{
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    margin-left: 20%;
}
#li_main{
    color: black;
    height: 2rem;
    margin-bottom: 15px;
    font-weight: bold;
    margin-right: 10%;
    font-size: 20px;
}
#li_main:hover{
    margin-bottom: 15px;
    font-weight: bold;
    color: darksalmon
}
#subList{
    /* display: none; */
    background: rgba(0,0,0,0.8);
    font-size: 17px;
    position: relative;
    width: 150px;
    height: auto;
    display: block;
    z-index: 1;
    margin-top: -18%;
    padding: 5%;
    left: 60%;
}
.li_sub{
    list-style: "·";
    margin-bottom: 2px;
    padding-left: 5%;
    color: grey;
    font-weight: 50;
    font-size: 15px;
}
.itemRouter{
    font-family: GmarketSansLight, sans-serif;
    color: black;
}
.itemRouter:hover{
    margin-bottom: 5%;
    font-weight: bold;
    color: darksalmon
}
.subItemRouter{
    color: grey;
}
.subItemRouter:hover{
    font-weight: bold;
    color: darksalmon
}
#content{
    display: flex;
    flex: 8;
    overflow: hidden;
}

#nav_mobile{
    display: none;
}

/* 우측 상단 메뉴 CSS */
#menu{
    position: absolute;
    top: 0;
    right: 0;
    z-index: 999;
    padding: 0 20px;
    background: #060606;
}
#menu ul{
    list-style: none;
    display: flex;
    flex-direction: row;
}
#menu ul li:first-child{
    margin-left: 0px;
}
#menu ul li{
    margin-left: 23px;
    height: 30px;
    font-size: 10px;
    line-height: 28px;
    color: white;
}
/* footer{
    display: table;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100px;
    background: #272727;
    vertical-align: middle;
} */
 @media screen and (max-width: 1020px){
    #app{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: auto;
        overflow-y: scroll;
    }
    #header{
        /* display: block; */
        flex-direction: row;
        width: 100%;
        flex: 1;
        max-width: 100%;
        min-width: 100%;
        height: 80px;
    }
    #logo_img{
        margin-top: 16px;
        margin-left: 12px;
        margin-bottom: 0;
        width: 140px;
        height: auto;

    }
    #content{
        display: table;
        width: 100%;
        height: 100%;
        min-width: auto;
        flex: 10;
    }
    #menu{
        display: none;
    }
    #navbar{
        display: none;
    }
} 
 @font-face { 
    font-family: 'GmarketSansLight'; 
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff'); 
    font-weight: normal; 
    font-style: normal; }
</style>