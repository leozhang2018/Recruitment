$(function () {
  // tab DOMs
  var tab = {
    items: $('.j-tab-item'),
    contents: $('.j-tab-content')
  };

  // switch tab operation
  var switchTab = function (target) {
    // get target DOMs
    var query = '[data-tab=' + target + ']';
    var item = tab.items.filter(query);
    var content = tab.contents.filter(query);

    // do update DOM state if targets exist
    if (item.length && content.length) {
      tab.items.removeClass('on');
      item.addClass('on');
      tab.contents.removeClass('show');
      content.addClass('show');
    }
  };

  // switch tab on tab-item clicked
  tab.items.on('click', function () {
    var target = $(this).data('tab');
    switchTab(target);
  });

  // get initial tab from location.hash (default: player)
  var location = window.location;
  var initial = location.hash ? location.hash.slice(1) : 'player';

  // do initial switch
  switchTab(initial);
});
