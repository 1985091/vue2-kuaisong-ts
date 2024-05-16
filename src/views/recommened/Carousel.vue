<template>
    <div class="carousel">
      <div class="carouselList">
        <!-- 图片列表 -->
        <ul class="img">
          <li v-for="(item,index) in imageList" :key="index" :style="move">
            <img :src="item.src" alt="">
          </li>
        </ul>
        <!-- 圆点列表 -->
        <ul class="circle">
          <li v-for="(item,index) in imageList.length" :key="index"
            :style="{'backgroundColor':index==imgStatus?'#ffffffc9':'#ffffff7b'}" @click="circleMove(index)"></li>
        </ul>
        <!-- 左箭头 -->
        <div class="leftArrow" @click="leftMove"><</div>
        <!-- 右箭头 -->
        <div class="rightArrow" @click="rightMove">></div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name: 'Carousel',
      props: ['imageList'],
      data() {
        return {
          imgStatus: 0, //浏览到第几张图片
          move: null, //图片translate样式
          actionTimer: null, //防抖定时器
          beginTime: 0, //节流
          autoInterval: null //自动轮播定时器
        }
      },
      methods: {
        leftMove() {
          clearInterval(this.autoInterval);
          if (!this.actionTimer) {
            this.imgStatus -= 1;
            if (this.imgStatus < 0) {
               this.imgStatus = this.imageList.length - 1; // 如果当前是第一张图片，则跳转到最后一张图片
                }
              this.moveFun(); // 更新轮播图位置
              this.actionTimer = setTimeout(() => {
              this.actionTimer = null; // 清除防抖定时器
              }, 1000); // 设置防抖时间

            // if (this.imgStatus <= 4 && this.imgStatus >= 0) this.moveFun();
            // if (this.imgStatus == -1) this.imgStatus = 3;
            // this.moveFun();
            // this.actionTimer = setTimeout(() => {}, 1000);
          } else {
            // if (this.actionTimer) clearTimeout(this.actionTimer);
            // this.actionTimer = setTimeout(() => {
            //   this.imgStatus -= 1;
            //   if (this.imgStatus <= 4 && this.imgStatus >= 0) this.moveFun();
            //   if (this.imgStatus == -1) this.imgStatus = 3;
            //   this.moveFun();
            // }, 1000);
            clearTimeout(this.actionTimer); // 清除上一个防抖定时器
            this.actionTimer = setTimeout(() => {
            this.imgStatus -= 1;
            if (this.imgStatus < 0) {
            this.imgStatus = this.imageList.length - 1; // 如果当前是第一张图片，则跳转到最后一张图片
            }
      this.moveFun(); // 更新轮播图位置
      this.actionTimer = null; // 清除防抖定时器
    }, 1000); // 设置防抖时间

          };
          this.autoMove();
        },
        rightMove() {
          clearInterval(this.autoInterval);
          let now = new Date().getTime()
          if (now - this.beginTime > 1000) {
            this.imgStatus += 1;
            if (this.imgStatus == 4) this.imgStatus = 0;
            this.moveFun();
            this.beginTime = now;
          };
          this.autoMove();
        },
        circleMove(index) {
          clearInterval(this.autoInterval);
          this.imgStatus = index;
          this.moveFun();
          this.autoMove();
        },
        moveFun() {
          this.move = `transform:translateX(-${this.imgStatus*900}px)`;
        },
        autoMove() {
          this.autoInterval = setInterval(() => {
            if (this.imgStatus >= 0 && this.imgStatus < 3) this.imgStatus += 1;
            else if (this.imgStatus == 3) this.imgStatus = 0;
            else if (this.imageList == -1) this.imgStatus = 0;
            this.moveFun()
          }, 2000);
        }
      },
      mounted() {
        this.autoMove();
      }
    }
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    margin: 0 auto; /* 水平居中 */
    width: 900px;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carouselList {
    background-color: lightcoral;
    overflow: hidden;
  }

  .carouselList .img {
    width: 20000%;
  }

  .carouselList .img li {
    float: left;
    width: 900px;
    height: 290px;
    transition: transform 0.3s ease-in-out;
  }

  .carouselList .circle {
    position: absolute;
    bottom: 0;
    left: calc(50% - 50px);
    width: 100px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .carouselList .circle li {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #ffffff7b;
    float: left;
    cursor: pointer;
  }

  .leftArrow {
    position: absolute;
    top: 125px;
    width: 50px;
    height: 50px;
    background-color: #cccccc68;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .leftArrow:hover {
    background-color: #ccccccc3;
  }

  .rightArrow {
    position: absolute;
    top: 125px;
    right: 0px;
    width: 50px;
    height: 50px;
    background-color: #cccccc68;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .rightArrow:hover {
    background-color: #ccccccc3;
  }
</style>