<template>
  <section class="staff-voice">
    <div class="staff-voice-content">
      <ul class="clearfix slide-animate" :style="styleObj">
        <li v-for="item in staffs">
          <div class="staff-info">
            <div class="avatar">
              <img :src="item.avatar" :alt="item.name" />
            </div>
            <div class="name">
              <h3>{{item.name}}</h3>
            </div>
            <div class="job-title">
              <p>{{item.jobTitle}}</p>
            </div>
          </div>
          <div class="staff-said">
            <p>
              “{{item.content}}”
            </p>
          </div>
        </li>
      </ul>

      <div class="change-btn">
        <div @click="prev" class="left"></div>
        <div @click="next" class="right"></div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'StaffVoice',
    props: {
      staffs: {
        type: Array,
        required: true
      },
      autoplay: {
        type: Boolean,
        default: false
      }
    },
    data: function () {
      return {
        currentIdx: 0
      }
    },
    computed: {
      styleObj () {
        return {
          width: this.staffs.length * 940 + 'px',
          left: this.currentIdx * -940 + 'px'
        }
      }
    },
    methods: {
      turn (idx) {
        let to = this.currentIdx + idx
        if (to < 0) {
          to = 0
        }
        // 循环显示
        this.currentIdx = to % this.staffs.length
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

<style lang="less" scope>
  @import '~assets/less/utils.less';
  .staff-voice {
    .content();
    margin: 0 auto;
    height: 550px;
    // background-color: yellow;
    position: relative;
    ul {
      /*width:1920px;*/
      position: absolute;
      top: 0;
      left: 0;
      li {
        list-style: none;
        width: 940px;
        height: 310px;
        float: left;
      }
    }
    .slide-animate {
      transition: all 0.5s ease;
    }
    .staff-voice-content {
      height: 310px;
      width: 940px;
      position: absolute;
      margin-top: -155px;
      /* margin-left: -470px; */
      // background-color: red;
      overflow: hidden;
      top: 50%;
      /* left: 0; */
    }
    .staff-info {
      height: 140px;
      // width: 98px;
      position: absolute;
      // background-color: blue;
      .avatar {
        width: 64px;
        height: 64px;
        // background-color: black;
        img {
          width: 64px;
          height: 64px;
          border-radius: 32px;
        }
      }
      .name {
        margin-top: 20px;
        width: 65px;
        height: 32px;
        h3 {
          font-size: 18px;
          color: #333333;
          letter-spacing: 0;
          line-height: 32px;
        }
      }
      .job-title {
        p {
          margin-top: 0;
          font-size: 14px;
          color: #666;
          letter-spacing: 0;
          line-height: 24px;
        }
      }
    }
    .staff-said {
      width: 660px;
      height: 240px;
      margin-left: 240px;
      // background-color: blue;
      p {
        font-size: 28px;
        color: #333333;
        letter-spacing: 0;
        line-height: 48px;
        margin: 0;
      }
    }
    .change-btn {
      width: 90px;
      height: 40px;
      margin-left: 240px;
      position: absolute;
      bottom: 0;
      // background-color: #00f;
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

</style>
