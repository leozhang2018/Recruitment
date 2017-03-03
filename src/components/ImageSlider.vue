<template>
  <section class="pic-slide">
    <div class="bg"></div>
    <div class="slide-container">
      <div class="slide-wrap">
        <ul class="clearfix slide-animate" :style="styleObj">
          <li v-for="img in imgs">
            <img :src="img" />
          </li>
        </ul>
      </div>
      <div class="pic-change-btn">
        <div @click="prev" class="left" :class="{opacityClass: isFirst}"></div>
        <div @click="next" class="right" :class="{opacityClass: isLast}"></div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ImageSlider',
    props: {
      imgs: {
        type: Array,
        required: true
      },
      autoplay: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        currentIdx: 0,
        reverseOrder: false
      }
    },
    computed: {
      styleObj () {
        return {
          width: (this.imgs.length + 1) * 640 + 'px',
          left: this.currentIdx * -660 + 'px'
        }
      },
      isFirst () {
        return this.currentIdx === 0
      },
      isLast () {
        return this.currentIdx === this.imgs.length - 1
      }
    },
    methods: {
      turn (idx) {
        if (this.reverseOrder) {
          idx = -idx
        }

        let to = this.currentIdx + idx
        if (to < 0) {
          to = 0
          this.reverseOrder = false
        } else if (to >= this.imgs.length) {
          to = this.imgs.length - 1
          this.reverseOrder = true
        }
        this.currentIdx = to
      },
      prev () {
        this.turn(-1)
      },
      next () {
        this.turn(1)
      },
      autoPlay () {
        this.timer = setInterval(() => {
          this.turn(1)
        }, 5000)
      },
      pause () {
        clearInterval(this.timer)
      }
    },
    created () {
      if (this.autoplay) {
        this.autoPlay()
      }
    }
  }

</script>

<style lang="less" scoped>
  .pic-slide {
    width: 100%;
    height: 510px;
    // background-color: black;
    position: relative;
    overflow: hidden;
    .bg {
      height: 360px;
      background: #F5F5F5;
    }
    .slide-container {
      transition: all 1s;
      position: relative;
      overflow: hidden;
      margin-top: -280px;
      .slide-wrap {
        width: 1060px;
        height: 360px;
        position: relative;
        margin: 0 auto;
        ul {
          position: absolute;
          top: 0;
          left: 0;
          li {
            list-style: none;
            width: 640px;
            height: 360px;
            float: left;
            padding-right: 20px;
            a {
              display: block;
            }
            img {
              width: 640px;
              height: 360px;
              vertical-align: top;
            }
          }
        }
        .slide-animate {
          transition: all 0.5s ease;
        }
      }
      .pic-change-btn {
        margin: 30px auto 0;
        width: 1060px;
        height: 40px;
        // background-color: #00f;
        margin: 0 auto;
        width: 1060px;
        height: 40px;
        margin-top: 30px;
        // background-color: blue;
        .left {
          float: left;
          width: 40px;
          height: 40px;
          // background-color: yellow;
          background-image: url("~assets/img/icons/arrow-square-left-grey.png");
          background-size: cover;
          cursor: pointer;
        }
        .right {
          width: 40px;
          height: 40px;
          margin-left: 50px;
          // background-color: yellow;
          background-image: url("~assets/img/icons/arrow-square-right-grey.png");
          background-size: cover;
          cursor: pointer;
        }
        .opacityClass {
          opacity: 0.3;
          pointer-events: none;
        }
      }
    }
  }
</style>
