<template>
  <div id="app">
      <div id="nav">
        <div id="logo">
            <img id="logo_img" src="./assets/logo.png">
        </div>
        
        <div id="navbar">
            <ul id="mainList">
                <li @mouseenter="getSubList(item.id)" @mouseleave="outSubList()" id="li_main" v-for="item in items" :key="item.id">
                    <router-link :to="item.router" class="itemRouter">{{item.text}}</router-link>
                    <ul id="subList" v-show="currentId == item.id">
                        <li id="li_sub" v-for="content in item.content" :key="content.text">
                            {{content.text}}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <div id="nav_mobile">

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
            {id: 0, text: "톡톡경희한의원",router: "/introduction", content: [{text: "인사말", router: "/introduction"}, {text: "원장님소개"}, {text: "병원갤러리"}, {text: "진료안내"}, {text: "오시는길"}]},
            {id: 1, text: "기본진료", router: "/care",content: [{text: "침"}, {text: "약"}, {text: "부항"}, {text: "다이어트한약"}, {text: "교통사고"}]},
            {id: 2, text: "공간척추교정", router: "/chuna", content: [{text: "공간척추교정법이란"}, {text: "특징 및 장점"}, {text: "구성"}, {text: "안정성"}, {text: "치료도구"}, {text: "특효질환"}]},
            {id: 3, text: "턱관절교정", router: "/jaw"},
            {id: 4, text: "치료이야기", router: "/story"},
            {id: 5, text: "고객센터", router: "/center"}
        ],
        currentId: 999,
      }
  },
  methods: {
        getSubList: function(id) {
            this.currentId = id;
        },
        outSubList: function() {
           this.currentId = 999;
        },
        open: function(){

        }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
html, body {
    margin: 0;
    height: 100%;
}
#app{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
}
#nav{
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 100%;
}
#logo{
    width: 250px;
}
#logo_img{
    margin-top: 10%;
    margin-left: 15%;
    width: 167px;
    height: 59px;
    max-height: 5rem;
}
#mainList{
    display: flex;
    flex-direction: column;
    margin-top: 18%;
    margin-left: 12%;
}
#li_main{
    color: black;
    height: 2rem;
    margin-bottom: 5%;
    font-weight: bold;
    margin-right: 10%;
    font-size: 20px;
}
#li_main:hover{
    margin-bottom: 5%;
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
#li_sub{
    content: "·";
    padding-left: 5%;
    color: grey;
    font-weight: 50;
    font-size: 15px;
}
.itemRouter{
    color: black;
}
.itemRouter:hover{
    margin-bottom: 5%;
    font-weight: bold;
    color: darksalmon
}
#content{
    display: flex;
    flex: 8;
}

#nav_mobile{
    display: none;
}

@media screen and (max-width: 1024px){
    #app{
        flex-direction: column;
    }
    #nav{
        display: flex;
        flex-direction: row;
        flex: 2;
    }
    #logo_img{
        margin-top: 3%;
        margin-left: 7%;
    }
    #navbar{
        display: none;
    }
    /* #nav {
        display: none;
    } */
    #content{
        flex: 16;
    }
}
</style>