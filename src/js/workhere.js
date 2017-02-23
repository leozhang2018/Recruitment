Vue.component('slider', {
    template: '#slider',
    data: function() {
        return {
            currentIdx: 0,
            currentLeft: 0 + 'px',
            autoplay: false,
            timer: null, // 用在在点击btn 的时候关掉定时器 不然的话就会出现问题
            imgData: [{
                title: '',
                href: '#',
                imgsrc: './img/workhere/slider/1.jpg',
                alt: 'jpg1'
            }, {
                title: '',
                href: '#',
                imgsrc: './img/workhere/slider/2.jpg',
                alt: 'jpg2'
            }, {
                title: '',
                href: '#',
                imgsrc: './img/workhere/slider/3.jpg',
                alt: 'jpg3'
            }, {
                title: '',
                href: '#',
                imgsrc: './img/workhere/slider/4.jpg',
                alt: 'jpg4'
            }, {
                title: '',
                href: '#',
                imgsrc: './img/workhere/slider/5.jpg',
                alt: 'jpg5'
            }, {
                title: '',
                href: '#',
                imgsrc: './img/workhere/slider/6.jpg',
                alt: 'jpg6'
            }, {
                title: '',
                href: '#',
                imgsrc: './img/workhere/slider/7.jpg',
                alt: 'jpg7'
            }, {
                title: '',
                href: '#',
                imgsrc: './img/workhere/slider/8.jpg',
                alt: 'jpg8'
            }, {
                title: '',
                href: '#',
                imgsrc: './img/workhere/slider/9.jpg',
                alt: 'jpg9'
            }, {
                title: '',
                href: '#',
                imgsrc: './img/workhere/slider/10.jpg',
                alt: 'jpg10'
            }, {
                title: '',
                href: '#',
                imgsrc: './img/workhere/slider/11.jpg',
                alt: 'jpg11'
            }, {
                title: '',
                href: '#',
                imgsrc: './img/workhere/slider/12.jpg',
                alt: 'jpg12'
            }],
            startClick: null,
            first_pic: null,
            last_pic: null
        }
    },
    computed: {
        getClass: {
            get: function() {
                var imgArray = this.imgData;
                return {
                    width: (imgArray.length + 1) * 640 + 'px',
                    left: this.currentLeft
                }
            },
            set: function(currentIdx) {
                var imgArray = this.imgData;
                if (currentIdx === 0) {
                    this.first_pic = true;
                } else {
                    this.first_pic = false;
                }

                if (currentIdx === (imgArray.length - 1)) {
                    this.last_pic = true;
                } else {
                    this.last_pic = false;
                }
                this.currentLeft = - 660 * currentIdx + 'px'
            }
        }
    },
    methods: {
        turn: function(i) {
            //首先是让now = 1
            var now = this.currentIdx + i;
            var imgArray = this.imgData;
            // console.log(now)
            // 如果now == 0 说明是在第一张点击了一个向后的btn  {要么在第一张不动[此处选择0]， 要么返回第三张 --循环显示}
            if (now < 0) {
                now = 0;
                // console.log("前面已经没有啦");
                this.first_pic = true;
                return;
            }
            //循环显示
            if (now >= imgArray.length) {
                now = now - imgArray.length;
                // console.log(now)
            }
            this.getClass = now;
            this.currentIdx = now;
            // console.log("当前图片 ID :" + this.currentIdx);
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
            // this.pause(); //先关掉定时器 然后在turn()
            this.turn(-1);

        },
        turnToNext: function() {
            // this.pause();
            this.turn(1);
            this.startClick = true;
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
