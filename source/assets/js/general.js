$(document).ready(function(){
    
    $('.enumenu_ul').responsiveMenu({
        menuslide_overlap: true,
        menuslide_direction: 'right',
        onMenuopen: function() {}
    });
    
    new WOW(
        {
          boxClass:     'wow',      // default
          animateClass: 'animated', // default
          offset:       0,          // default
          mobile:       true,       // default
          live:         true        // default
        }
    ).init();
    
});