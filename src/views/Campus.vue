<template>
  <div>
    <banner
      :slogans="slogans"
      :bannerImg="bannerImg"
    >
    </banner>

    <jobs-description
      id="jd"
      category="校招"
      :departments="departments"
      :departmentCode="$route.params.department"
      :jobID="$route.params.id"
      :routeFor="routeFor"
      defaultMail="fresh@qiniu.com"
    >
    </jobs-description>

    <template v-if="!$route.params.department">
      <delimiter></delimiter>
      <process></process>
      <delimiter></delimiter>
      <staff-voice :autoplay="true":staffs="staffs"></staff-voice>
      <delimiter></delimiter>
      <video-slider :videos="videos"></video-slider>
    </template>

  </div>
</template>

<script>
  import vueScrollTo from 'vue-scrollTo'

  import Banner from '@/components/Banner'
  import JobsDescription from '@/components/jd'
  import Process from '@/components/Process'
  import StaffVoice from '@/components/StaffVoice'
  import VideoSlider from '@/components/video-slider'

  import {getCampusDepartments} from '@/services/departments'
  import {getStaffs} from '@/services/staffs'
  import {getVideos} from '@/services/videos'

  export default {
    name: 'Campus',
    components: {
      Banner,
      JobsDescription,
      Process,
      StaffVoice,
      VideoSlider
    },
    data () {
      return {
        slogans: [
          'HELLO, WORLD! CRAZY GO!',
          '极客世界，即刻出发！',
          '七牛云 2017 春季校招'
        ],
        bannerImg: require('assets/img/banners/campus.jpg'),
        departments: [],
        staffs: [],
        videos: []
      }
    },
    methods: {
      routeFor (dept, idx) {
        let location = {
          name: 'CampusJobs',
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
      getCampusDepartments().then(depts => {
        this.departments = depts
      })
      this.staffs = getStaffs()
      this.videos = getVideos()
    },
    beforeRouteEnter: (to, from, next) => {
      next(vm => {
        if (from.name === 'Index') {
          vueScrollTo.scrollTo('#jd', 500, {
            easing: vueScrollTo.easing['ease-in']
          })
        }
      })
    }
  }
</script>
