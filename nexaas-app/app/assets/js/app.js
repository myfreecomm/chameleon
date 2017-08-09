$(document).ready(function() {

  $('.btn-show-menu').on('click', openMenu);

  $('.btn-close-menu').on('click', closeMenu);

  $('.dropdown-hover').on('click', function() {
    if ( $('.chameleon-menu').hasClass('open') ) {
      $(this).siblings().addClass('collapse');
    }
  });

  $('.chameleon-dropdown').on({
    focusout: function () {
      $(this).data('timer', setTimeout(function () {
        $(this).removeClass('visible');
      }.bind(this), 0));
    },
    focusin: function () {
      clearTimeout($(this).data('timer'));
    }
  });

  $('.dropdown-toggle').on({
    click: function (e) {
      e.preventDefault();
      $(this.hash).toggleClass('active').focus();
      $(this).siblings().toggleClass('visible').focus();
    },
    focusout: function () {
      $(this).siblings().data('timer', setTimeout(function () {
        $(this).siblings().removeClass('visible');
      }.bind(this), 0));
    },
    focusin: function () {
      clearTimeout($(this).siblings().data('timer'));
    }
  });

  $('.btn-search').on('click', showSearch);

  //Find another solution to this

  $('.chameleon-search-overlay').on('click', function() {
    $('.chameleon-search').hide(300);
  });

  $('.chameleon-search-content').on('click', function(e) {
    e.stopPropagation();
  });

});

var openMenu = function(e) {
  e.preventDefault();
  $('.chameleon-nav, .chameleon-menu, .chameleon-menu--helpers').addClass('open');
}

var closeMenu = function() {
  $('.chameleon-nav, .chameleon-menu, .chameleon-menu--helpers').removeClass('open');
  $('.chameleon-dropdown').removeClass('collapse');
}

var showSearch = function(e) {
  e.preventDefault();
  $('.chameleon-search').show();
  $('.chameleon-search-form-input').val('').focus();
}

$(window).resize(function() {
  if ( $(window).width() >= 768 ) {
    closeMenu();
  }
});
