<template>
  <div>
    <div v-if="!department.jobs || !department.jobs.length" class="job-not-open">
      <h2>暂无开放职位</h2>
    </div>
    <div v-else class="job-title-content">
      <h2>{{department.name}}类</h2>
      <h3>开放职位</h3>
    </div>
    <div class="list-items">
      <dl v-for="(job, idx) in department.jobs" class="list-onejob campusJob" @click="$emit('showJobDetail', idx)">
        <dt>{{ job.title }}</dt>
        <dd class="place">{{ job.locations }}</dd>
        <dd class="pubdate">发布日期：{{ job.time }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'JobsList',
    props: {
      department: {
        required: true
      }
    }
  }
</script>

<style lang="less" scoped>
.list-items {
    width: 700px;
    float: right;
    text-align: left;
    font-size: 13px;
    line-height: 28px;
    // background-color: yellow;
}
.list-items .list-onejob {
    padding: 14px 0;
    border-bottom: 1px solid #ebeef5;
    overflow: hidden;
    position: relative;
    cursor: pointer;
}
.list-items .list-onejob:first-child {
    padding-top: 0;
}
dd,
dl,
dt,
li,
ol,
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}
.list-items .list-onejob dt {
    float: left;
    width: 40%;
    margin-right: 20px;
    color: #525866;
}

.list-items .list-onejob dd {
    float: left;
    color: #7a8599;
    padding: 0;
}
.list-items .list-onejob .place {
    width: 230px;
    margin-right: 20px;
}
.job-title-content {
    // background-color: red;
    width: 136px;
    float: left;
    height: 86px;
}
.job-title-content h2,
.job-title-content h3 {
    font-size: 34px;
    color: #333333;
    letter-spacing: 0;
    line-height: 43px;
    margin: 0;
}
.job-title-content h3 {
    font-weight: 300;
}

.job-not-open {
    // background-color: red;
    // width: 136px;
    float: left;
    height: 86px;
}
.job-not-open h2,
.job-not-openh3 {
    font-size: 34px;
    color: #333333;
    letter-spacing: 0;
    line-height: 43px;
    margin: 0;
}
.job-not-open h3 {
    font-weight: 300;
}
</style>
