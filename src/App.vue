<template>
  <div id="app">
      <div id="nav">
        <div id="logo">
            <img id="logo_img" src="./assets/logo.png">
        </div>
        <div id="navbar">
            <ul id="mainList">
                <li @mouseenter="getSubList(item.id)" @mouseleave="outSubList(item.id)" id="li_main" v-for="item in items" :key="item.id">
                    {{item.text}}
                    <ul id="subList" v-show="item.show">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
      return {
        items: [
            {show: false, id: 0, text: "톡톡경희한의원", content: [{text: "인사말"}, {text: "원장님소개"}]},
            {show: false, id: 1, text: "기본진료", content: [{text: "인사말"}, {text: "원장님소개"}]},
            {show: false, id: 2, text: "공간척추교정"},
            {show: false, id: 3, text: "턱관절교정"},
            {show: false, id: 4, text: "치료이야기"},
            {show: false, id: 5, text: "고객센터"}
        ]
      }
  },
  methods: {
        getSubList: function(id) {
            this.items[id].show = true;
        },
        outSubList: function(id) {
            this.items[id].show = false;
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
    flex: 2;
    width: 100%;
    height: 100%;
}
#logo{
    width: 100%;
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
    left: 60%;
}
#li_sub{
    padding-left: 5%;
    color: grey;
    font-weight: 50;
    font-size: 15px;
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