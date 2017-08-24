
$(function () {

	function rwdmenu(){
		var allsubmenu = $('.submenu').hide();
		var menuwidth  = $(window).width();
		var target     = $('.menu > li a');
		allsubmenu.slideUp();

		if (menuwidth < 599) {
			$('.menu > li').off("mouseleave");
			$('.menu > li').off("mouseenter");
  			target.unbind("click").click(function() {
				allsubmenu.slideUp();
		    	$(this).off("mouseleave").next().slideToggle(false);
			}).stop();

  		} else {

			target.off("click");
  			$('.menu > li').unbind("mouseenter").mouseenter(function() {
			    $(this).children("ul").show();
	  		})
  			$('.menu > li').unbind("mouseleave").mouseleave(function() {
			    $(this).children("ul").hide();
	  		})
	  		// $(".menu > li").unbind("mouseleave").mouseleave(function() {
			  //   $(this).next("ul.submenu").hide();
	  		// })
		}
	}

	rwdmenu();
	
  $(window).resize(function() {
		rwdmenu();
	})
	
});
