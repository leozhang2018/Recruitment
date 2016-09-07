/*****视频轮播组件****/
var Parent = Vue.extend({
        template: '#video-slider',
        components: {
            'Modal': {
                template: '#modal-template',
                methods: {
                    close: function() {
                        console.log("click close");
                        //关闭模态框
                        this.show = false;
                        // PlayID 置空
                        this.readyPlayId = '';
                        // PlaySrc 置空
                        this.readyPlaySrc = '';
                        this.stopPlayer = true;
                        console.log("stopPlayer 值:" + this.stopPlayer);
                        //当前为利用异常停止
                    }
                },
                props: {
                    show: {
                        type: Boolean,
                        required: true,
                        twoWay: true
                    },
                    readyPlayId: {
                        type: String
                            // required: true,
                            // twoWay: true
                    },
                    readyPlaySrc: {
                        type: String
                            // required: true,
                            // twoWay: true
                    },
                    stopPlayer: {
                        type: Boolean
                            // required: true,
                            // twoWay: true
                    },
                }
            }

        },
        data: function() {
            return {
                currentIdx: 0,
                currentLeft: 0 + 'px',
                autoplay: false,
                timer: null,
                videoData: [{
                    id: '0',
                    name: 'video1',
                    href: '#1',
                    src: 'http://7u2eut.com1.z0.glb.clouddn.com/Hello,world%21Crazy,go.mp4',
                    poster: './img/campus/slider/Video-1.jpg',
                    contentType: 'video/mp4',
                    desc_title: '七牛云 2017 校园招聘',
                    desc: 'Hello, World! Crazy Go!<br>七牛云，期待你的加入！'
                }, {
                    id: '1',
                    name: 'video2',
                    href: '#2',
                    src: 'http://7xilik.com5.z0.glb.clouddn.com/qiniu.mp4',
                    poster: './img/campus/slider/Video-2.jpg',
                    contentType: 'video/mp4',
                    desc_title: '七牛，缩短想法到产品的距离',
                    desc: '七牛人一直在全力打造高效稳定的云服务平台，并基于此提供了一站式数据管理服务，能有效地帮助开发者提高开发效率、优化产品体验和降低业务风险，使客户缩短了产品从个想法到上线的距离。'
                }],
                styleObject: null,
                videoID: 0,
                showModal: false,
                readyPlayId: '',
                readyPlaySrc: '',
                playing: null,
                stopPlayer: null,
                hover: false,
                hoverObject: {
                    opacity: 0.1
                }

            }
        },
        computed: {
            getClass: {
                get: function() {
                    var videoArray = this.videoData;
                    return {
                        width: videoArray.length * 660 + 'px',
                        left: this.currentLeft
                    }
                },
                set: function(currentIdx) {
                    this.currentLeft = -660 * currentIdx + 'px';
                    this.videoID = currentIdx;

                }
            },
            setVideoSrc: {
                get: function() {
                    // this.readyPlaySrc;

                },
                set: function(currentVideoSrc) {
                    this.readyPlaySrc = currentVideoSrc;
                }
            },
            setVideoId: {
                get: function() {
                    // this.readyPlayId;

                },
                set: function(currentVideoId) {
                    this.readyPlayId = currentVideoId;
                    console.log("Set Video" + currentVideoId);
                }
            },
            stopVideo: {
                get: function() {
                    // this.stopPlayer;

                },
                set: function(currentVideoId) {
                    // console.log(this.stopPlayer);
                }
            }
        },
        methods: {
            turn: function(i) {
                var now = this.currentIdx + i;
                var videoArray = this.videoData;
                // console.log(now)
                if (now < 0) {
                    now = 0;
                    console.log("前面已经没有啦")
                }
                //循环显示
                if (now >= videoArray.length) {
                    now = now - videoArray.length;
                    // console.log(now)
                }
                this.getClass = now;
                this.currentIdx = now;
                console.log("当前视频 ID :" + this.currentIdx);
            },
            autoPlay: function() {
                var _that = this;
                this.timer = setInterval(function() {
                    _that.turn(1)
                }, 3000);
                console.log("自动轮播中~")
            },
            pause: function() {
                clearInterval(this.timer)
            },
            turnToPrev: function() {
                this.turn(-1);
            },
            turnToNext: function() {
                this.turn(1);
            },
            play: function(videoId) {
                var clickVideoName = this.videoData[videoId].name;
                console.log("点击视频:" + videoId);
                //切换文字
                this.videoID = videoId;
                //设置 SRC
                this.setVideoSrc = this.videoData[videoId].src;
                //设置 ID name
                this.setVideoId = clickVideoName;
                //显示模态框
                this.showModal = true;

                /* videojs 这坑先不填,后期自定义皮肤 */

                // this.turnToNext();
                // 是否显示播放 btn
                // this.styleObject = videoId;
                // 初始化播放器
                // var player = videojs('video2', {
                //         /* Options */
                //     },
                //     function() {
                //         console.log('播放就绪');
                //         // 开始播放
                //         this.play();
                //         // 播放结束事件
                //         this.on('ended', function() {
                //             console.log('播放结束');
                //         });
                //     });

            },
        },
        ready: function() {
            if (this.autoplay == true) {
                this.autoPlay();
            }
        }
    })
    // 全局注册Parent组件
Vue.component('video-slider', Parent);
var videoSlide = new Vue({
    el: '#video-container'
})
