<template>
  <section class="departments-summary">
    <div class="departments-summary-header">
      <h2>这些机会，期待你加入</h2>
      <p>我们是一个简单的团队，希望成就不简单的事。
        <br> 我们是一群充满热情，追求创新的人，期待遇见同样的你。
      </p>

      <p v-if="!departments.length">暂无{{category}}岗位</p>
      <router-link :to="routeFor(departments[0])" v-else>查看{{category}}岗位</router-link>

      <ul class="departments-list">
        <template v-for="dept in departments">
          <router-link tag="li" :to="routeFor(dept)" class="department-item">
            <div class="department-img" :style="{'background-image': `url(${dept.img})`}"></div>
            <p class="department-desc">{{dept.name}}</p>
          </router-link>
        </template>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'DepartmentsSummary',
    props: {
      category: {
        type: String,
        required: true
      },
      departments: {
        type: Array,
        required: true
      },
      routeFor: {
        // should be a function to return a valid route location
        // according to the given department and optional job index.
        // means: function(dept: Department, idx?: int)
        type: Function,
        required: true
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "~assets/less/utils.less";
  .departments-summary {
    .content();
    height: 383px;
    padding: 120px 0;
    .departments-summary-header {
      h2 {
        font-size: 34px;
        color: #333333;
        line-height: 43px;
      }
      p {
        font-size: 18px;
        color: #666666;
        line-height: 32px;
        text-align: left;
        margin: 20px 0;
      }
      a {
        font-size: 16px;
        color: #1989FA;
        letter-spacing: 0;
        line-height: 28px;
        position: relative;
        font-family: 'Core Sans N 55 Medium';
      }
      a:after {
        display: inline-block;
        position: absolute;
        height: 16px;
        width: 16px;
        top: 50%;
        margin-top: -9px;
        margin-left: 12px;
        background-size: cover;
        content: '';
        background-image: url('~assets/img/icons/arrow-right-white.png');
      }
      .departments-list {
        margin-top: 80px;
        list-style: none;
        // background-color: black;
        overflow: hidden;
        font-family: 'Core Sans N 55 Medium';
        .department-item {
          float: left;
          display: inline-block;
          width: 16.6%;
          // padding: 29px 0;
          vertical-align: top;
          text-align: center;
          cursor: pointer;
          // background-color: yellow;
        }
        .department-item:first-child {
          margin-left: -48px;
        }
        .department-desc {
          font-size: 16px;
          text-align: center;
          color: #333333;
          line-height: 28px;
          // background-color: blue;
        }
        .department-img {
          display: inline-block;
          width: 80px;
          height: 80px;
          background-size: 80px 80px;
          background-position: center;
          background-repeat: no-repeat;
        }
      }
    }
  }

</style>
