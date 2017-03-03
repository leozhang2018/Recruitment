<template>
  <div class="modal-mask" v-show="show" transition="modal">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-body">
          <slot name="body">
            <div class="modal-default-button" @click="$emit('modalClose')"></div>
            <video class="video-js vjs-default-skin" width="1280px" height="720px" :src="videoSrc" preload autoplay controls></video>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      },
      videoSrc: {
        type: String
      }
    }
}
</script>

<style lang="less" scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity 0.3s ease;
}
.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}
.modal-container {
    width: 66.6%;
    margin: 0 auto;
    background-color: #000;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
}
.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}
.modal-body {
    // margin: 20px 0;
}
.modal-default-button {
    float: right;
    width: 32px;
    margin-right: -32px;
    margin-top: -16px;
    height: 32px;
    display: block;
    position: relative;
    // background-color: #;
    border-radius: 16px;
    background-image: url("~assets/img/icons/times.png");
    background-size: cover;
    cursor: pointer;

}
/*
 * the following styles are auto-applied to elements with
 * v-transition="modal" when their visiblity is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
.modal-enter,
.modal-leave {
    opacity: 0;
}
.modal-enter .modal-container,
.modal-leave .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}


.modal-mask video {
    width: 100%;
    height: 100%;
}
/*
  Player Skin Designer for Video.js
  http://videojs.com

  To customize the player skin edit
  the CSS below. Click "details"
  below to add comments or questions.
  This file uses some SCSS. Learn more
  at http://sass-lang.com/guide)

  This designer can be linked to at:
  http://codepen.io/heff/pen/EarCt/left/?editors=010
*/
.video-js {
    /* The base font size controls the size of everything, not just text.
     All dimensions use em-based sizes so that the scale along with the font size.
     Try increasing it to 15px and see what happens. */
    font-size: 10px;
    /* The main font color changes the ICON COLORS as well as the text */
    color: #fff;
}
/* The "Big Play Button" is the play button that shows before the video plays.
   To center it set the align values to center and middle. The typical location
   of the button is the center, but there is trend towards moving it to a corner
   where it gets out of the way of valuable content in the poster image.*/
.vjs-default-skin .vjs-big-play-button {
    /* The font size is what makes the big play button...big.
     All width/height values use ems, which are a multiple of the font size.
     If the .video-js font-size is 10px, then 3em equals 30px.*/
    font-size: 3em;
    /* We're using SCSS vars here because the values are used in multiple places.
     Now that font size is set, the following em values will be a multiple of the
     new font size. If the font-size is 3em (30px), then setting any of
     the following values to 3em would equal 30px. 3 * font-size. */
    /* 1.5em = 45px default */
    line-height: 1.5em;
    height: 1.5em;
    width: 3em;
    /* 0.06666em = 2px default */
    border: 0.06666em solid #fff;
    /* 0.3em = 9px default */
    border-radius: 0.3em;
    /* Align top left. 0.5em = 15px default */
    left: 0.5em;
    top: 0.5em;
}
/* The default color of control backgrounds is mostly black but with a little
   bit of blue so it can still be seen on all-black video frames, which are common. */
.video-js .vjs-big-play-button,
.video-js .vjs-control-bar,
.video-js .vjs-menu-button .vjs-menu-content {
    /* IE8 - has no alpha support */
    background-color: #2B333F;
    /* Opacity: 1.0 = 100%, 0.0 = 0% */
    background-color: rgba(43, 51, 63, 0.7);
}
/* Slider - used for Volume bar and Progress bar */
.video-js .vjs-slider {
    background-color: #73859f;
    background-color: rgba(115, 133, 159, 0.5);
}
/* The slider bar color is used for the progress bar and the volume bar
   (the first two can be removed after a fix that's coming) */
.video-js .vjs-play-progress,
.video-js .vjs-slider-bar,
.video-js .vjs-volume-level {
    background: #fff;
}
/* The main progress bar also has a bar that shows how much has been loaded. */
.video-js .vjs-load-progress {
    /* For IE8 we'll lighten the color */
    background: ligthen(#73859f, 25%);
    /* Otherwise we'll rely on stacked opacities */
    background: rgba(115, 133, 159, 0.5);
}
/* The load progress bar also has internal divs that represent
   smaller disconnected loaded time ranges */
.video-js .vjs-load-progress div {
    /* For IE8 we'll lighten the color */
    background: ligthen(#73859f, 50%);
    /* Otherwise we'll rely on stacked opacities */
    background: rgba(115, 133, 159, 0.75);
}
</style>
