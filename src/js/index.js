$(function () {
  var body = $(document.body);
  var banner = $('.j-banner');
  var bodyPaddingTop = parseInt(body.css('padding-top'), 10) || 0;

  var scrolling = false;
  var skipBannner = function () {
    scrolling = true;
    body.animate({ scrollTop: banner.height() - bodyPaddingTop }, 500, function () {
      scrolling = false;
    });
  };

  $('.j-down').on('click', function () {
    skipBannner();
  });

  var moveStart = null;

  var getTouchInfo = function (e) {
    try {
      var touch = e.originalEvent.changedTouches[0];
      return {
        x: touch.clientX,
        y: touch.clientY
      };
    } catch (e) {
      return true;
    }
  };

  banner.on('touchstart', function (e) {
    moveStart = getTouchInfo(e);
  });

  body.on('touchend', function () {
    moveStart = null;
  });

  banner.on('touchmove', function (e) {
    // not started from banner
    if (!moveStart) {
      return;
    }

    var move = getTouchInfo(e);

    // move up
    if (
      move !== true
      && move.y >= moveStart.y
    ) {
      return;
    }

    e.preventDefault();

    // already scrolling
    if (scrolling) {
      return;
    }

    skipBannner();
  });

  var $video, $videoBgRatio, $videoModel, $videoSection, updateVideoBgHeight;
  $videoModel = $('.video-source');
  $videoSection = $('.video-mp4');
  $video = $videoModel.find('video')[0];
  $videoBgRatio = 1080 / 1920;
  updateVideoBgHeight = function() {
    var $marginTop;
    $videoSection.height(Math.floor($videoSection.width() * $videoBgRatio));
    $marginTop = ($videoModel.height() - $videoSection.height()) / 2;
    $videoSection.css('marginTop', $marginTop);
  };
  $('#video-open').on('click', function() {
    body.addClass('video-model-show');
    $videoModel.show();
    $video.play();
    updateVideoBgHeight();
  });
  $('.close-btn').on('click', function() {
    body.removeClass('video-model-show');
    $videoModel.hide();
    $video.pause();
    $video.currentTime = 0;
  });
});