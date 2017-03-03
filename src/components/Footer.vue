<template>
  <div class="g-footer">
    <div class="g-container">
      <div class="sns">
        <div class="icons-logo">
          <a href="http://qiniu.com" class="f-icon-logo"></a>
        </div>
        <ul>
          <li>
            <a class="github" href="https://github.com/qiniu" target="_blank"></a>
          </li>
          <li>
            <a class="weibo" href="http://weibo.com/qiniutek" target="_blank"></a>
          </li>
          <li class="li-qrcode">
            <a class="wechat" href="#"></a>
            <div class="qrcode">
              <span><img src="~assets/img/qiniu/qrcode.png" width="120" height="120"></span>
            </div>
          </li>
        </ul>
      </div>
      <div class="webmap">
        <ul id="menu-qn-footer" class="menu">
          <li><a>产品与服务</a>
            <ul class="sub-menu">
              <li><a href="http://qiniu.com/products/kodo">对象存储</a></li>
              <li><a href="http://qiniu.com/products/fusion">融合 CDN</a></li>
              <li><a href="http://qiniu.com/products/pili">直播云</a></li>
              <li><a href="http://qiniu.com/products/dora">数据处理</a></li>
              <li><a href="http://qiniu.com/pricing">价格</a></li>
            </ul>
          </li>
          <li><a>支持</a>
            <ul class="sub-menu">
              <li><a href="http://developer.qiniu.com/">开发者中心</a></li>
              <li><a href="https://segmentfault.com/qiniu">问答社区</a></li>
              <li><a href="http://blog.qiniu.com/">技术博客</a></li>
              <li><a href="http://hd.qiniu.com/arch">架构师实践日</a></li>
              <li><a href="https://support.qiniu.com/">工单</a></li>
            </ul>
          </li>
          <li><a>生态与合作</a>
            <ul class="sub-menu">
              <li><a href="http://hd.qiniu.com/eco">牛扶持</a></li>
              <li><a href="http://www.qiniu.com/cooperation">牛生态</a></li>
              <li><a href="http://qiniu.com/development-cooperation">开发合作</a></li>
              <li><a href="http://qiniu.com/channel">渠道合作</a></li>
              <li><a href="http://qiniu.com/links">友情链接</a></li>
            </ul>
          </li>
          <li><a>公司</a>
            <ul class="sub-menu">
              <li><a href="http://career.qiniu.com/aboutus.html">关于我们</a></li>
              <li><a target="_blank" href="http://career.qiniu.com/">加入我们</a></li>
              <li><a href="http://qiniu.com/contact">联系我们</a></li>
              <li><a href="http://qiniu.com/report">媒体报道</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="footer-legal">
        <div class="copyright">Copyright © 2017 <a href="http://qiniu.com">七牛云</a> Inc.</div>
        <ul class="footer-legal-links">
          <li><a href="http://qiniu.com/user-agreement">用户协议</a></li>
          <li><a href="http://qiniu.com/service-agreement">SLA 协议</a></li>
          <li><a href="https://status.qiniu.com/">健康状态</a></li>
        </ul>
        <div class="cloud-verify">
          <a target="_blank" rel="noopener" href="http://www.dca.org.cn/" class="verify-logo"></a>
        </div>
      </div>
      <div class="web-record"><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502000961" target="_blank" rel="noopener">沪公网安备 31011502000961 号</a><a
          href="http://www.miitbeian.gov.cn/" target="_blank">沪 ICP 备 11037377 号-5</a></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "~assets/less/utils.less";

.g-footer {
    position: relative;
    overflow: hidden;
    padding: 90px 0 86px;
    background-color: #1a1a1a;
}

.g-footer .g-container {
    .content();
    font-size: 14px;
    overflow: hidden;

    a {
        color: #fff;
        font-weight: 400;
        cursor: pointer;
    }
}

.g-footer .g-container .sns .icons-logo {
    margin-right: 237px;
    width: 94px;
    height: 30px;
    // background-color: blue;
}

.g-footer .g-container .sns {
    // background-color: red;
    float: left;
    width: 300px;

    ul {
        position: relative;
        margin-top: 39px;
        // background-color: yellow;
        li:first-child {
            padding-left: 0;
        }

        li {
            position: relative;
            display: inline-block;
            padding: 10px;
            margin-right: 5px;

            .github {
                display: block;
                width: 14px;
                height: 14px;
                background-image: url("~assets/img/icons/github.png");
                background-repeat: no-repeat;
                background-size: 14px 14px;
            }

            .weibo {
                display: block;
                width: 14px;
                height: 14px;
                background-image: url("~assets/img/icons/weibo.png");
                background-repeat: no-repeat;
                background-size: 14px 14px;
            }

            .wechat {
                display: block;
                width: 14px;
                height: 14px;
                background-image: url("~assets/img/icons/weixin.png");
                background-repeat: no-repeat;
                background-size: 14px 14px;
            }

            .qrcode {
                position: absolute;
                width: 140px;
                top: 35px;
                left: 50%;
                margin-left: -70px;
                max-height: 0;
                overflow: hidden;
                -webkit-transition: max-height 0.4s linear;
                -moz-transition: max-height 0.4s linear;
                transition: max-height 0.4s linear;
            }

            span {
                display: block;
                position: relative;
                margin-top: 10px;
                width: 140px;
                background: #fff;
            }

            span:before {
                content: '';
                position: absolute;
                width: 1px;
                height: 1px;
                border: 8px solid transparent;
                border-bottom-color: #fff;
                left: 50%;
                top: -17px;
                margin-left: -8px;
            }

            span img {
                width: 120px;
                height: 120px;
                padding: 10px;
                display: block;
            }
        }

        li:last-child:hover .qrcode {
            max-height: 200px;
        }
    }

    .icons-logo .f-icon-logo {
        display: block;
        width: 46px;
        height: 31px;
        background-image: url("~assets/img/qiniu/logo-white.png");
        background-repeat: no-repeat;
        background-size: 46px 31px;
        // background-color: yellow;
    }
}

.g-footer .g-container .webmap {
    // background-color: blue;
    ul {
        overflow: hidden;
        margin-top: -4px;

        li {
            float: left;
            width: 160px;
            margin-right: 20px;

            a {
                font-size: 16px;
                color: rgba(255, 255, 255, 0.502);
                font-weight: 400;
            }

            ul.sub-menu {
                margin-top: 21px;

                li {
                    float: none;
                    height: 43px;
                    line-height: 43px;

                    a {
                        font-weight: 500;
                        font-size: 14px;
                        color: #fff;
                    }
                }
            }
        }
    }
}

.g-footer .g-container .web-record {
    margin-top: 8px;

    a {
        font-size: 12px;
        margin-right: 12px;
    }
}

.g-footer .g-container .footer-legal {
    overflow: hidden;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    margin-top: 25px;
    padding-top: 36px;

    .copyright {
        float: left;
        margin-right: 30px;
        color: #fff;
    }

    .footer-legal-links {
        float: left;
        overflow: hidden;
        margin-top: 4px;

        li {
            float: left;
            border-right: 1px solid rgba(255, 255, 255, 0.4);
            margin-right: 20px;
            padding-right: 20px;
            height: 14px;
            line-height: 16px;

            a {
                white-space: nowrap;
                height: 14px;
                line-height: 14px;
            }
        }

        li:last-child {
            border: none;
        }
    }
    .cloud-verify{
        float: right;
        // background-color: yellow;
        .verify-logo{
        display: block;
        width: 30px;
        height: 35px;
        background-image: url("~assets/img/icons/kexinyun.png");
        background-repeat: no-repeat;
        background-size: 30px 35px;
        }
    }
}
</style>
