/*----------------------/
	/* MAIN NAVIGATION
	/*---------------------*/
		
	$(window).on('scroll', function(){
		if( $(window).width() > 1024 ) {
			if( $(document).scrollTop() > 150 ) {
				setNavbarLight();
			}else {
				setNavbarTransparent();
			}
		}
	});	
	
	function toggleNavbar() {
		if( ($(window).width() > 1024) && ($(document).scrollTop() <= 150) ) {
			setNavbarTransparent();
		} else {
			setNavbarLight();
		}
	}

	toggleNavbar();

	$(window).resize( function() {
		toggleNavbar();	
	});

	/* navbar setting functions */
	function setNavbarLight() {		
		$('.navbar').addClass('navbar-invert');		
		$('.navbar-brand img').show();
		
	}

	function setNavbarTransparent() {
		$('.navbar').removeClass('navbar-invert');
		$('.navbar-brand img').hide();		
	}

	$("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
	



/* Scroll slow en links */
	$(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });