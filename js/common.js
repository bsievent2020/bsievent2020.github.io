
/*

Common js
================================
WD : CPG

*/





function headerFixedAfterScroll(header){
		$(document).ready(function () {
	
			var menuHeader = header;
              $(window).scroll(function () {
				  
				  
                  if ($(document).scrollTop() > 70) {
                      $(menuHeader).css({ 'top': 0,'z-index':'1002','background':'#fff','position':'fixed','width':'100%','box-shadow':'0 0 20px rgba(0,0,0,.20)'});
					  $(menuHeader).parent().removeClass('container-fluid');
					  $(".logoDetails").css('display','block');
					  $(".navbar-brand img").css({'width':'70%','display':'none'});
					  $(".navbar-brand img:nth-child(2)").css({'width':'70%','display':'block'});
                  }
                  else {
                      $(menuHeader).css({ 'top': 18,'z-index':'1002','background':'transparent','position':'relative','width':'unset','box-shadow':'unset'});
					  $(menuHeader).parent().addClass('container-fluid');
					  $(".logoDetails").css('display','none');
					  $(".navbar-brand img:nth-child(1)").css({'width':'100%','display':'block'});
					  $(".navbar-brand img:nth-child(2)").css({'width':'100%','display':'none'});

                  }
				
				  
				  
				  
				  
              });
          });

}

$(document).ready(function($){
		if ($(".sliding_box_parent.slidingBox").length) {
			$(".slidingBox .sliding_box_child").on("mouseenter", function() {
			$(".slidingBox .sliding_box_child").removeClass("active-elem");
		
			
			$(this).addClass("active-elem");
		  });
		}
		
		
		
		$('.navbar-expand-lg .navbar-nav .nav-menu').hover(function () {
			$(this).addClass("mybtn-bg");
			
		}, function () {
			$(this).removeClass("mybtn-bg");
		
		});
		
});	


function checkInCheckOut(check_in,check_out){
	$(document).ready(function(){  
	
	var dpin1 = check_in;
	var dpout2 = check_out;
	
	var date = new Date();
	
	$(dpin1).datepicker({
		format: 'dd M, yyyy',
		autoclose: true,
		toggleActive: true
	}).datepicker("update", "26 Jul, 2019"); 
		
		
	$(dpout2).datepicker({
		format: 'dd M, yyyy',
		autoclose: true,
		toggleActive: true
	}).datepicker("update", "31 Jul, 2019"); 
		
	
	});
}




function hrCheckInCheckOut(hcheck_in,hcheck_out){
	$(document).ready(function(){  
	
	var dpin1 = hcheck_in;
	var dpout2 = hcheck_out;
	
	var date = new Date();
	$(dpin1).datepicker({
		format: 'dd M, yyyy',
		autoclose: true,
		toggleActive: true
	}).datepicker("update", "26 Jul, 2019"); 
		
		
	$(dpout2).datepicker({
		format: 'dd M, yyyy',
		autoclose: true,
		toggleActive: true
	}).datepicker("update", "31 Jul, 2019"); 
		
	});

}




 
