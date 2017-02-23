//首页组件
var Index = Vue.extend({
        template: '#index',
        data: function() {
            return {
                jobInfo: jobInfo
            }
        }
    })
    //社招组件
var Social = Vue.extend({
    template: '#social',
    data: function() {
        return {
            msg: '社招组件',
            currentPath: '',
            jobInfo: jobInfo
        }
    },
    route: {
        data: function(transition) {
            transition.next({
                currentPath: transition.to.path
            })


        }
    }
})


//技术 tab 招聘标签
var Tech = Vue.extend({
    template: '#tech',
    data: function() {
        return {
            msg: '技术组件',
            currentPath: '',
            tech: jobInfo.tech,

        }
    }
})

var Business = Vue.extend({
    template: '#business',
    data: function() {
        return {
            msg: '市场组件',
            currentPath: '',
            business: jobInfo.business
        }
    }
})

var Product = Vue.extend({
    template: '#product',
    data: function() {
        return {
            msg: '产品组件',
            currentPath: '',
            product: jobInfo.product
        }
    }
})

var Design = Vue.extend({
    template: '#design',
    data: function() {
        return {
            msg: '设计组件',
            currentPath: '',
            design: jobInfo.design
        }
    }
})

var Marketing = Vue.extend({
    template: '#marketing',
    data: function() {
        return {
            msg: '销售组件',
            currentPath: '',
            marketing: jobInfo.marketing
        }
    }
})

var Jobfunction = Vue.extend({
    template: '#jobfunction',
    data: function() {
        return {
            msg: '市场组件',
            currentPath: '',
            jobfunction: jobInfo.function
        }
    }
})


/*详情组件*/
//tech JD 详情
var techJobDetail = Vue.extend({
    template: '#techjobDetail',
    data: function() {
        return {
            msg: 'tech 职位数据',
            currentPath: '',
            jobInfo: jobInfo.tech
        }
    }
})

//business JD 详情
var businessJobDetail = Vue.extend({
    template: '#businessjobDetail',
    data: function() {
        return {
            msg: 'business 职位数据',
            jobInfo: jobInfo.business
        }
    }
})


//product JD 详情
var productJobDetail = Vue.extend({
    template: '#productjobDetail',
    data: function() {
        return {
            msg: 'business 职位数据',
            jobInfo: jobInfo.product
        }
    }
})


//design JD 详情
var designJobDetail = Vue.extend({
    template: '#designjobDetail',
    data: function() {
        return {
            msg: 'design 职位数据',
            jobInfo: jobInfo.design
        }
    }
})

//marketing JD 详情
var marketingJobDetail = Vue.extend({
    template: '#marketingjobDetail',
    data: function() {
        return {
            msg: 'marketing 职位数据',
            jobInfo: jobInfo.marketing
        }
    }
})

//marketing JD 详情
var functionJobDetail = Vue.extend({
    template: '#functionjobDetail',
    data: function() {
        return {
            msg: 'function 职位数据',
            jobInfo: jobInfo.function
        }
    }
})



/* 创建路由器  */
var router = new VueRouter()
    // 默认路由
router.redirect({
        '/': '/index',
        '/social': '/social/tech'
    })
    /* 创建路由映射  */
router.map({
        '/index': {
            component: Index
        },
        '/social': {
            component: Social,
            // 定义子路由
            subRoutes: {
                '/tech': {
                    name: 'tech',
                    component: Tech
                },

                'techdetail/:id': {
                    name: 'techdetail',
                    component: techJobDetail
                },
                '/business': {
                    name: 'business',
                    component: Business
                },
                'businessdetail/:id': {
                    name: 'businessdetail',
                    component: businessJobDetail
                },
                '/product': {
                    name: 'product',
                    component: Product
                },
                'productdetail/:id': {
                    name: 'productdetail',
                    component: productJobDetail
                },
                '/design': {
                    name: 'design',
                    component: Design
                },
                'designdetail/:id': {
                    name: 'designdetail',
                    component: designJobDetail
                },
                '/marketing': {
                    name: 'marketing',
                    component: Marketing
                },
                'marketingdetail/:id': {
                    name: 'marketingdetail',
                    component: marketingJobDetail
                },
                '/function': {
                    name: 'jobfunction',
                    component: Jobfunction
                },
                'functiondetail/:id': {
                    name: 'jobfunctiondetail',
                    component: functionJobDetail
                },
            }
        }
    })
    /* 启动路由  */
var SocialProcessTab = Vue.extend({})
router.start(SocialProcessTab, '#socialJobView')
