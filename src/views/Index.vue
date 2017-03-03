<template>
  <div>
    <banner
      :slogans="slogans"
      :bannerImg="bannerImg"
      :showGuide="true"
      :guideTarget="'campus'"
      :guideText="guideText"
      arrowOrientation="right"
    >
    </banner>

    <video-slider :videos="videos"></video-slider>
  </div>
</template>

<script>
  import Banner from '@/components/Banner'
  import VideoSlider from '@/components/video-slider'

  import {getVideos} from '@/services/videos'

  export default {
    name: 'Index',
    components: {
      Banner,
      VideoSlider
    },
    data () {
      return {
        slogans: [
          'HELLO, WORLD! CRAZY GO!',
          '极客世界，即刻出发！',
          '七牛云 2017 春季校招'
        ],
        guideText: [
          '2017',
          '春季校招'
        ],
        bannerImg: require('assets/img/banners/campus.jpg'),
        videos: []
      }
    },
    created () {
      this.videos = getVideos()
    }
  }

</script>
