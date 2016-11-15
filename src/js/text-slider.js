Vue.component('text-slider', {
    template: '#text-slider',
    data: function() {
        return {
            currentIdx: 0,
            currentLeft: 0 + 'px',
            autoplay: false,
            timer: null,
            textData: [{
                name: '马逸清',
                job_title: '前端开发工程师',
                graduate: '2013 年毕业于上海大学',
                href: '#',
                imgsrc: './img/avatar/myq.png',
                alt: '',
                content: '由于提供的是技术类的产品，业务和技术的关系非常紧密，这也让我们的技术氛围比较好，是比较典型的工程师文化。我们喜欢思考问题的本质，尽量用简单的规则和办法去解决看似复杂的问题。这也是公司一直以来崇尚的文化，简单可信赖。'
            }, {
                name: '宋文灏',
                job_title: '后端开发工程师',
                graduate: '2016年毕业于上海交通大学',
                href: '#',
                imgsrc: './img/avatar/swh.png',
                alt: '',
                content: '如果你能够自发性地学习，希望得到快速的成长，希望尝试和大公司不一样的工作体验，有追求有理想，觉得年轻的时候不奋斗一下有点可惜，那么七牛对你来说可能是个不错的选择。'
            }, {
                name: '邵羽',
                job_title: '后端开发工程师',
                graduate: '2016年毕业于上海交通大学',
                href: '#',
                imgsrc: './img/avatar/sy.png',
                alt: '',
                content: '我是 2015 年 5 月 25 日加入七牛的。碰巧的是，我的入党日期也是 5 月 25 日，当时就有朋友开玩笑说在“我爱我”日这一天加入中国共产党是你送给自己最好的礼物，如今我也同样自豪的认为：在这一天加入七牛是我送给自己最好的礼物。'
            }, {
                name: '陈心',
                job_title: '后端开发工程师',
                graduate: '2016 年毕业于上海交通大学',
                href: '#',
                imgsrc: './img/avatar/cx.png',
                alt: '',
                content: '我是个比较害羞的人，对人际交往很不在行。但是七牛真的让人很放松，没有多余的社交，大家都专心做手头上的事情，在工作中建立友情。这是一家简单的公司，但是大家一起努力做着不简单的事。'
            }, {
                name: '罗轶斯',
                job_title: '活动运营专员',
                graduate: '2015 年毕业于四川音乐学院',
                href: '#',
                imgsrc: './img/avatar/lys.png',
                alt: '',
                content: '七牛给我的最大的感觉就是，工作氛围很好。在工作中，每一位小伙伴从专员到 CMO，每个人都在认真负责着自己的工作，毫不懈怠，我觉得年轻人就应该在这种工作圈中工作，才会得到提升。所以一直庆幸选择了七牛。'
            }, {
                name: '常龙',
                job_title: '销售管培生',
                graduate: '2016 年毕业于东北石油大学',
                href: '#',
                imgsrc: './img/avatar/cl.png',
                alt: '',
                content: '在七牛，你的个性可以得到充分的发挥。你不要担心别人会束缚你，你只需要尽情的舒展自己。所以在七牛，我有一种恋爱的感觉，这儿的环境很舒畅，让你不自觉的就融入其中。大家都是那么努力，所以你也在努力，让自己成为一个更好的自己。'
            }]
        }
    },
    computed: {
        getClass: {
            get: function() {
                var textArray = this.textData;
                return {
                    width: textArray.length * 940 + 'px',
                    left: this.currentLeft
                }
            },
            set: function(currentIdx) {
                this.currentLeft = -940 * currentIdx + 'px'
            }
        }
    },
    methods: {
        turn: function(i) {
            var now = this.currentIdx + i;
            var textArray = this.textData;
            // console.log(now)
            if (now < 0) {
                now = 0;
                console.log("前面已经没有啦")
            }
            //循环显示
            if (now >= textArray.length) {
                now = now - textArray.length;
                // console.log(now)
            }
            this.getClass = now;
            this.currentIdx = now;
            // console.log("当前区域 ID :" + this.currentIdx);
        },
        autoPlay: function() {
            var _that = this;
            this.timer = setInterval(function() {
                _that.turn(1)
            }, 3000);
            // console.log("自动轮播中~")
        },
        pause: function() {
            clearInterval(this.timer)
        },
        turnToPrev: function() {
            this.turn(-1);
        },
        turnToNext: function() {
            this.turn(1);
        }
    },
    ready: function() {
        if (this.autoplay == true) {
            this.autoPlay();
        }
    }
})
var slide = new Vue({
    el: '#app',
})

/*****视频轮播组件****/
var VideoCompon = Vue.extend({
        template: '#video-slider',
        components: {
            'Modal': {
                template: '#modal-template',
                methods: {
                    close: function() {
                        console.log("click close");
                        //关闭模态框
                        this.show = false;
                        // // PlayID 置空
                        this.readyPlayId = '';
                        // // // PlaySrc 置空
                        this.readyPlaySrc = '';
                        this.stopPlayer = true;
                        // console.log("stopPlayer 值:" + this.stopPlayer);
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
                stopPlayer: null

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
                    // console.log("前面已经没有啦")
                }
                //循环显示
                if (now >= videoArray.length) {
                    now = now - videoArray.length;
                    // console.log(now)
                }
                this.getClass = now;
                this.currentIdx = now;
                // console.log("当前视频 ID :" + this.currentIdx);
            },
            autoPlay: function() {
                var _that = this;
                this.timer = setInterval(function() {
                    _that.turn(1)
                }, 3000);
                // console.log("自动轮播中~")
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
                // console.log("点击视频:" + videoId);
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

            }
        },
        ready: function() {
            if (this.autoplay == true) {
                this.autoPlay();
            }
        }
    })
    // 全局注册 VideoCompon 组件
Vue.component('video-slider', VideoCompon);

var videoSlide = new Vue({
    el: '#video-container'
})