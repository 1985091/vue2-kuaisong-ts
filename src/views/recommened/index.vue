<template>
    <div id="app">
      <Carousel :imageList="imageList"></Carousel>
      <h1> 欢迎光临，快送外卖</h1>
    </div>
  </template>
  
  <script>
  import Carousel from './Carousel.vue'
  export default {
    name: 'App',
    components: {
      Carousel
    },
    data() {
      return {
        imageList: [{
              src: require('../../assets/background/back1.png')
            },
            {
              src: require('../../assets/background/back2.png')
            },
            {
              src: require('../../assets/background/back3.png')
            },
            {
              src: require('../../assets/background/back4.png')
            }
          ],
      }
    },
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  *{
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 ;
    user-select: none;
  }
  li{
    list-style: none;
  }
  h1 {
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center; /* 让文本水平居中 */
}
  </style>