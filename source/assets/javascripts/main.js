$(document).ready(function() {
  $("#menu").mmenu({
     slidingSubmenus: false,
     classes: "mm-slide",
     labels: true
  });

  // Breadcrumb with dropdown menu
  var $header_menu = $('.header'),
      $breadcrumb_link   = $header_menu.find('.header-breadcrumb-link');

  $breadcrumb_link.on('click', function(e){
    $('.breadcrumb-submenu').removeClass("active");
    e.stopPropagation();
    var $element = $(this).parent();
    $element.find('.breadcrumb-submenu').addClass("active");
  });
  $("html").click(function(){
    $('.breadcrumb-submenu').removeClass("active");
  });
  
  // Input file-upload
  $( '.file_upload-input' ).each( function()
  {
    var $input   = $( this ),
      $label   = $input.next( 'label' ),
      labelVal = $label.html();

    $input.on( 'change', function( e )
    {
      var fileName = '';

      if( this.files && this.files.length > 1 )
        fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      else if( e.target.value )
        fileName = e.target.value.split( '\\' ).pop();

      if( fileName )
        $label.find( 'span' ).html( fileName );
      else
        $label.html( labelVal );
    });

    // Firefox bug fix
    $input
    .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
    .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
  });
      
});