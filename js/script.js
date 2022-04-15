(function($){
	"use strict"; // Start of use strict

		function initMap() {

	        var location = new google.maps.LatLng(41.1798363,16.3651205);

	        var mapCanvas = document.getElementById('map1');
	        var mapOptions = {
	            center: location,
	            zoom: 14,
	            panControl: false,
	            mapTypeId: google.maps.MapTypeId.ROADMAP
	        }
	        var map = new google.maps.Map(mapCanvas, mapOptions);

	        var icon = {
			    url: "https://image.flaticon.com/icons/svg/33/33622.svg", // url
			    scaledSize: new google.maps.Size(50, 50), // scaled size
			    origin: new google.maps.Point(0,0), // origin
			    anchor: new google.maps.Point(0, 0) // anchor
			};

			var marker = new google.maps.Marker({
			    position: new google.maps.LatLng(41.1798363,16.3651205),
			    map: map,
			    icon: icon
			});

			

	        var location = new google.maps.LatLng(41.1303137,16.8679488);

	        var mapCanvas = document.getElementById('map2');
	        var mapOptions = {
	            center: location,
	            zoom: 16,
	            panControl: false,
	            mapTypeId: google.maps.MapTypeId.ROADMAP
	        }
	        var map = new google.maps.Map(mapCanvas, mapOptions);
	        var marker2 = new google.maps.Marker({
			    position: new google.maps.LatLng(41.1303137,16.8679488),
			    map: map,
			    icon: icon
			});


    	}

    	google.maps.event.addDomListener(window, 'load', initMap);

		var myform = $("form#rsvp_form");
		myform.submit(function(event){
			event.preventDefault();

			var params = myform.serializeArray().reduce(function(obj, item) {
		     obj[item.name] = item.value;
		     return obj;
		  }, {});

		  // Change to your service ID, or keep using the default service
		  var service_id = "default_service";

		  var template_id = "template_jc1lhvc";
		  
		  $("#sending_spinner").show();
		  $("#send_form").val("Invio in corso..");
		  
		  emailjs.send(service_id,template_id,params)
		  	.then(function(){ 
		       $("#send_form").val("Invia");
		       $("#sending_spinner").hide();
		       $("#sending_text").fadeIn('fast');
		       setTimeout(function() {
				    $('#sending_text').fadeOut('fast');
				    $("#sending_spinner").fadeOut('fast');
				}, 1000); // <-- time in milliseconds

		     }, function(err) {
		       $("#send_form").val("Invia");
		    });
		  return false;
		});

		/* Section Background */
		$('section, .parallax').each(function(){
			var image = $(this).attr('data-image');
			if (image){
				$(this).css('background-image', 'url('+image+')');	
			}
		});

		/*Player*/
		$('.music').on("click", function(e){
			$('.player').fadeToggle();
			e.preventDefault();
		});


		/*ScrollR */
		if ($(window).width() > 1280) {
			var s = skrollr.init({
				forceHeight: false
			});
		}

		/*FireFly in Intro*/
		if($(".into_firefly").length) {
			$.firefly({
				color: '#fff', minPixel: 1, maxPixel: 3, total : 55, on: '.into_firefly'
			});
		}
		

		/*Gallery ColorBox */
		$('.gallery_txt a').colorbox({
			rel:'gal',
			maxWidth:"100%",
		});
		$('.more_txt').each(function(){
			var href = $(this).attr('href');
			$(this).colorbox({inline:true, href:href, maxWidth:"80%"});
		})
		
		/*Window Scroll*/
		$(window).scroll(function(){
			if ($(window).scrollTop() > 100) {
				$('body').addClass('open');
				
			}
			else {
				$('body').removeClass('open');
			}
		});

		/*Main Menu Button */
		$('.main_menu_btn').on("click", function(e){
			$(this).toggleClass('main_menu_btn_open');
			$('.main_menu_block').toggleClass('main_menu_block_open').fadeToggle();
			$('.simple_menu').toggleClass('active');
			$('.menu_wrapper').toggleClass('active');
			$('header .anim').toggleClass('active');
			e.preventDefault();
		});
		
		fwForm.initAjaxSubmit({
			selector: 'form[data-fw-form-id][data-fw-ext-forms-type="contact-forms"]',
		});
			
		/*ColorBox*/
		if ($(window).width() >= 760) {
			$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
		}else{
			$(".youtube").colorbox({iframe:true, innerWidth:320, innerHeight:240});
		}
		$(window).resize(function () {
			if ($(window).width() >= 760) {
				$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
			}else{
				$(".youtube").colorbox({iframe:true, innerWidth:320, innerHeight:240});
			}
		 });
		
		/*Scroll Effect*/
		$('.intro_down, .go').on("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});
		
		/*Show/Hide Photo in When&Where Block*/
		$('.photocamera span').on("click", function(e){
			$(this).parents('section').find('.opacity').toggleClass('fade');
			$(this).parents('section').find('.over').fadeToggle();
			e.preventDefault();
		});



		/* Top Menu Click to Section */
		$('.sub_menu a[href*=#]:not([href=#])').on("click", function(){
			$(".main_menu_btn").trigger('click');
			$('.sub_menu a[href*=#]:not([href=#])').removeClass('active');
			$(this).addClass('active');
			
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
		

		
		/*CountDown*/
		$('.married_coundown').each(function(){
			var year = $(this).attr('data-year');
			var month = $(this).attr('data-month');
			var day = $(this).attr('data-day');
			$(this).countdown({until: new Date(year,month-1,day)});

		});
		
		/*OWL Carousel in Our Story*/
		$(".story_wrapper").owlCarousel({
	 		navigation : true,	
	 		responsive: true, 
	 		responsiveRefreshRate : 200,	
	 		slideSpeed : 200,	
	 		paginationSpeed : 200,	
	 		rewindSpeed : 500,	
	 		items:3,  
	 		itemsTablet: [768,1], 
	 		autoPlay : 5000,
			itemsMobile : [479,1], 	
			itemsDesktopSmall : [980,1],  
			itemsDesktop : [1500,2], 
			mouseDrag:false,
			touchDrag:false
		});

		/*Gallery Carousel */
		$('.gallery_item:even').each(function(){
			$(this).next().addBack().wrapAll('<div class="gallery_wrap_item" />');
		});
		$(".gallery_wrapper").owlCarousel({
	 		navigation : true,	
	 		responsive: true, 
	 		responsiveRefreshRate : 200,	
	 		slideSpeed : 200,	
	 		paginationSpeed : 200,	
	 		rewindSpeed : 500,	
	 		items:3,  
	 		itemsTablet: [768,2], 
	 		autoPlay : true,
			itemsMobile : [479,1], 
			mouseDrag:false,
			touchDrag:false
		});

		/*Registry Carousel */
		$(".registry_wrapper").owlCarousel({
	 		navigation : true, 
	 		responsive: true, 
	 		responsiveRefreshRate : 200, 
	 		slideSpeed : 200, 
	 		paginationSpeed : 200,
			rewindSpeed : 500,	
			stopOnHover : true, 
			autoHeight : true, 
			items:3, 
			mouseDrag:false, 
			autoPlay : true,
			touchDrag:false
		});

		/*The Crew Carousel*/
		$(".guest_wrapper").owlCarousel({
	 		navigation : true, 
	 		responsive: true, 
	 		responsiveRefreshRate : 200, 
	 		slideSpeed : 200,	
	 		paginationSpeed : 200,
			rewindSpeed : 500, 
			stopOnHover : true, 
			autoHeight : true, 
			items:3, 
			mouseDrag:false, 
			autoPlay : true,
			touchDrag:false
		});	

		/*Slider Carousel*/
		$(".slider").owlCarousel({
	 		navigation : true, 
	 		responsive: true, 
	 		responsiveRefreshRate : 200, 
	 		slideSpeed : 200,	
	 		paginationSpeed : 200,
			rewindSpeed : 500, 
			stopOnHover : false, 
			autoHeight : true, 
			singleItem:true, 
			mouseDrag:false, 
			autoPlay : true, 
			transitionStyle : "fade",
			touchDrag:false
		});	

		/*Blog Inside*/
		$(".blog_inside_wrapper").owlCarousel({
	 		navigation : true, 
	 		responsive: true, 
	 		responsiveRefreshRate : 200, 
	 		slideSpeed : 200,	
	 		paginationSpeed : 200,
			rewindSpeed : 500, 
			stopOnHover : false, 
			autoHeight : true, 
			singleItem:true, 
			mouseDrag:false, 
			autoPlay : true, 
			transitionStyle : "fade",
			touchDrag:false
		});

		

		/* Refresh ScrollR */
		if($(".guest_wrapper, .our_story").length) {
			s.refresh($(".guest_wrapper, .our_story"));
		}
		
})(jQuery);