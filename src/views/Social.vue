<template>
  <div>
    <banner
      :slogans="slogans"
      :bannerImg="bannerImg"
      :showGuide="true"
      guideText="查看职位"
      arrowOrientation="down"
      v-scroll-to="'#jd'"
    >
    </banner>

    <jobs-description
      id="jd"
      category="社招"
      :departments="departments"
      :departmentCode="$route.params.department"
      :jobID="$route.params.id"
      :routeFor="routeFor"
      defaultMail="hr@qiniu.com"
    >
    </jobs-description>
  </div>
</template>

<script>
  import Banner from '@/components/Banner'
  import JobsDescription from '@/components/jd'
  import {getSocialDepartments} from '@/services/departments'

  export default {
    name: 'Social',
    components: {
      Banner,
      JobsDescription
    },
    data () {
      return {
        slogans: [
          '你的明天，七牛的未来。',
          '加入我们，与聪明人为伍，与牛人共事，你的未来注定不同凡响。'
        ],
        bannerImg: require('assets/img/banners/social.jpg'),
        departments: []
      }
    },
    methods: {
      routeFor (dept, idx) {
        let location = {
          name: 'SocialJobs',
          params: {}
        }
        if (dept && dept.code) {
          location.params.department = dept.code
        }
        if (idx || idx >= 0) {
          location.params.id = idx
        }
        return location
      }
    },
    created () {
      getSocialDepartments().then(depts => {
        this.departments = depts
      })
    }
  }
</script>
