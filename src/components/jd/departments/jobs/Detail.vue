<template>
  <div class="job-detail">
    <div class="back-to-list" @click="$emit('backToList')">
      <span></span>
      <a>返回职位列表</a>
    </div>

    <div class="campus-job-desc">
      <div class="campus-job-desc-content">
        <h3 class="job-title">{{job.title}}</h3>
        <p class="job-place">工作地点:&nbsp&nbsp{{job.locations}}</p>
        <p class="pub-date">职位发布于:&nbsp&nbsp{{job.time}}</p>
        <div class="apply-btn"><a :href="`mailto:${mailTo}`">立即申请</a></div>
      </div>
      <div class="job-duty-content">
        <h2 class="job-duty">岗位职责</h2>
        <ul class="duty-list">
          <li v-for="resp in job.responsibilities">{{resp}}</li>
        </ul>
      </div>
      <div class="job-req-content">
        <h2 class="job-duty">任职要求</h2>
        <ul class="req-list">
          <li v-for="req in job.requirements">{{req}}</li>
        </ul>
      </div>
      <div class="job-pro-content">
        <h2 class="job-duty">简历投递邮箱</h2>
        <ul class="pro-list">
          <li v-if="!job.pro">{{mailTo}}</li>
          <li v-for="pro in job.pro" v-else>{{pro}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import vueScrollTo from 'vue-scrollTo'

  export default {
    name: 'JobDetail',
    props: {
      job: {
        required: true
      },
      defaultMail: {
        type: String,
        default: 'hr@qiniu.com'
      }
    },
    computed: {
      mailTo () {
        if (this.job.pro && this.job.pro.length) {
          return this.job.pro[0]
        }
        return this.defaultMail
      }
    },
    methods: {
      scrollToTitle () {
        vueScrollTo.scrollTo('div.job-detail', 500, {
          easing: vueScrollTo.easing['ease-in'],
          offset: -30
        })
      }
    },
    mounted () {
      this.scrollToTitle()
    }
  }
</script>

<style lang="less" scoped>
.job-detail .back-to-list {
    // background-color: red;
    float: left;
    cursor: pointer;
}
.job-detail .back-to-list a {
    display: inline-block;;
    font-size: 16px;
    font-weight: 500;
    color: #333333;
    letter-spacing: 0;
    line-height: 28px;
}
.job-detail .back-to-list a:before {
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 12px;
    // background-color: grey;
    content:'';
    background-image: url('~assets/img/icons/arrow-left-grey.png');
    background-size: cover;
}
.campus-job-desc {
    width: 760px;
    // background-color: red;
    float: right;
}
.campus-job-desc-content {
    // background-color: yellow;
}
.campus-job-desc-content .job-title {
    font-size: 34px;
    color: #333333;
    letter-spacing: 0;
    line-height: 43px;
}
.campus-job-desc-content .job-place {
    margin-top: 40px;
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;
    line-height: 24px;
}
.campus-job-desc-content .pub-date {
    margin-top: 8px;
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;
    line-height: 24px;
}
.campus-job-desc-content .apply-btn {
    margin-top: 40px;
    .online-test-apply{
      color:#09f;
      border: 1px solid #09f;
      margin-left: 20px;
      background-color: #fff;
    }
     .online-test-apply:hover{
          color:#fff;
          border: 1px solid #09f;
          background-color: #09f;
        }

}
.campus-job-desc-content .apply-btn a {
    display: inline-block;
    width: 96px;
    height: 40px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
    background-color: #0099FF;
    transition: all 0.3s ease;
}
.job-duty-content {
    // background-color: blue;
    margin-top: 48px;
}
.job-duty-content .job-duty {
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    line-height: 28px;
    background-color: #fff;
}
.job-duty-content .duty-list {
    /*margin: 10px 0px;*/
    // background-color: yellow;
    margin-left: 20px;
    margin-top: 20px;
}
.job-duty-content .duty-list li {
    list-style-type: disc;
    // font-family: 'CoreSans N 45 Regular',sans-serif;
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;
    line-height: 24px;
}
.job-req-content {
    background-color: #fff;
    margin-top: 40px;
}
.job-req-content .job-duty {
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    line-height: 28px;
    background-color: #fff;
}
.job-req-content .req-list {
    /*margin: 10px 0px;*/
    // background-color: yellow;
    margin-left: 20px;
    margin-top: 20px;
}
.job-req-content .req-list li {
    list-style-type: disc;
    // font-family: sans-serif;
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;
    line-height: 24px;
}
/*加分项*/
.job-pro-content {
    background-color: #fff;
    margin-top: 40px;
}
.job-pro-content .job-duty {
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    line-height: 28px;
    background-color: #fff;
}
.job-pro-content .pro-list {
    /*margin: 10px 0px;*/
    // background-color: yellow;
    margin-left: 20px;
    margin-top: 20px;
}
.job-pro-content .pro-list li {
    list-style-type: disc;
    // font-family: 'CoreSans N 45 Regular',sans-serif;
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;
    line-height: 24px;
}
.job-pro-content .apply-btn {
    margin-top: 40px;
}
.job-pro-content .apply-btn a {
    display: inline-block;
    width: 96px;
    height: 40px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
    background-color: #0099FF;
    transition: all 0.3s ease;
}

</style>
