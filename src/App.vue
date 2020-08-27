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
                        <li class="li_sub" @click="changePage" v-for="content in item.content" :key="content.text">
                            <router-link :to="content.router" class="subItemRouter">{{content.text}}</router-link>
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
    <footer id="footer">
        <div id="footer_logo">
            <img id="ft_logoimg" src="./assets/ft_logo.png">
        </div>
        <div id="footer_addr">
            <p>톡톡경희한의원 | 경기도 광주시 파발로 187 세양빌딩 202호 대표자: 이기홍 | TEL: 031-767-0075</p>
            <p>Copyright © 2019 톡톡경희한의원. All rights reserved.</p>
        </div>
        <div id="footer_sns">
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
      return {
        items: [
            {id: 0, text: "톡톡경희한의원", router: "/introduction",
                content: [{text: "인사말", router: "/introduction"}, {text: "원장님소개", router: "/introduction02"}, {text: "병원갤러리", router: "/introduction03"},
                {text: "진료안내", router: "/introduction04"}, {text: "오시는길", router: "/introduction05"}]},
            {id: 1, text: "기본진료", router: "/care",
                content: [{text: "침", router: "/care"}, {text: "약", router: "/care1"}, {text: "부항", router: "/care2"}, {text: "다이어트한약", router: "/care3"},
                {text: "교통사고", router: "/care4"}]},
            {id: 2, text: "공간척추교정", router: "/chuna", 
                content: [{text: "공간척추교정법이란", router: "/chuna"}, {text: "특징 및 장점", router: "/chuna1"}, {text: "구성", router: "/chuna2"},
                {text: "안정성", router: "/chuna3"}, {text: "치료도구", router: "/chuna4"}, {text: "특효질환", router: "/chuna5"}]},
            {id: 3, text: "턱관절교정", router: "/jaw", 
                content:[{text: "FCST원리소개", router: "/jaw"}, {text: "FCST관련질환", router: "/jaw1"}, {text: "턱관절의 중요성1", router: "/jaw2"},
                {text: "턱관절의 중요성2", router: "/jaw3"}, {text: "FCST 10가지 균형요법", router: "/jaw4"}]},
            {id: 4, text: "치료이야기", router: "/story", 
                content: [{text: "치료이야기", router: "/story"}]},
            {id: 5, text: "고객센터", router: "/center",
                content: [{text: "공지사항", router: "/center"}]}
        ],
        menu: [
            {text: "HOME", router: "/main"},
            {text: "JOIN"},
            {text: "LOGIN"},
            {text: "ADMIN"},
        ],
        currentId: -1,
        currentPage: -1,
        ismain: true,
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
      if(this.currentPage === 0){
          document.getElementById("footer").style.display = "none";
      } else{
          document.getElementById("footer").style.display = "block";
      }
  },
}
</script>

<style>
body{
    height: 100%;
}
#app{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
}
#header{
    /* position: absolute; */
    background-color: white;
    z-index: 990;
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
    width: 200px;
    height: auto;
    display: block;
    z-index: 1;
    margin-top: -18%;
    padding: 5%;
    left: 55%;
}
@media screen and (max-width: 1350px){
    #subList{
        left: 60%;
    }
}
.li_sub{
    list-style: "·";
    margin-bottom: 2px;
    padding-left: 5%;
    color: grey;
    font-weight: 600;
    font-size: 16px;
}
.itemRouter{
    font-family: GmarketSansLight, sans-serif;
    color: black;
}
.itemRouter:hover{
    margin-bottom: 5%;
    font-weight: bold;
    color: #ee6f20;
}
.itemRouter:hover:not(:first-child){
    margin-top:10%;
}
.subItemRouter{
    color: grey;
}
.subItemRouter:hover{
    font-weight: bold;
    color: #ee6f20;
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
#footer_logo{
    width: 280px;
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    position: absolute;
    top: 22px;
}
#ft_logoimg{
    vertical-align: middle;
}
#footer_addr{
    width: 55%;
    position: absolute;
    left: 290px;
    top: 34px;
    text-align: left;
    vertical-align: middle;
    display: inline-block;
}
#footer_addr p{
    color:#aaa;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.42857143;
}
#footer_sns{
    display: inline-block;
}
 @media screen and (max-width: 1024px){
    #app{
        display: block;

    }
    #header{
        position: fixed;
        top: 0;
        left: 0;
        /* flex-direction: row; */
        width: 100%;
        /* flex: 1; */
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
        position: static;
        display: block;
        width: 100%;
        height: unset;
        /* flex: 10; */
        margin-top: 80px;
    }
    #menu{
        display: none;
    }
    #navbar{
        display: none;
    }
    footer{
        position: static;

    }
    #ft_logoimg{
        display: none;
    }
    #footer_addr{
        width: 100%;
        display: block;
        position: relative;
        top: 20px;
        left: 0;
        text-align: center;
    }
  
}
@media screen and (max-width: 640px){
    #image{
        background-size: contain;
    }
    #app{
        height: unset;
    }
}

@font-face { 
    font-family: 'GmarketSansLight'; 
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff'); 
    font-weight: normal; 
    font-style: normal; }
</style>