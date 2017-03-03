<template>
  <div id="app">
    <global-header></global-header>
    <router-view></router-view>
    <global-footer></global-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    'global-header': Header,
    'global-footer': Footer
  }
}
</script>

<style lang="less">
@import "~assets/less/utils.less";
@import "~assets/less/normalize.css";

body,
h1,
h2,
h3,
h4,
h5,
h6,
p {
    padding: 0;
    margin: 0;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
}

body,
html {
    font-family: "Core Sans N 45 Regular","Core Sans N 55 Medium",'Helvetica Neue', Helvetica, "PingFang SC","Hiragino Sans GB","微软雅黑","Microsoft Yahei","WenQuanYi Micro Hei", Arial, Verdana, sans-serif !important;
}

.icon {
    display: inline-block;
}

.hidden,
iframe {
    display: none;
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

a,
a:focus,
a:hover,
a:visited {
    text-decoration: none;
    outline: 0;
}

body {
    //min-width: 960px;
    // @media @phone {
    //     min-width: auto;
    //     width: 100%;
    // }
}
</style>
