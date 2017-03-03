<template>
  <div>
    <banner :slogans="['我们是一家什么样的公司']" :description="description" :bannerImg="bannerImg">
    </banner>
    <section class="product-journey">
      <div class="product-journey-content">
        <div class="desc">
          <p>产品历程
          </p>
          <h2>我们自 2011 年成立以来一直保持着迅猛的发展势头</h2>
        </div>
        <div class="timeline">
          <div class="container-left">
            <dl class="left">
              <dt class="time">2011 年 08 月</dt>
              <dd class="event">七牛云成立</dd>
            </dl>
            <dl class="left">
              <dt class="time">2011 年 12 月</dt>
              <dd class="event">面向开发者的公有云存储服务完成研发上线，并快速获得第一批大客户</dd>
            </dl>
            <dl class="left">
              <dt class="time">2012 年</dt>
              <dd class="event">成为国内首个采用 Go 语言进行大规模项目研发的团队，并用 Go 实现了分布式对象存储系统的核心服务</dd>
            </dl>
            <dl class="left">
              <dt class="time">2014 年 07 月</dt>
              <dd class="event">存储 2.0 上线，节省单位存储成本 62%</dd>
            </dl>
            <dl class="left">
              <dt class="time">2014 年 12 月</dt>
              <dd class="event">海外加速服务上线，覆盖了全球 31 个国家共 54 个地区</dd>
            </dl>
          </div>

          <div class="container-right">
            <dl class="right">
              <dt class="time">2014 年</dt>
              <dd class="event">将云服务的后端基于 Docker 进行微服务化，提出组件即服务 ＋ 场景化模式结构，为用户提供更定制化、更贴近用户实际应用需求的数据服务</dd>
            </dl>
            <dl class="right">
              <dt class="time">2015 年 03 月</dt>
              <dd class="event">推出系统健康状态实时监控让云服务在阳光下运行</dd>
            </dl>
            <dl class="right">
              <dt class="time">2015 年 08 月</dt>
              <dd class="event">基于容器技术的数据处理平台正式发布</dd>
            </dl>
            <dl class="right">
              <dt class="time">2016 年 05 月</dt>
              <dd class="event">移动时代的直播云服务上线</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
    <section class="capital-journey">
      <div class="capital-journey-content">
        <div class="desc">
          <p>资本历程
          </p>
          <h2>我们吸引了众多投资者的目光</h2>
        </div>
        <div class="timeline">
          <div class="container-left">
            <div class="container-block">
              <h2>A</h2>
              <p>
                轮
              </p>

              <dl>
                <dt class="time">2012 年 02 月</dt>
                <dd class="event">获得数百万元 A 轮融资，由经纬中国投资</dd>
              </dl>
            </div>
            <div class="container-block">
              <h2>C</h2>
              <p>
                轮
              </p>
              <dl>
                <dt class="time">2014 年 08 月</dt>
                <dd class="event">获得 C 轮数千万美元融资，由宽带资本领投，经纬中国和启明创投跟投</dd>
              </dl>
            </div>
          </div>
          <div class="container-right">
            <div class="container-block">
              <h2>B</h2>
              <p>
                轮
              </p>
              <dl>
                <dt class="time">2013 年 01 月</dt>
                <dd class="event">获得启明创投，经纬中国千万美元 B 轮投资</dd>
              </dl>
            </div>
            <div class="container-block">
              <h2>D</h2>
              <p>
                轮
              </p>
              <dl>
                <dt class="time">2016 年 02 月</dt>
                <dd class="event">完成 D 轮融资，企业用户达到 40 万＋，打造以数据为核心的场景化 PaaS 云服务</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="wish">
      <div class="desc">
        <p>七牛愿景
        </p>
        <h2>建立诚信的、高效的、协作的、全球化的新商业文明。</h2>
      </div>
    </section>


    <section class="culture">
      <div class="culture-content">
        <div class="desc">
          <p>七牛文化
          </p>
          <h2>简单·可信赖</h2>
        </div>
        <ul class="culture-list">
          <li class="culture-item item-1">
            <div class="culture-item-img"></div>
            <h4 class="culture-item-title">图书馆文化</h4>
            <p class="culture-item-desc">我们应坚持创业于图书馆这种做事风格，化繁为简，关注问题本质，从而持续创造出可信赖的产品和服务。我们坚决反对一切表面文章，拒绝办公室政治。</p>
          </li>
          <li class="culture-item item-2">
            <div class="culture-item-img"></div>
            <h4 class="culture-item-title">极客精神</h4>
            <p class="culture-item-desc">极客精神不是技术团队的专有名词，应体现在工作中的方方面面。我们希望每一个团队都可以每时每刻努力思考，如何用优雅而创新的方式面对挑战。</p>
          </li>
          <li class="culture-item item-3">
            <div class="culture-item-img"></div>
            <h4 class="culture-item-title">微服务团队</h4>
            <p class="culture-item-desc">我们是一个微服务公司，每个团队都需要明确目标客户和核心价值。日常工作应围绕客户为中心开展，并持续改进微服务能力和服务品质。</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="value-duty">
      <div class="value">
        <div class="desc">
          <p>七牛价值观
          </p>
          <h2>诚信&nbsp&nbsp价值&nbsp&nbsp协作&nbsp&nbsp奋斗&nbsp&nbsp创新</h2>
          <p class="content">
            诚信：正直坦荡，信守承诺，言行一致
            <br> 价值：为客户创造价值，结果导向
            <br> 协作：共同承担，主人翁意识，成就他人
            <br> 奋斗：挑战极限，以更高标准要求自己
            <br> 创新：拥抱变化，反思并及时调整思路
          </p>
        </div>
      </div>
      <div class="duty">
        <div class="desc">
          <p>七牛使命
          </p>
          <h2>产品 ＝ 七牛云 . 服务（想法）</h2>
          <p class="content">
            七牛，帮助客户缩短从产品想法到产品上线的距离。客户
            <br>的好想法加上七牛云服务等于好产品。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Banner from '@/components/Banner'
  export default {
    name: 'About',
    components: {
      Banner
    },
    data () {
      return {
        description: '七牛云是国内领先的企业级公有云服务商，致力于打造以数据为核心的场景化 PaaS 服务。围绕富媒体场景，七牛先后推出了对象存储，融合 CDN 加速，数据通用处理，内容反垃圾服务，以及直播云服务等。目前，七牛云已经在为 50 多万家企业提供服务，亲历互联网创新创业发展的同时，也深入理解传统企业转型过程中的云服务需求场景，推出了有针对性的一系列行业解决方案。',
        bannerImg: require('assets/img/banners/about.jpg')
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "~assets/less/utils.less";
  .product-journey {
    .content();
    height: 832px;
    // background-color: yellow;
    .product-journey-content {
      height: 592px;
      width: 100%;
      position: absolute;
      top: 50%;
      margin-top: -296px;
      // background-color: blue;
      .desc {
        width: 640px;
        height: 136px;
        // background-color: red;
        p {
          font-size: 22px;
          color: #666666;
          letter-spacing: 0;
          line-height: 30px;
        }
        h2 {
          width: 640px;
          margin-top: 20px;
          font-size: 34px;
          color: #333333;
          letter-spacing: 0;
          line-height: 43px;
        }
      }
      .list-content() {
        .time {
          display: inline-block;
          width: 93px;
          font-size: 14px;
          font-weight: 500;
          color: #333;
          letter-spacing: 0;
          line-height: 24px;
          // background-color: #ff0;
        }
        .event {
          width: 280px;
          font-size: 14px;
          color: #666666;
          letter-spacing: 0;
          line-height: 24px;
          float: right;
          // background-color: blue;
        }
      }
      .timeline {
        width: 100%;
        height: 376px;
        margin-top: 80px;
        // background-color: green;
        .container-left {
          width: 400px;
          // background-color: red;
          float: left;
          .left {
            width: 400px;
            margin-bottom: 40px;
            overflow: hidden;
            position: relative;
            // background-color: red;
            .list-content();
          }
          .left:last-child {
            margin-bottom: 0;
          }
        }
        .container-right {
          width: 400px;
          // background-color: black;
          margin-left: 50%;
          .right {
            width: 400px;
            margin: 40px 0 40px 60px;
            overflow: hidden;
            position: relative;
            // background-color: red;
            .list-content();
          }
        }
      }
    }
  }

  .container-block-content() {
    width: 530px;
    height: 110px;
    // background-color: orange;
    h2 {
      display: inline-block;
      width: 40px;
      font-family: 'Core Sans N 15 Thin';
      font-size: 62px;
      color: #333333;
      letter-spacing: 0;
      // background-color: blue;
      line-height: 58px;
    }
    p {
      display: inline-block;
      font-size: 28px;
      font-weight: 300;
      color: #333333;
      letter-spacing: 0;
    }
    dl {
      top: 0;
      position: absolute;
      display: inline-block;
      margin-left: 44px;
      // background-color: blue;
    }
    dl > dt {
      font-size: 14px;
      color: #333333;
      letter-spacing: 0;
      line-height: 24px;
    }
    dl > dd {
      width: 289px;
      font-size: 14px;
      color: #666666;
      letter-spacing: 0;
      line-height: 24px;
      margin-top: 10px;
    }
  }

  .capital-journey {
    position: relative;
    width: 100%;
    height: 638px;
    background-color: #F5F5F5;
    .capital-journey-content {
      height: 398px;
      width: 1060px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -530px;
      margin-top: -199px;
      // background-color: blue;
      .desc {
        width: 640px;
        height: 93px;
        // background-color: yellow;
        p {
          font-size: 22px;
          color: #666666;
          letter-spacing: 0;
          line-height: 30px;
        }
        h2 {
          width: 640px;
          margin-top: 20px;
          font-size: 34px;
          color: #333333;
          letter-spacing: 0;
          line-height: 43px;
        }
      }
      .timeline {
        height: 220px;
        width: 100%;
        margin-top: 85px;
        // background-color: black;
        .container-left {
          width: 400px;
          // background-color: red;
          float: left;
          .container-block {
            position: relative;
            .container-block-content();
          }
        }
        .container-right {
          width: 400px;
          // background-color: green;
          margin-left: 50%;
          .container-block {
            position: relative;
            .container-block-content();
          }
        }
      }
    }
  }

  .wish {
    .content();
    height: 333px;
    // background-color: yellow;
    position: relative;
    .desc {
      position: absolute;
      top: 50%;
      margin-top: -46.5px;
      width: 816px;
      height: 93px;
      // background-color: yellow;
      p {
        font-size: 22px;
        color: #666666;
        letter-spacing: 0;
        line-height: 30px;
      }
      h2 {
        margin-top: 20px;
        font-size: 34px;
        color: #333333;
        letter-spacing: 0;
        line-height: 43px;
      }
    }
  }

  .culture {
    .content();
    height: 517px;
    // background-color: blue;
    .culture-content {
      height: 153px;
      width: 100%;
      // background-color: red;
      .desc {
        width: 640px;
        height: 93px;
        // background-color: blue;
        p {
          margin-top: 0;
          font-size: 22px;
          color: #666666;
          letter-spacing: 0;
          line-height: 30px;
        }
        h2 {
          width: 640px;
          margin-top: 20px;
          font-size: 34px;
          color: #333333;
          letter-spacing: 0;
          line-height: 43px;
        }
      }
      .culture-list {
        margin-top: 60px;
        .item-1 .culture-item-img {
          display: inline-block;
          width: 81px;
          height: 80px;
          background: url("~assets/img/icons/library.jpg");
          background-repeat: no-repeat;
          background-size: 100%;
        }
        .item-2 .culture-item-img {
          display: inline-block;
          width: 81px;
          height: 80px;
          background: url("~assets/img/icons/geek.jpg");
          background-repeat: no-repeat;
          background-size: 100%;
        }
        .item-3 .culture-item-img {
          display: inline-block;
          width: 81px;
          height: 80px;
          background: url("~assets/img/icons/micro.jpg");
          background-repeat: no-repeat;
          background-size: 100%;
        }
        .culture-item {
          width: 260px;
          float: left;
          display: inline-block;
          margin-left: 100px;
          vertical-align: top;
          text-align: center;
          .culture-item-title {
            margin: 20px 0;
            font-size: 16px;
            color: #333333;
            letter-spacing: 0;
            line-height: 28px;
          }
          .culture-item-desc {
            font-size: 14px;
            color: #666666;
            letter-spacing: 0;
            line-height: 24px;
            text-align: left;
            width: 270px;
          }
        }
        .item-1 {
          margin-left: 0;
        }
      }
    }
  }

  .value-duty {
    .content();
    height: 253px;
    // background-color: yellow;
    margin-bottom: 120px;
    .value {
      // background-color: red;
      width: 480px;
      float: left;
    }
    .duty,
    .value {
      .desc {
        p {
          font-size: 22px;
          color: #666666;
          letter-spacing: 0;
          line-height: 30px;
        }
        h2 {
          font-size: 34px;
          color: #333333;
          letter-spacing: 0;
          line-height: 43px;
          margin-top: 20px;
        }
        .content {
          font-size: 16px;
          color: #666666;
          letter-spacing: 0;
          line-height: 28px;
          margin-top: 20px;
        }
      }
    }
    .duty {
      // background-color: blue;
      float: left;
      margin-left: 120px;
    }
  }

</style>
