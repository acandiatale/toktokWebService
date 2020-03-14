<template>
  <div id="app">
      <div id="nav">
        <div id="logo">
            <img id="logo_img" src="./assets/logo.png">
        </div>
        <div id="navbar">
            <ul>
                <li v-for="item in items" :key="item.text">
                    {{item.text}}
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
  data: ()=>{
      return{
        items: [
            {text: "톡톡경희한의원"},
            {text: "기본진료"},
            {text: "공간척추교정"}
        ]

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
#logo_img{
    margin-top: 5%;
    margin-left: 10%;
    width: 167px;
    height: 59px;
    max-height: 5rem;
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
        text-align: center;
    }
    /* #nav {
        display: none;
    } */
    #content{
        flex: 16;
    }
}
</style>