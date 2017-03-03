<template>
  <div class="job-wrap">
    <div class="campus-job-list">
      <ul class="nav nav-tabs">
        <template v-for="dept in departments">
          <router-link tag="li" :to="routeFor(dept)" active-class="active">
            <a>{{dept.name}}</a>
          </router-link>
        </template>

        <div style="display:none" class="dropdown">
          <span class="dropbtn">全部地点</span>
          <span class="arrow"></span>
          <div class="dropdown-content">
            <a href="#1">北京</a>
            <a href="#2">上海</a>
            <a href="#3">杭州</a>
            <a href="#4">广州</a>
            <a href="#4">深圳</a>
          </div>
        </div>
      </ul>

      <delimiter></delimiter>
    </div>

    <div class="job-list-detail">
        <job-detail
          :job="job"
          :defaultMail="defaultMail"
          @backToList="showJobsList"
          v-if="job"
        >
        </job-detail>

        <jobs-list
          :department="department"
          @showJobDetail="showJobDetail"
          v-else
        >
        </jobs-list>
      </div>
  </div>
</template>

<script>
  import vueScrollTo from 'vue-scrollTo'

  import JobsList from './jobs/List'
  import JobDetail from './jobs/Detail'

  export default {
    name: 'DepartmentDetail',
    components: {
      JobsList,
      JobDetail
    },
    props: {
      departments: {
        type: Array,
        required: true
      },
      department: {
        required: true
      },
      job: {
        default: null
      },
      defaultMail: {
        type: String
      },
      routeFor: {
        // should be a function to return a valid route location
        // according to the given department and optional job index.
        // means: function(dept: Department, idx?: int)
        type: Function,
        required: true
      }
    },
    methods: {
      showJobsList () {
        this.$router.push(this.routeFor(this.department))
      },
      showJobDetail (idx) {
        this.$router.push(this.routeFor(this.department, idx))
      },
      scrollToTabs () {
        vueScrollTo.scrollTo('div.job-wrap', 500, {
          easing: vueScrollTo.easing['ease-in']
        })
      }
    },
    watch: {
      '$route': 'scrollToTabs'
    },
    mounted () {
      this.scrollToTabs()
    }
  }

</script>

<style lang="less" scoped>
  .job-wrap {
    margin-top: 115px;
    // height: 800px;
    width: 100%;
    .nav-tabs > li.active > a,
    .nav-tabs > li.active > a:focus,
    .nav-tabs > li.active > a:hover {
      color: #0099FF;
      background-color: #ffffff;
      border: 0;
      border-bottom: 2px solid #1989FA;
      cursor: default;
    }
    .nav > li > a,
    .nav-tabs > li > a:hover {
      position: relative;
      display: block;
      padding: 15px 0;
      margin-right: 40px;
      font-family: 'Core Sans N 55 Medium';
      font-size: 16px;
      font-weight: 500;
      color: #666666;
      letter-spacing: 0;
      line-height: 28px;
    }
    .nav > li > a:hover,
    .nav-tabs > li > a:hover {
      color: #0099FF;
      background-color: inherit;
      /*transition: all 0.3s ease;*/
    }
    .campus-job-list {
      width: 1060px;
      position: relative;
      margin: 0 auto;
      // background-color: yellow;
      ul {
        overflow: hidden;
        /*background-color: black;*/
      }
      li {
        float: left;
        /*background-color: black;*/
      }
    }
    /*下拉组件*/
    .campus-job-list .dropdown {
      display: inline-block;
      float: right;
      margin-top: 15px;
      cursor: pointer;
    }
    .campus-job-list .dropdown .dropbtn {
      // background-color: red;
      font-size: 16px;
      color: #666666;
      letter-spacing: 0;
      line-height: 28px;
    }
    .campus-job-list .dropdown .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 95px;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    .campus-job-list .dropdown .dropdown-content li {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }
    .campus-job-list .dropdown .dropdown-content li:hover {
      background-color: #f1f1f1;
    }
    .campus-job-list .dropdown:hover .dropdown-content {
      display: block;
      position: absolute;
      z-index: 999;
    }
    .campus-job-list .dropdown:hover .dropbtn {
      // background-color: #3e8e41;
    }
    .campus-job-list .dropdown .arrow {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 14px;
      background-image: url('~assets/img/campus/Select.png');
      background-size: cover;
    }
    .job-list-detail {
      width: 1060px;
      overflow: hidden;
      position: relative;
      margin: 80px auto;
      // background-color: blue;
    }
  }
</style>
