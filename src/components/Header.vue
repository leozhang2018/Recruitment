<template>
  <div class="g-header">
    <div class="g-container">
      <router-link :to="{name: 'Index'}" class="logo"></router-link>
      <div class="title">
        <router-link :to="{name: 'Index'}">七牛招聘</router-link>
      </div>
      <ul class="nav">
        <li><router-link :to="{name: 'SocialJobs'}" class="nav-link">社会招聘</router-link></li>
        <li><router-link :to="{name: 'CampusJobs'}" class="nav-link">春季校招</router-link></li>
        <li><router-link :to="{name: 'About'}" class="nav-link">认识七牛</router-link></li>
        <li><router-link :to="{name: 'WorkHere'}" class="nav-link">人在七牛</router-link></li>
      </ul>
      <div class="back">
        <a href="http://www.qiniu.com/" class="back-homepage-btn"><span>返回官网</span></a>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "~assets/less/utils.less";
@header-height: 80px;

.g-header {
    position: relative;
    top: 0;
    width: 100%;
    font-family: 'Core Sans N 55 Medium';
    //min-width: 960px;
    background-color: #fff;
    // border-bottom: 1px solid #e6e9f0;
    .g-container {
        .content()
    }
}

.g-header .logo {
    position: absolute;
    left: 0;
    top: 22px;
    width: 45px;
    height: 30px;
    background-size: 45px;
    background-image: url("~assets/img/qiniu/logo.png");
    background-position: center;
    background-repeat: no-repeat;
    // background-color: blue;
}

.g-header .title {
    position: absolute;
    left: 57px;
    top: 25px;
    // width: 72px;
    // background-color: red;
    a {
        color: #333333;
        height: 32px;
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0;
        line-height: 32px;
    }
}
@login-height: 40px;
@login-content-height: @login-height - 1px * 2;
@hover-color: #1989fa;

.g-header .back {
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px 0;
    // background-color: blue;
    .back-homepage-btn {
        display: inline-block;
        width: 96px;
        height: 40px;
        color: #666666;
        font-size: 14px;
        font-weight: 500;
        line-height: @login-height;
        text-align: center;
        border: 1px solid #CCCCCC;
        background-color: white;
        transition: all 0.3s ease;
    }

    .back-homepage-btn:hover {
        background-color: @hover-color;
        color: #fff;
        border: 1px solid @hover-color;
    }
}

.g-header .g-container .nav {
    line-height: @header-height;
    text-align: left;
    margin-left: 180px;
    font-size: 14px;
    font-weight: 500;
    // background-color: blue;
}

.g-header .g-container .nav li {
    display: inline-block;
}

.g-header .g-container .nav li .nav-link {
    box-sizing: border-box;
    color: #666666;
    margin: 0 20px;
    display: inline-block;
    font-size: 14px;
}

.g-header .g-container .nav li .nav-link:first-child {
    margin-left: 0;
}
</style>
