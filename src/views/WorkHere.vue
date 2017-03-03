<template>
  <div>
    <image-slider :autoplay="true" :imgs="sliderImgs"></image-slider>
    <section class="learn-develop">
      <div class="learn-content">
        <div class="desc">
          <p>学习发展
          </p>
          <h2>我们针对新入职的员工制定了一套完善的培训体系</h2>
        </div>
        <ul class="feature-list">
          <li class="feature-item">
            <i class="feature-item-top-line"></i>
            <h4 class="feature-item-title">入职指南</h4>
            <p class="feature-item-desc">
              我们希望帮助刚刚加入七牛的你在最短时间内适应环境，并且融入这个大家庭、专注成长从而找到未来。
            </p>
          </li>
          <li class="feature-item">
            <i class="feature-item-top-line"></i>
            <h4 class="feature-item-title">产品培训</h4>
            <p class="feature-item-desc">
              作为一支以打造为服务团队为理念的队伍，我们从不停止用产品的思维与视角来看待技术、用户与这个世界。
            </p>
          </li>
          <li class="feature-item">
            <i class="feature-item-top-line"></i>
            <h4 class="feature-item-title">Buddy Program</h4>
            <p class="feature-item-desc">
              你的 Buddy 将在最开始的日子里 1:1 地帮助你了解公司、环境、人员、产品与其他相关的业务技能。
            </p>
          </li>
          <li class="feature-item">
            <i class="feature-item-top-line"></i>
            <h4 class="feature-item-title">软技能进阶</h4>
            <p class="feature-item-desc">
              沟通与团队协作、领导力进阶、大脑与思维的开发……多元、定制的软技能进阶课程将帮助你全方位成长。
            </p>
          </li>
          <li class="feature-item">
            <i class="feature-item-top-line"></i>
            <h4 class="feature-item-title">轮岗计划</h4>
            <p class="feature-item-desc">
              通过在不同部门内与不同岗位上的轮岗，将帮助你更全面深入地了解产品与业务信息，在实战中全方位飞速成长。
            </p>
          </li>
          <li class="feature-item">
            <i class="feature-item-top-line"></i>
            <h4 class="feature-item-title">项目实操</h4>
            <p class="feature-item-desc">
              10% 的知识 + 20% 的技能 +70% 的实战 = 战斗力爆表的你，你将作为项目推进中重要的力量之一，在成长中凸现价值。
            </p>
          </li>
          <li class="feature-item">
            <i class="feature-item-top-line"></i>
            <h4 class="feature-item-title">大咖分享会</h4>
            <p class="feature-item-desc">
              业界大咖，内部大牛，各路奇才的精彩分享，涉及了前沿技术、行业资讯、工具技能，乃至生活爱好中的高能指南。
            </p>
          </li>
          <li class="feature-item">
            <i class="feature-item-top-line"></i>
            <h4 class="feature-item-title">素拓与团建</h4>
            <p class="feature-item-desc">
              七牛人爱玩，也会玩，更重要的是和一群靠谱的真战友玩，每一次素拓与团建，都是重新认识伙伴、也发掘自我的一场历程。
            </p>
          </li>

        </ul>
      </div>
    </section>
    <delimiter></delimiter>
    <section class="welfare">
      <div class="welfare-content">
        <div class="desc">
          <p>七牛福利
          </p>
          <h2>关心你，关心你的家人</h2>
        </div>
        <ul class="welfare-list">
          <li class="welfare-item">
            <i class="welfare-icon gift"></i>
            <p class="welfare-desc">
              给七牛家人的节日礼物
            </p>
          </li>
          <li class="welfare-item">
            <i class="welfare-icon awards"></i>
            <p class="welfare-desc">
              期权奖励
            </p>
          </li>
          <li class="welfare-item">
            <i class="welfare-icon insurance"></i>
            <p class="welfare-desc">
              五险一金
              <br>商业保险
            </p>
          </li>
          <li class="welfare-item">
            <i class="welfare-icon snacks"></i>
            <p class="welfare-desc">
              零食畅享
              <br>免费健身
            </p>
          </li>
          <li class="welfare-item">
            <i class="welfare-icon holiday"></i>
            <p class="welfare-desc">
              5 天带薪病假年度体检
            </p>
          </li>
          <li class="welfare-item">
            <i class="welfare-icon flex"></i>
            <p class="welfare-desc">
              弹性办公
            </p>
          </li>
          <li class="welfare-item">
            <i class="welfare-icon year-holiday"></i>
            <p class="welfare-desc">
              12 天年假
            </p>
          </li>
          <li class="welfare-item">
            <i class="welfare-icon salary"></i>
            <p class="welfare-desc">
              有竞争力的薪酬
            </p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import ImageSlider from '@/components/ImageSlider'

  let sliderImgs = [
    '/static/img/workhere/slider/1.jpg',
    '/static/img/workhere/slider/2.jpg',
    '/static/img/workhere/slider/3.jpg',
    '/static/img/workhere/slider/4.jpg',
    '/static/img/workhere/slider/5.jpg',
    '/static/img/workhere/slider/6.jpg',
    '/static/img/workhere/slider/7.jpg',
    '/static/img/workhere/slider/8.jpg',
    '/static/img/workhere/slider/9.jpg',
    '/static/img/workhere/slider/10.jpg',
    '/static/img/workhere/slider/11.jpg',
    '/static/img/workhere/slider/12.jpg'
  ]

  export default {
    name: 'WorkHere',
    components: {
      ImageSlider
    },
    data () {
      return {
        sliderImgs
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "~assets/less/utils.less";

  .learn-develop {
    .content();
    height: 1078px;
    // background-color: yellow;
    .learn-content {
      // background-color: blue;
      position: absolute;
      height: 838px;
      width: 1060px;
      // background-color: #00f;
      top: 50%;
      left: 50%;
      margin-left: -530px;
      margin-top: -419px;
      .desc {
        width: 640px;
        height: 136px;
        // // background-color: red;
        p {
          font-size: 22px;
          color: #666666;
          letter-spacing: 0;
          line-height: 30px;
          // background-color: red;
        }
        h2 {
          width: 640px;
          margin-top: 20px;
          font-size: 34px;
          color: #333333;
          letter-spacing: 0;
          line-height: 43px;
          // background-color: red;
        }
      }
      .feature-list {
        list-style: none;
        text-align: justify;
        width: 1060px;
        overflow: hidden;
        margin-top: 80px;
        // background-color: red;
        .feature-item {
          float: left;
          margin-right: 100px;
          display: inline-block;
          width: 270px;
          margin-bottom: 80px;
          /* vertical-align: top; */
          text-align: left;
          position: relative;
          // background-color: #ff0;
          .feature-item-top-line {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 40px;
            height: 0;
            border-top: 2px solid #0099FF;
          }
          .feature-item-title {
            font-size: 16px;
            color: #333333;
            letter-spacing: 0;
            line-height: 28px;
            margin-top: 24px;
            margin-bottom: 20px;
            // background-color: red;
          }
          .feature-item-desc {
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #666666;
            letter-spacing: 0;
            line-height: 24px;
            // background-color: blue;
          }
        }
        .feature-item:nth-child(3),
        .feature-item:nth-child(6),
        .feature-item:nth-child(9) {
          margin-right: 0;
        }
        // .feature-item:nth-child(7),
        // .feature-item:nth-child(8){
        //     margin-bottom: 0;
        // }
      }
    }
  }

  .welfare {
    .content();
    height: 717px;
    // background-color: blue;
    .welfare-content {
      height: 477px;
      width: 1060px;
      margin-top: -238.5px;
      position: absolute;
      top: 50%;
      // background-color: yellow;
      .desc {
        width: 640px;
        height: 93px;
        // // background-color: red;
        p {
          font-size: 22px;
          color: #666666;
          letter-spacing: 0;
          line-height: 30px;
          // // background-color: red;
        }
        h2 {
          width: 640px;
          margin-top: 20px;
          font-size: 34px;
          color: #333333;
          letter-spacing: 0;
          line-height: 43px;
          // background-color: red;
        }
      }
      .welfare-list {
        list-style: none;
        text-align: justify;
        width: 1060px;
        overflow: hidden;
        margin-top: 80px;
        // background-color: red;
        .welfare-item {
          float: left;
          margin-right: 100px;
          display: inline-block;
          width: 90px;
          margin-bottom: 80px;
          text-align: left;
          position: relative;
          background-color: white;
          .welfare-icon {
            display: inline-block;
            width: 32px;
            height: 32px;
            // background-color: orange;
          }
          .gift {
            background: url("~assets/img/workhere/Present.png") no-repeat;
            background-size: 100%;
          }
          .awards {
            background: url("~assets/img/workhere/Reward.png") no-repeat;
            background-size: 100%;
          }
          .insurance {
            background: url("~assets/img/workhere/Insurance.png") no-repeat;
            background-size: 100%;
          }
          .snacks {
            background: url("~assets/img/workhere/Snacks.png") no-repeat;
            background-size: 100%;
          }
          .holiday {
            background: url("~assets/img/workhere/Medicare.png") no-repeat;
            background-size: 100%;
          }
          .flex {
            background: url("~assets/img/workhere/Flexible.png") no-repeat;
            background-size: 100%;
          }
          .year-holiday {
            background: url("~assets/img/workhere/Vocation.png") no-repeat;
            background-size: 100%;
          }
          .salary {
            background: url("~assets/img/workhere/Salary.png") no-repeat;
            background-size: 100%;
          }
          .welfare-desc {
            height: 56px;
            width: 100px;
            margin-top: 20px;
            font-size: 16px;
            color: #333333;
            letter-spacing: 0;
            line-height: 28px;
            background-color: white;
          }
        }
        .welfare-item:nth-child(6) {
          margin-right: 0;
        }
      }
    }
  }

</style>
