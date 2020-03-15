<template>
  <div id="app">
      <div id="nav">
        <div id="logo">
            <img id="logo_img" src="./assets/logo.png">
        </div>
        <div id="navbar">
            <ul>
                <li id="li_content" v-on:click="getSubList" v-for="item in items" :key="item.text">
                    {{item.text}}
                    <ul id="subList">
                        <li v-for="content in items.content" :key="content.text">
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
            {text: "톡톡경희한의원", content: [{text: "인사말"}, {text: "원장님소개"}]},
            {text: "기본진료"},
            {text: "공간척추교정"},
            {text: "턱관절교정"},
            {text: "치료이야기"},
            {text: "고객센터"}
        ]
      }
  },
  methods: {
      getSubList: function() {

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
    height: 100%;
}
#nav{
    display: flex;
    flex-direction: column;
    flex: 2;
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
#navbar ul{
    margin-top: 18%;
    margin-left: 12%;
}
#navbar ul li{
    margin-bottom: 5%;
    font-weight: bold;
    margin-right: 10%;
    font-size: 20px;

}
#navbar ul li:hover{
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