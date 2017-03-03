<template>
  <section class="campus-process">
    <h2 class="process-title">校招流程</h2>
    <div class="process-container">
      <ul class="process-list">
        <li class="process-item">
          <span class="time">即日起 - 4月2日</span>
          <span class="event">简历投递</span>
          <p class="desc">发送个人简历到:
            <a class="mail-to" href="mailto:fresh@qiniu.com"> fresh@qiniu.com</a>
            <br>如果邮件正文有简单的自我介绍和求职信就更好了~
          </p>
        </li>
        <li class="process-item">
          <span class="time">4月3日 - 4月7日</span>
          <span class="event">面试邀约</span>
          <p class="desc">我们会在一周的时间内，电话联系简历通过筛选的同学，安排面试；
            <br>期间请同学们注意保持手机畅通。
          </p>
        </li>
        <li class="process-item">
          <span class="time">４月10日 - 4月21日</span>
          <span class="event">面试＆offer</span>
          <p class="desc">我们将根据意向工作地及目前所在城市，协调安排面试形式及地点；
            <br>外地学生会尽量安排远程面试。
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'CampusProcess'
  }
</script>

<style lang="less" scoped>
  @import '~assets/less/utils.less';
  .campus-process {
    .content();
    height: 100%;
    margin-bottom: 120px;
    // background-color: #f5f5f5;
    // background-color: blue;
    .process-title {
      text-align: center;
      position: absolute;
      top: 60px;
      left: 0;
      font-size: 34px;
      color: #333333;
      line-height: 43px;
      // background-color: yellow;
    }
    .process-container {
      // background-color: yellow;
      // width: 100%;
      margin-left: 301px;
      position: relative;
      top: 60px;
      .nav-tab {
        // width: 154px;
        height: 32px;
        // background-color:red;
        .tab-list {
          // margin-top: 80px;
          list-style: none;
          // background-color: black;
          overflow: hidden;
          .tab-item {
            float: left;
            margin-right: 20px;
            a {
              font-size: 18px;
              color: #333333;
              letter-spacing: 0;
              line-height: 32px;
              text-decoration: none;
            }
            span {
              display: inline-block;
              height: 6px;
              width: 6px;
              border-radius: 3px;
              background: #CCCCCC;
              margin-top: 13px;
            }
            .active {
              color: #999999;
            }
          }
        }
      }
      .process-list {
        list-style: none;
        text-align: justify;
        margin-top: 80px;
      }
      .process-item {
        // width: 730px;
        display: inline-block;
        height: 48px;
        margin-bottom: 60px;
        background-color: #fff;
        position: relative;
        .time {
          font-size: 16px;
          color: #666666;
          letter-spacing: 0;
          line-height: 28px;
          display: inline-block;
          // background-color: black;
          width: 145px;
          vertical-align: top;
        }
        .event {
          display: inline-block;
          font-family: 'Core Sans N 55 Medium';
          font-size: 16px;
          font-weight: 500;
          color: #2F3033;
          letter-spacing: 0;
          line-height: 28px;
          // background-color: black;
          width: 90px;
          margin-left: 42px;
          vertical-align: top;
        }
        .desc {
          display: inline-block;
          font-size: 14px;
          color: #5E6166;
          letter-spacing: 0;
          line-height: 24px;
          // background-color: black;
          margin-left: 35px;
          vertical-align: top;
        }
        .mail-to {
          font-size: 14px;
          font-weight: 500;
          color: #2F3033;
        }
      }
    }
  }

</style>
