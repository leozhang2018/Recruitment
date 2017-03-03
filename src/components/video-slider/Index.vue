<template>
  <section class="video-banner">
    <section class="slogan">
      <div class="slogan-content">
        <h2>{{slogan.title}}</h2>
        <p>
          <template v-for="(desc, index) in slogan.descs">
            {{desc}} <br v-if="index !== slogan.descs.length - 1" />
          </template>
        </p>
      </div>
    </section>

    <div class="slide-container">
      <div class="slider-wrap">
        <ul class="clearfix slide-animate" :style="styleObj">
          <li v-for="(item, index) in videos">
            <img :src="item.cover" />
            <div class="player_btn">
              <div class="player_pause active" @click="play(index)"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="video-change-btn">
      <div @click="prev" class="left"></div>
      <div @click="next" class="right"></div>
    </div>

    <modal :show="videoModal.show" :video-src="videoModal.src" @modalClose="stop"></modal>

  </section>
</template>

<script>
  import Modal from './Modal'

  export default {
    name: 'VideoSlider',
    props: {
      videos: {
        type: Array,
        required: true
      }
    },
    components: {
      Modal
    },
    data () {
      return {
        currentIdx: 0,
        videoModal: {
          show: false,
          src: ''
        }
      }
    },
    computed: {
      slogan () {
        return {
          title: this.videos[this.currentIdx].title,
          descs: this.videos[this.currentIdx].descs
        }
      },
      styleObj () {
        return {
          width: `${this.videos.length * 660}px`,
          left: `${this.currentIdx * -660}px`
        }
      }
    },
    methods: {
      play (idx) {
        this.videoModal.src = this.videos[idx].src
        this.videoModal.show = true
      },
      stop () {
        this.videoModal.src = ''
        this.videoModal.show = false
      },
      turn (idx) {
        let to = this.currentIdx + idx
        if (to < 0) {
          to = 0
        }
        // 循环显示
        this.currentIdx = to % this.videos.length
      },
      prev () {
        this.turn(-1)
      },
      next () {
        this.turn(1)
      }
    }
  }

</script>

<style lang="less" scoped>
  @import "~assets/less/utils.less";
  * {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  .clearfix {
    zoom: 1;
  }

  .clearfix:after {
    content: '';
    height: 0;
    display: block;
    visibility: hidden;
    clear: both;
  }

  .video-banner {
    position: relative;
    width: 100%;
    height: 909px;
    background-color: #fff;
    overflow: hidden;
    .slogan {
      position: relative;
      display: block;
      margin-top: 120px;
      .slogan-content {
        position: relative;
        height: 159px;
        width: 1060px;
        margin-top: 120px;
        // background-color: blue;
        margin: 0 auto;
        h2 {
          font-size: 34px;
          color: #333333;
          letter-spacing: 0;
          line-height: 43px;
          // background-color: red;
          width: 640px;
        }
        p {
          font-size: 18px;
          color: #666666;
          letter-spacing: 0;
          line-height: 32px;
          margin-top: 20px;
          // background-color: green;
          width: 640px;
        }
      }
    }
    .video-change-btn {
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
    }
  }

  .slide-container {
    position: relative;
    height: 360px;
    width: 1060px;
    margin-left: auto;
    margin-right: auto;
    .slider-wrap {
      width: 1300px;
      height: 360px;
      overflow: hidden;
      position: relative;
      top: 0;
      left: 0;
      // background-color: black;
      ul {
        /*width:1920px;*/
        position: absolute;
        top: 0;
        left: 0;
        /*background-color: blue;*/
        li {
          list-style: none;
          width: 640px;
          height: 360px;
          float: left;
          margin-right: 20px;
          position: relative;
          background-color: #000;
          a {
            display: block;
          }
          img {
            width: 640px;
            height: 360px;
            vertical-align: top;
            opacity: 0.6;
          }
          img:hover {}
        }
      }
      .player_btn {
        position: absolute;
        width: 93px;
        height: 93px;
        top: 50%;
        // background-color: blue;
        margin-top: -47px;
        left: 50%;
        margin-left: -47px;
        .player_pause {
          width: 93px;
          height: 93px;
          position: relative;
          margin: 0 auto;
          background-image: url("~assets/img/icons/play.png");
          background-size: contain;
          opacity: 0.7;
          cursor: pointer;
        }
        .player_pause:hover {
          opacity: 1;
        }
      }
    }
  }

  .slide-animate {
    transition: all 0.8s;
  }

  .inactive {
    display: none;
  }

  .active {
    display: block;
  }

</style>
