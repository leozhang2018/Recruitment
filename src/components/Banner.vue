<template>
  <div>
    <section class="slogan-area">
      <div class="slogan-content">
        <h2 class="slogan-title" v-for="slogan in slogans">{{slogan}}</h2>
        <p class="slogan-desc" v-if="description">{{description}}</p>
      </div>
    </section>

    <section class="banner" :style="bannerStyle">
      <div class="guide" v-if="showGuide">
        <router-link :to="guideTarget" class="guide-content">
          <div class="post-text">
            <p v-for="text in guideTexts">{{text}}</p>
          </div>
          <div class="arrow" :class="arrowOrientation"></div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Banner',
    props: {
      slogans: {
        type: Array
      },
      description: {
        type: String
      },
      bannerImg: {
        required: true
      },
      guideText: {
      },
      guideTarget: {
        default: ''
      },
      showGuide: {
        type: Boolean,
        default: false
      },
      arrowOrientation: {
        type: String,
        default: 'right'
      }
    },
    computed: {
      bannerStyle () {
        return {
          'background-image': `url(${this.bannerImg})`
        }
      },
      guideTexts () {
        if (typeof this.guideText === 'string') {
          return [this.guideText]
        }
        return this.guideText
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "~assets/less/utils.less";
  .slogan-area {
    .content();
    height: 100%;
    text-align: left;
    overflow: visible;
    position: relative;
    .slogan-content {
      width: 562px;
      margin-top: 50px;
      padding-bottom: 50px;
      // background-color: yellow;
      .slogan-title {
        width: 756px;
        font-size: 42px;
        color: #333333;
        letter-spacing: 0;
        line-height: 60px;
        // background-color: blue;
      }
      .slogan-desc {
        width: 640px;
        font-size: 18px;
        color: #666666;
        letter-spacing: 0;
        line-height: 32px;
        margin: 20px auto 40px;
        // background-color: red;
      }
    }
  }

  .banner {
    width: 100%;
    height: 600px;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 1440px 600px;
    background-size: cover;
    // background-color: yellow;
  }

  .guide {
    width: 940px;
    height: 160px;
    position: absolute;
    z-index: 888;
    left: 50%;
    margin-left: -470px;
    margin-top: -60px;
    // background-color: blue;
    .guide-content {
      width: 160px;
      height: 160px;
      background-color: #1989FA;
      float: right;
      font-family: 'Core Sans N 55 Medium';
      .post-text {
        margin-left: 24px;
        margin-top: 20px;
        width: 65px;
        height: 56px;
        // background-color: blue;
        p {
          font-size: 16px;
          color: #FFFFFF;
          letter-spacing: 0;
          line-height: 28px;
          // background-color: yellow;
        }
      }
      .arrow {
        width: 16px;
        height: 16px;
        float: right;
        margin-top: 49px;
        margin-right: 25px;
        // background-color: blue;
        background-size: cover;
        &.right {
          background-image: url("~assets/img/icons/arrow-right-white.png");
        }
        &.down {
          background-image: url("~assets/img/icons/angle-down-grey.png");
        }
      }
    }
    .guide-content:hover {
      background-color: #1679DB;
    }
  }
</style>
