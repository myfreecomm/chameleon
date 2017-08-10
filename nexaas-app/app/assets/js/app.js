$(document).ready(function() {

  $('.btn-show-menu').on('click', openMenu);

  $('.btn-close-menu').on('click', closeMenu);

  $('.dropdown-toggle').on({
    click: function (e) {
      e.preventDefault();
      $(this).next('.chameleon-dropdown').toggleClass('visible').focus();
    },
    focusout: function () {
      $(this).next('.chameleon-dropdown').data('timer', setTimeout(function () {
        $(this).next('.chameleon-dropdown').removeClass('visible');
      }.bind(this), 0));
    },
    focusin: function () {
      clearTimeout($(this).next('.chameleon-dropdown').data('timer'));
    }
  });

  $('.dropdown-toggle').next('.chameleon-dropdown').on({
    focusout: function () {
      $(this).data('timer', setTimeout(function () {
        $(this).removeClass('visible');
      }.bind(this), 0));
    },
    focusin: function () {
      clearTimeout($(this).data('timer'));
    }
  });

  $('.btn-search').on('click', showSearch);

  $('.chameleon-search-overlay, .btn-close-search').on('click', function() {
    $('.chameleon-search').hide(300);
  });

  $('.chameleon-search-content').on('click', function(e) {
    e.stopPropagation();
  });

  $('.chameleon-search-form-input').on('input', function() {
    if ( $(this).val() === '') {
      $('.chameleon-search-results').slideUp(300);
    } else {
      $('.chameleon-search-results').slideDown(300);
    }
  });

  $('.btn-remove-context').on('click', function() {
    $('.chameleon-search-context').fadeOut(300);
    $('.chameleon-search-form-input').focus();
  });

  //MOBILE ONLY

  $('.dropdown-hover').on('click', function(e) {
    if ( $(window).width() <= 768 ) {
      e.preventDefault();
      $(this).next('.chameleon-dropdown').toggleClass('visible');
      $(this).toggleClass('open');
    }
  });

  $(document).mouseup(function(e) {
    if ( $(window).width() <= 768 ) {
      var container = $(".chameleon-nav");

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        closeMenu();
        container.unbind('mouseup');
      }
    }
  });

});

var openMenu = function(e) {
  e.preventDefault();
  $('.chameleon-nav, .chameleon-menu, .chameleon-menu--helpers').addClass('open');
  $('.chameleon-nav .chameleon-dropdown').addClass('collapse');
}

var closeMenu = function() {
  $('.chameleon-nav, .chameleon-menu, .chameleon-menu--helpers').removeClass('open');
  $('.chameleon-nav .chameleon-dropdown').removeClass('collapse visible');
}

var showSearch = function(e) {
  e.preventDefault();
  $('.chameleon-search').show();
  $('.chameleon-search-results').hide();
  $('.chameleon-search-form-input').val('').focus();
}

$(window).resize(function() {
  if ( $(window).width() >= 768 ) {
    closeMenu();
  }
});
