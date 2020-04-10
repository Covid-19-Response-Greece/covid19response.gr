(function ($) {
	'use strict';

	/* --------------------------------------------------
		Initialization
	-------------------------------------------------- */

	// Initialize all functions when the document is ready.
	$(document).ready(function () {

		initNavbar();
		initScroller();
		initCountCirc();
		initCountCircMin();
		initCountNbr();
		initCountMin();
		initSliders();
		initGallery();
		initAnimation();
		initVideoBg();
		initKenburns();
		initCountdown();

		if (document.getElementById('shop-slider-range')) {
			initRangeSlider();
		}

		// Parallax disabled for mobile screens
		if ($(window).width() >= 1260) {
			initParallax();

			$(window).stellar({
				hideDistantElements: false
			});
		}

	});

	// Initialize functions after elements are loaded.
	$(window).load(function () {

		// Preloader
		$('.preloader img').fadeOut(); // will first fade out the loading animation
		$('.preloader').delay(350).fadeOut('slow', function () {

		});

		initPortfolio();
		initBlogMasonry();

	});


	/* --------------------------------------------------
		Navigation | Navbar
	-------------------------------------------------- */

	function initNavbar() {

		// Sticky Nav & Transparent Background
		$(window).scroll(function () {

			if ($(window).scrollTop() > 20) {
				$('nav').removeClass('navbar-trans', 300);
				$('nav').removeClass('navbar-trans-dark');
				$('nav').addClass('navbar-small', 300);
			}
			else {
				$('nav:not(.mobile-nav)').addClass('navbar-trans', 300);
				$('nav').removeClass('navbar-small', 300);

				if ($('nav').hasClass('trans-helper')) {
					$('nav:not(.mobile-nav)').addClass('navbar-trans-dark');
				}
			}

			$('nav:not(.navbar-fixed-top)').removeClass('navbar-trans navbar-small navbar-trans-dark');

		});


		// Nav on mobile screens
		$(window).resize(function () {
			if ($(window).width() <= 1259) {
				$('nav').addClass('mobile-nav');
			} else {
				$('nav').removeClass('mobile-nav');
			}

			if ($('nav').hasClass('mobile-nav')) {
				$('nav').removeClass('navbar-trans');
				$('nav').removeClass('navbar-trans-dark');
			} else {
				if ($(window).width() >= 1259 && $(window).top) {
					$('nav').addClass('navbar-trans');
				}
			}

			// Remove dropdown open on hover for small screens
			if ($('nav').hasClass('mobile-nav')) {

				$('.dropdown-toggle').on('mouseover', function (e) {
					e.preventDefault();

					$('.dropdown').removeClass('open');

					e.stopPropagation();
				});
			}

			// Close mobile menu when clicked link
			// var isNotDropdown = $('nav:not(.mobile-nav)');

			if (!$('.nav a').hasClass('dropdown-toggle')) {

				$('.nav a').on('click', function () {
					if ($('.navbar-toggle').css('display') != 'none') {
						$(".navbar-toggle").trigger("click");
					}
				});

			}

		}).resize();

		// Bugfix for iOS not scrolling on open menu
		$(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });


	} // initNavbar



	/* --------------------------------------------------
		Scroll Nav
	-------------------------------------------------- */

	function initScroller() {

		$('#navbar').localScroll({
			easing: 'easeInOutExpo'
		});

		$('#page-top').localScroll({
			easing: 'easeInOutExpo'
		});
	} // initScroller




	/* --------------------------------------------------
		Parallax
	-------------------------------------------------- */


	function initParallax() {

		var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

		if (!isSafari) {
			$(".main-op").parallax("50%", 0.2);
			$(".number-counters").parallax("50%", 0.2);
			$(".cirlce-counters").parallax("50%", 0.3);
			$(".client-list-parallax").parallax("50%", 0.4);
			$(".ft-slider-parallax").parallax("50%", 0.4);
			$(".testimonials-parallaxx").parallax("50%", 0.4);
			$(".twitter-slider").parallax("50%", 0.4);
			$(".login-2").parallax("50%", 0.2);
		}
	}



	/* --------------------------------------------------
		Counters Circles
	-------------------------------------------------- */

	function initCountCirc() {

		var hasCircles = $('#skillsCircles').hasClass('circles-counters');

		if (hasCircles) {

			var waypoint = new Waypoint({
				element: document.getElementById('skillsCircles'),
				handler: function () {

					var options = {
						useEasing: true,
						separator: ''
					};

					$('.chart').easyPieChart({
						size: '150',
						lineWidth: 2,
						lineCap: 'square',
						trackColor: '',
						barColor: '#f8f8f8',
						scaleColor: false,
						easing: 'easeOutBack',
						animate: {
							duration: 1600,
							enabled: true
						}
					});
					// init only once
					this.destroy();
				},
				offset: '80%',
			});

		}

	} // initCountCirc



	function initCountCircMin() {

		var hasCircles = $('#skillsCirclesMin').hasClass('circles-counters-dark-bg');

		if (hasCircles) {

			var waypoint = new Waypoint({
				element: document.getElementById('skillsCirclesMin'),
				handler: function () {

					var options = {
						useEasing: true,
						separator: ''
					};

					$('.chart').easyPieChart({
						size: '150',
						lineWidth: 2,
						lineCap: 'square',
						trackColor: '',
						barColor: '#f8f8f8',
						scaleColor: false,
						easing: 'easeOutBack',
						animate: {
							duration: 1600,
							enabled: true
						}
					});
					// init only once
					this.destroy();
				},
				offset: '80%',
			});

		}

	} // initCountCirc




	/* --------------------------------------------------
		Number Counters
	-------------------------------------------------- */

	function initCountNbr() {

		var hasCounters = $('#counters').hasClass('count-wrapper');

		if (hasCounters) {

			var waypoint = new Waypoint({
				element: document.getElementById('counters'),
				handler: function () {

					var options = {
						useEasing: true,
						useGrouping: true,
						separator: ','
					};
					// Counter 1
					var counter1 = new CountUp('count-1', 0, 250, 0, 3, options);
					counter1.start();
					// Counter 2
					var counter2 = new CountUp('count-2', 0, 6, 0, 3, options);
					counter2.start();
					// Counter 3
					var counter3 = new CountUp('count-3', 0, 17, 0, 3, options);
					counter3.start();
					// Counter 4
					var counter4 = new CountUp('count-4', 0, 102890, 0, 3, options);
					counter4.start();
					// init only once
					this.destroy();
				},
				offset: '80%',
			});

		}


	} // initCountNbr



	function initCountMin() {

		var hasCounters = $('#counters-min').hasClass('nbr-wrapper');

		if (hasCounters) {

			var waypoint = new Waypoint({
				element: document.getElementById('counters-min'),
				handler: function () {

					var options = {
						useEasing: true,
						separator: ''
					};
					// Counter 1
					var counter1 = new CountUp('count-min-1', 0, 675, 0, 3, options);
					counter1.start();
					// Counter 2
					var counter2 = new CountUp('count-min-2', 0, 1457, 0, 3, options);
					counter2.start();
					// Counter 3
					var counter3 = new CountUp('count-min-3', 0, 471, 0, 3, options);
					counter3.start();
					// Counter 4
					var counter4 = new CountUp('count-min-4', 0, 753, 0, 3, options);
					counter4.start();
					// init only once
					this.destroy();
				},
				offset: '80%',
			});

		}


	} // initCountMin



	/* --------------------------------------------------
		Sliders
	-------------------------------------------------- */

	function initSliders() {

		// Features Slider
		$('.ft-slider').slick({
			autoplay: true,
			autoplaySpeed: 4000,
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="info-slider-nav slick-prev"><i class="fa fa-long-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="info-slider-nav slick-next"><i class="fa fa-long-arrow-right"></i></button>',
			responsive: [
				{
					breakpoint: 999,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						infinite: true,
					}
				},
				{
					breakpoint: 770,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});

		// Testimonials Sliders
		$('.t-slider').slick({
			autoplay: false,
			autoplaySpeed: 4000,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="t-slider-nav slick-prev"><span class="linea-arrows-slim-left"></span></button>',
			nextArrow: '<button type="button" class="t-slider-nav slick-next"><span class="linea-arrows-slim-right"></span></button>',
		});

		// Brands/Clients Slider
		$('.clients-slider').slick({
			autoplay: true,
			autoplaySpeed: 4000,
			slidesToShow: 5,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			responsive: [
				{
					breakpoint: 999,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 2,
						infinite: true,
					}
				},
				{
					breakpoint: 770,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 599,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});

		// Portfolio Single Slider
		$('.single-img-slider').slick({
			autoplay: true,
			autoplaySpeed: 4000,
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="slider-nav sl-prev"><span class="linea-arrows-slim-left"></span></button>',
			nextArrow: '<button type="button" class="slider-nav sl-next"><span class="linea-arrows-slim-right"></span></button>',
		});

		// Centered Gallery
		$('.centered-gallery').slick({
			centerMode: true,
			centerPadding: '60px',
			slidesToShow: 3,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 3
					}
				},
				{
					breakpoint: 480,
					settings: {
						arrows: false,
						centerMode: true,
						centerPadding: '40px',
						slidesToShow: 1
					}
				}
			]
		});

		// Full Screen Hero Slider
		$('.fs-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			useCSS: true,
			fade: true,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><span class="linea-arrows-slim-left"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="linea-arrows-slim-right"></span></button>',
			autoplay: true,
			autoplaySpeed: 4000,
		});

		// Full Width Hero Slider
		$('.fw-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><span class="linea-arrows-slim-left"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="linea-arrows-slim-right"></span></button>',
			autoplay: true,
			autoplaySpeed: 4000,
		});

		// Text Slider
		$('.text-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			speed: 300,
			fade: true,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><span class="linea-arrows-slim-left"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="linea-arrows-slim-right"></span></button>',
			autoplay: true,
			autoplaySpeed: 4000,
		});

		// Shop Product Slider
		$('.shop-p-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			speed: 300,
			// fade: false,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="shop-p-slider-nav shop-p-slider-nav-left"><span class="linea-arrows-slim-left"></span></button>',
			nextArrow: '<button type="button" class="shop-p-slider-nav shop-p-slider-nav-right"><span class="linea-arrows-slim-right"></span></button>',
			autoplay: false,
		});

		// Shop Product Single - Slider
		$('.prod_single_img_slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			speed: 300,
			// fade: false,
			infinite: true,
			dots: true,
			arrows: true,
			prevArrow: '<button type="button" class="shop-p-slider-nav shop-p-slider-nav-left"><span class="linea-arrows-slim-left"></span></button>',
			nextArrow: '<button type="button" class="shop-p-slider-nav shop-p-slider-nav-right"><span class="linea-arrows-slim-right"></span></button>',
			autoplay: false,
			accessibility: false,
			customPaging: function (slider, i) {
				return '<a href="#">' + $('.prod_single_thumbs_slider li:nth-child(' + (i + 1) + ')').html() + '</a>';
			}
		});

	} // initSliders



	/* --------------------------------------------------
		Portfolio
	-------------------------------------------------- */

	function initPortfolio() {

		// Filters
		$('.portfolio-filters a').click(function (e) {
			e.preventDefault();

			$('li').removeClass('active');
			$(this).parent().addClass('active');
		});


		// Full Width Gallery (3 columns)
		function pfolio3colFW() {

			var $container = $('#pfolio');
			// init
			$container.isotope({
				// options
				itemSelector: '.portfolio-item',
			});

			// Filter items
			$('#pfolio-filters').on('click', 'a', function () {
				var filterValue = $(this).attr('data-filter');
				$container.isotope({ filter: filterValue });
			});

		} // fwNogap3col


		function pfolioMasonry() {

			var $container = $('.pfolio-items');
			// init
			$container.isotope({
				// options
				itemSelector: '.p-item',
				percentPosition: true,
				layoutMode: 'packery',
				masonry: {
					columnWidth: '.grid-sizer'
				}
			});

			// Filter items
			$('#pfolio-filters').on('click', 'a', function () {
				var filterValue = $(this).attr('data-filter');
				$container.isotope({ filter: filterValue });
			});

		}


		pfolio3colFW();
		pfolioMasonry();

	} // initPortfolio



	/* --------------------------------------------------
		Light Gallery
	-------------------------------------------------- */

	function initGallery() {

		// Image Lightbox
		var hasPopup = $('a').hasClass('open-gallery');

		if (hasPopup) {

			$('.open-gallery').magnificPopup({
				type: 'image',
				gallery: {
					enabled: true
				}
			});

		}


		// Footer Gallery Lightbox
		var hasFtPopup = $('a').hasClass('gallery-widget-lightbox');

		if (hasFtPopup) {

			$('.gallery-widget-lightbox').magnificPopup({
				type: 'image',
				gallery: {
					enabled: true
				}
			});

		}

		// Video Lightbox
		var hasVideoPopup = $('a').hasClass('popup-video');

		if (hasVideoPopup) {

			$('.popup-video').magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,

				fixedContentPos: false
			});

		}

	} // initGallery




	/* --------------------------------------------------
		Blog Masonry Layout
	-------------------------------------------------- */

	function initBlogMasonry() {

		var $container = $('.blog-container');
		// init
		$container.isotope({
			// options
			itemSelector: '.blog-selector',
			percentPosition: true
		});
	}




	/* --------------------------------------------------
	  Contact Pages
	-------------------------------------------------- */

	$('.show-map').on('click', function (e) {
		e.preventDefault();
		$('.contact-info-wrapper').toggleClass('map-open');
		$('.show-info-link').toggleClass('info-open');
	});

	$('.show-info-link').on('click', function (e) {
		e.preventDefault();
		$('.contact-info-wrapper').toggleClass('map-open');
		$(this).toggleClass('info-open');
	});



	/* --------------------------------------------------
		Animation
	-------------------------------------------------- */

	function initAnimation() {

		new WOW().init();

	}




	/* --------------------------------------------------
		Video Background
	-------------------------------------------------- */

	function initVideoBg() {

		var hasBgVideo = $('#fs-video-one-bg').hasClass('player');
		var hasFwBgVideo = $('#fw-video-one-bg').hasClass('player');
		var hasSecBgVideo = $('#section-video').hasClass('player');

		if (hasBgVideo || hasFwBgVideo || hasSecBgVideo) {

			$('.player').YTPlayer();

		}


	}



	/* --------------------------------------------------
		Ken Burns Slider
	-------------------------------------------------- */
	function initKenburns() {

		var hasKenburns = $('.kenburn-hero')[0];

		if (hasKenburns) {
			var w_height = $(window).height();
			var w_width = $(window).width();

			$('.kenburns').attr('width', w_width);
			$('.kenburns').attr('height', w_height);
			$('.kenburns').kenburns({
				images: ['http://placehold.it/2440x1578',
					'http://placehold.it/2440x1578/999/eee',
					'http://placehold.it/2440x1578/ccc/111'
				],
				frames_per_second: 30,
				display_time: 5000,
				fade_time: 1000,
				zoom: 1.1,
				background_color: '#000000'
			});
		}

	} // initKenburns



	/* --------------------------------------------------
		Coming Soon - Countdown
	-------------------------------------------------- */

	function initCountdown() {

		var hasCountdown = $('#cs-timer').hasClass('cs-timer');

		if (hasCountdown) {

			// Add end date here (current: 2017/01/01) from witch the timer will countdown.
			$('#cs-timer').countdown('2017/01/01', function (event) {
				$(this).html(event.strftime('<div class="item"><span class="nbr-timer">%D</span><span class="title-timer">Days<span></div><div class="item"><span class="nbr-timer">%H</span><span class="title-timer">Hours<span></div><div class="item"><span class="nbr-timer">%M</span><span class="title-timer">Minutes<span></div><div class="item"><span class="nbr-timer">%S</span><span class="title-timer">Seconds<span></div>'));
			});

		}

	}



	/* --------------------------------------------------
		Shop Price Filter - (range slider)
	-------------------------------------------------- */
	function initRangeSlider() {

		$("#shop-slider-range").slider({
			range: true,
			min: 100,
			max: 750,
			values: [121, 721], // starting values
			slide: function (event, ui) {
				$("#shop-slider-range-amount").val("$" + ui.values[0] + " TO $" + ui.values[1]);
			}
		});
		$("#shop-slider-range-amount").val("$" + $("#shop-slider-range").slider("values", 0) +
			" TO $" + $("#shop-slider-range").slider("values", 1));

	} // initRangeSlider



})(jQuery);



/* --------------------------------------------------
	Contact Form JS Validation & AJAX call 
-------------------------------------------------- */
$(function () {

	//	Regular Expressions
	var expEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[_a-z0-9-]+(\.[_a-z0-9-]+)*(\.[a-z]{2,4})$/;
	var expLettersOnly = /^[A-Za-z ]+$/;

	//	Checks if a field has the correct length
	function validateLength(fieldValue, minLength) {
		return ($.trim(fieldValue).length > minLength);
	}

	//	Validate form on typing
	$('.form-ajax').on('keyup', 'input.validate-locally', function () {
		validateField($(this));
	});

	//	AJAX call
	$('.form-ajax').submit(function (e) {
		e.preventDefault();
		var $this = $(this),
			action = $this.attr('action');

		// The AJAX requrest
		$.post(
			action,
			$this.serialize(),
			function (data) {
				$('.ajax-message').html(data);
			}
		);
	});

	//	Validates the fileds
	function validateField(field) {
		var errorText = "",
			error = false,
			value = field.val(),
			siblings = field.siblings(".alert-error");

		// Test the name field
		if (field.attr("name") === "name") {
			if (!validateLength(value, 2)) {
				error = true;
				errorText += '<i class="fa fa-info-circle"></i> The name is too short!<br>';
				$('input[name="name"]').addClass('input-error');
			} else {
				$('input[name="name"]').removeClass('input-error');
			}

			if (!expLettersOnly.test(value)) {
				error = true;
				errorText += '<i class="fa fa-info-circle"></i> The name can contain only letters and spaces!<br>';
				$('input[name="name"]').addClass('input-error-2');
			} else {
				$('input[name="name"]').removeClass('input-error-2');
			}
		}

		// Test the email field
		if (field.attr("name") === "email") {
			if (!expEmail.test(value)) {
				error = true;
				errorText += '<i class="fa fa-info-circle"></i> Enter correct email address!<br>';
				$('input[name="email"]').addClass('input-error');
			} else {
				$('input[name="email"]').removeClass('input-error');
			}
		}

		// Display the errors
		siblings.html(errorText);

	}

	//Init map
	var mymap = L.map('mapid').setView([38.711, 23.082], 5);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);

	//Add markers
	L.marker([40.629539, 22.960201]).addTo(mymap)
		.bindPopup("<b><u>ΑΧΕΠΑ - Πανεπιστημιακό Γενικό Νοσοκομείο Θεσσαλονίκης</u></b> <br/> 23/03/2020 - 30 Ασπίδες <br/>  <small>  Δωρεά της εταιρείας Rodia Event Decoration </small>");

	L.marker([40.504745, 21.280932]).addTo(mymap)
		.bindPopup("<b><u>Νοσοκομείο Καστοριάς</u></b> <br/> 23/03/2020 - 50 Ασπίδες <br/> <small> Δωρεά της εταιρείας AidPlex ΙΚΕ </small>  <br/> 30/03/2020 - 200 Ασπίδες  <br/> <small> Δωρεά της εταιρείας Ideas Forward ΙΚΕ  </small>");

	L.marker([40.611608, 22.961895]).addTo(mymap)
		.bindPopup("<b><u>Ιπποκράτειο Νοσοκομείο</u></b> <br/> 27/03/2020 - 35 Ασπίδες <br/>  <small>  Δωρεά εθελοντών της δράσης (ιδιωτών)</small>");

	L.marker([40.631931, 22.941172]).addTo(mymap)
		.bindPopup("<b><u>Ιατρικός Σύλλογος Θεσσαλονίκης</u></b> <br/> 28/03/2020 - 3000 Ασπίδες <br/>  <small>  Ιδία δαπάνη του αποδέκτη</small> <br/> 30/03/2020 - 2100 Ασπίδες  <br/> <small> Ιδία δαπάνη του αποδέκτη  </small>  <br/> 01/04/2020 - 5000 Ασπίδες  <br/> <small> Ιδία δαπάνη του αποδέκτη  </small>");

	L.marker([40.791203, 22.042702]).addTo(mymap)
		.bindPopup("<b><u>Νοσοκομείο Έδεσσας</u></b> <br/> 30/03/2020 - 200 Ασπίδες <br/>  <small>  Δωρεά της εταιρείας AidPlex ΙΚΕ</small>");

	L.marker([38.071819, 23.532224]).addTo(mymap)
		.bindPopup("<b><u>Θριάσιο Νοσοκομείο</u></b> <br/> 30/03/2020 - 30 Ασπίδες <br/>  <small>  Δωρεά της εταιρείας Ideas Forward ΙΚΕ</small>");

	L.marker([37.977606, 23.747938]).addTo(mymap)
		.bindPopup("<b><u>Νοσοκομείο Ευαγγελισμός</u></b> <br/> 30/03/2020 - 30 Ασπίδες <br/>  <small> Δωρεά της εταιρείας AidPlex ΙΚΕ</small>");

	L.marker([36.418044, 28.192768]).addTo(mymap)
		.bindPopup("<b><u>Γενικό Νοσοκομείο Ρόδου Ανδρέας Παπανδρέου</u></b> <br/> 30/03/2020 - 50 Ασπίδες <br/>  <small> Δωρεά της εταιρείας AidPlex ΙΚΕ</small> <br/> 01/04/2020 - 150 Ασπίδες  <br/> <small> Δωρεά της εταιρείας Ideas Forward ΙΚΕ  </small>");

	L.marker([40.990324, 22.867293]).addTo(mymap)
		.bindPopup("<b><u>Νοσοκομείο Κιλκίς</u></b> <br/> 30/03/2020 - 10 Ασπίδες <br/>  <small> Δωρεά της εταιρείας AidPlex ΙΚΕ</small>");

	L.marker([40.802157, 22.045014]).addTo(mymap)
		.bindPopup("<b><u>Δήμος Έδεσσας</u></b> <br/> 30/03/2020 - 50 Ασπίδες <br/>  <small> Δωρεά της εταιρείας Σούλης ΑΒΕΕ</small>  <br/> 31/03/2020 - 100 Ασπίδες  <br/> <small> Δωρεά της εταιρείας Σούλης ΑΒΕΕ </small>");

	L.marker([40.768194, 22.154981]).addTo(mymap)
		.bindPopup("<b><u>Δήμος Σκύδρας</u></b> <br/> 31/03/2020 - 50 Ασπίδες <br/>  <small> Δωρεά της εταιρείας Σούλης ΑΒΕΕ</small>");

	L.marker([40.805516, 22.052873]).addTo(mymap)
		.bindPopup("<b><u>Επαγγελματικό Επιμελητήριο Πέλλας</u></b> <br/> 31/03/2020 - 1000 Ασπίδες <br/>  <small> Δωρεά της εταιρείας Σούλης ΑΒΕΕ</small>");

	L.marker([39.623375, 19.921558]).addTo(mymap)
		.bindPopup("<b><u>Ιατρικός Σύλλογος Κέρκυρας</u></b> <br/> 01/04/2020 - 1300 Ασπίδες <br/>  <small> Ιδία δαπάνη του αποδέκτη</small>");

	L.marker([35.335168, 25.131896]).addTo(mymap)
		.bindPopup("<b><u>Ιατρικός Σύλλογος Ηρακλείου</u></b> <br/> 01/04/2020 - 1200 Ασπίδες <br/>  <small> Ιδία δαπάνη του αποδέκτη</small>");

	L.marker([38.367195, 21.427168]).addTo(mymap)
		.bindPopup("<b><u>Ιατρικός Σύλλογος Αιτωλοακαρνανίας</u></b> <br/> 01/04/2020 - 400 Ασπίδες <br/>  <small> Ιδία δαπάνη του αποδέκτη</small>");

	L.marker([40.994525, 22.872674]).addTo(mymap)
		.bindPopup("<b><u>Ιατρικός Σύλλογος Κιλκις</u></b> <br/> 01/04/2020 - 400 Ασπίδες <br/>  <small> Ιδία δαπάνη του αποδέκτη</small>");

	L.marker([38.016564, 23.665329]).addTo(mymap)
		.bindPopup("<b><u>ΠΓΝ Αττικον Β' Πανεπιστημιακή Κλινική Αναισθησιολογιας</u></b> <br/> 01/04/2020 - 20 Ασπίδες <br/>  <small> Δωρεά της εταιρείας Ideas Forward ΙΚΕ</small>");

	L.marker([38.521049, 22.376063]).addTo(mymap)
		.bindPopup("<b><u>Γενικό Νοσοκομείο Άμφισσας</u></b> <br/> 01/04/2020 - 10 Ασπίδες <br/>  <small> Δωρεά της εταιρείας Ideas Forward ΙΚΕ</small>");

	L.marker([40.087995, 21.436862]).addTo(mymap)
		.bindPopup("<b><u>Γενικό Nοσοκομείο Γρεβενών</u></b> <br/> 01/04/2020 - 20 Ασπίδες <br/>  <small> Δωρεά της εταιρείας Ideas Forward ΙΚΕ</small>");

	L.marker([37.882434, 23.932171]).addTo(mymap)
		.bindPopup("<b><u>Γενική Γραμματεία Πολιτικής Προστασίας - Δήμος Μαρκοπούλου</u></b> <br/> 01/04/2020 - 190 Ασπίδες <br/>  <small> Δωρεά της εταιρείας Ideas Forward ΙΚΕ</small>");

	L.marker([40.307198, 21.786191]).addTo(mymap)
		.bindPopup("<b><u>Γενικό Nοσοκομείο Κοζάνης Μαμάτσειο</u></b> <br/> 01/04/2020 - 50 Ασπίδες <br/>  <small> Δωρεά της εταιρείας Ideas Forward ΙΚΕ</small>");

	L.marker([41.151224, 24.151551]).addTo(mymap)
		.bindPopup("<b><u>Φαρμακευτικός Σύλλογος Δράμας</u></b> <br/> 01/04/2020 - 10 Ασπίδες <br/>  <small> Δωρεά της εταιρείας Ideas Forward ΙΚΕ</small>");

	L.marker([36.431051, 28.236616]).addTo(mymap)
		.bindPopup("<b><u>Οδοντιατρικος Συλλογος Δωδεκανήσου</u></b> <br/> 01/04/2020 - 210 Ασπίδες <br/>  <small> Δωρεά της εταιρείας AidPlex ΙΚΕ</small>");

	L.marker([40.634167, 22.955885]).addTo(mymap)
		.bindPopup("<b><u>Διεύθυνση Νοσηλευτικής Υπηρεσίας Γ.Ν.Γεννηματάς</u></b> <br/> 01/04/2020 - 100 Ασπίδες <br/>  <small> Δωρεά της εταιρείας AidPlex ΙΚΕ</small>");

	L.marker([40.845119, 25.874201]).addTo(mymap)
		.bindPopup("<b><u>Ιατρικός Σύλλογος Έβρου</u></b> <br/> 02/04/2020 - 900 Ασπίδες <br/>  <small> Ιδία δαπάνη του αποδέκτη</small>");

	L.marker([39.504021, 20.266716]).addTo(mymap)
		.bindPopup("<b><u>Ιατρικός Σύλλογος Θεσπρωτίας</u></b> <br/> 02/04/2020 - 200 Ασπίδες <br/>  <small> Ιδία δαπάνη του αποδέκτη</small>");

	L.marker([40.628192, 22.072994]).addTo(mymap)
		.bindPopup("<b><u>Γενικό Νοσοκομείο Νάουσας</u></b> <br/> 02/04/2020 - 500 Ασπίδες <br/>  <small> Ιδία δαπάνη του αποδέκτη</small>");

	L.marker([40.642889, 22.913000]).addTo(mymap)
		.bindPopup("<b><u>Πανελλήνιος Σύλλογος Φυσικοθεραπευτών Περιφερειακό τμήμα Θεσσαλονίκης, Κιλκίς & Χαλκιδικής</u></b> <br/> 02/04/2020 - 600 Ασπίδες <br/>  <small> Ιδία δαπάνη του αποδέκτη</small>");

	L.marker([40.631040, 23.044819]).addTo(mymap)
		.bindPopup("<b><u>Γενικό Νοσοκομείο Παπανικολάου Α' ΜΕΘ</u></b> <br/> 02/04/2020 - 100 Ασπίδες <br/>  <small>Δωρεά της εταιρείας AidPlex ΙΚΕ</small>");

	L.marker([40.503348, 22.216374]).addTo(mymap)
		.bindPopup("<b><u>Γενικό Νοσοκομείο Βέροιας</u></b> <br/> 03/04/2020 - 900 Ασπίδες <br/>  <small>Ιδία δαπάνη του αποδέκτη</small>");

	L.marker([40.525396, 22.204685]).addTo(mymap)
		.bindPopup("<b><u>Ιατρικός Σύλλογος Ημαθίας</u></b> <br/> 03/04/2020 - 600 Ασπίδες <br/>  <small>Ιδία δαπάνη του αποδέκτη</small>");

	L.marker([40.672803, 22.963414]).addTo(mymap)
		.bindPopup("<b><u>Γενικό Στρατιωτικό Νοσοκομείο 424</u></b> <br/> 03/04/2020 - 300 Ασπίδες <br/>  <small>Ιδία δαπάνη του αποδέκτη</small>");

	L.marker([41.352366, 26.503715]).addTo(mymap)
		.bindPopup("<b><u>Γενικό Νοσοκομείο Διδυμοτείχου</u></b> <br/> 04/04/2020 - 600 Ασπίδες <br/>  <small>Δωρεά ιδιώτη</small>");

	L.marker([40.520939, 21.263127]).addTo(mymap)
		.bindPopup("<b><u>Ιατρικός Σύλλογος Καστοριάς</u></b> <br/> 06/04/2020 - 1000 Ασπίδες <br/>  <small>Ιδία δαπάνη του αποδέκτη</small>");

	L.marker([40.522520, 23.070246]).addTo(mymap)
		.bindPopup("<b><u>Μονάδα Φροντίδας Ηλικιωμένων Αγ. Γεώργιος</u></b> <br/> 06/04/2020 - 100 Ασπίδες <br/>  <small>Ιδία δαπάνη του αποδέκτη</small>");

	L.marker([39.589816, 19.893430]).addTo(mymap)
		.bindPopup("<b><u>Δήμος Κέρκυρας</u></b> <br/> 06/04/2020 - 400 Ασπίδες <br/>  <small>Ιδία δαπάνη του αποδέκτη</small>");

	L.marker([41.142254, 24.879112]).addTo(mymap)
		.bindPopup("<b><u>Κινητά Χειρουργικά Νοσοκομεία Εκστρατείας (ΚΙΧΝΕ) Ξάνθης</u></b> <br/> 06/04/2020 - 600 Ασπίδες <br/>  <small>Δωρεά ιδιώτη</small>");

	L.marker([41.352704, 26.503554]).addTo(mymap)
		.bindPopup("<b><u>Κινητά Χειρουργικά Νοσοκομεία Εκστρατείας (ΚΙΧΝΕ) Διδυμότειχο</u></b> <br/> 06/04/2020 - 300 Ασπίδες <br/>  <small>Δωρεά ιδιώτη</small>");

	L.marker([38.623642, 21.409590]).addTo(mymap)
		.bindPopup("<b><u>Ιατρικός Σύλλογος Αγρινίου</u></b> <br/> 06/04/2020 - 800 Ασπίδες <br/>  <small>Ιδία δαπάνη του αποδέκτη</small> <br/> 08/03/2020 - 200 Ασπίδες  <br/> <small> Ιδία δαπάνη του αποδέκτη </small>");

	L.marker([37.986316, 23.759998]).addTo(mymap)
		.bindPopup("<b><u>1η Υγειονομική Περιφέρεια Αττικής</u></b> <br/> 07/04/2020 - 25 Ασπίδες <br/>  <small>Δωρεά της εταιρείας Σούλης ΑΒΕΕ</small>");

	L.marker([37.995045, 23.779350]).addTo(mymap)
		.bindPopup("<b><u>5η Πνευμονολογική κλινική Νοσοκομείο Νοσημάτων Θώρακος Αθηνών ΣΩΤΗΡΙΑ</u></b> <br/> 07/04/2020 - 100 Ασπίδες <br/>  <small>Δωρεά της εταιρείας Σούλης ΑΒΕΕ</small>");

	L.marker([37.995045, 23.779350]).addTo(mymap)
		.bindPopup("<b><u>5η Πνευμονολογική κλινική Νοσοκομείο Νοσημάτων Θώρακος Αθηνών ΣΩΤΗΡΙΑ</u></b> <br/> 07/04/2020 - 100 Ασπίδες <br/>  <small>Δωρεά της εταιρείας Σούλης ΑΒΕΕ</small>");

	L.marker([37.981542, 23.758412]).addTo(mymap)
		.bindPopup("<b><u>Γιατροί Χωρίς Σύνορα</u></b> <br/> 07/04/2020 - 100 Ασπίδες <br/>  <small>Δωρεά της εταιρείας Σούλης ΑΒΕΕ</small>");

	L.marker([39.598401, 20.314816]).addTo(mymap)
		.bindPopup("<b><u>Γενικό Νοσοκομείο Φιλιατών</u></b> <br/> 07/04/2020 - 60 Ασπίδες <br/>  <small>Ιδία δαπάνη του αποδέκτη</small>");

	L.marker([37.992299, 23.769017]).addTo(mymap)
		.bindPopup("<b><u>Ορθοπαιδική Κλινική Ερυθρός Ελληνικός Σταυρός</u></b> <br/> 07/04/2020 - 150 Ασπίδες <br/>  <small>Δωρεά της εταιρείας Σούλης ΑΒΕΕ</small>");

	L.marker([41.494442, 26.534008]).addTo(mymap)
		.bindPopup("<b><u>Κέντρο Υγείας Ορεστιάδας</u></b> <br/> 07/04/2020 - 25 Ασπίδες <br/>  <small>Δωρεά της εταιρείας Σούλης ΑΒΕΕ</small>");

	L.marker([40.631214, 23.045704]).addTo(mymap)
		.bindPopup("<b><u>Γενικό Νοσοκομείο Παπανικολάου Πλαστική Χειρουργική & Μ.Ε.Θ. Εγκαυμάτων</u></b> <br/> 02/04/2020 - 25 Ασπίδες <br/>  <small>Δωρεά της εταιρείας AidPlex ΙΚΕ</small>");

	L.marker([38.264182, 21.760142]).addTo(mymap)
		.bindPopup("<b><u>Ολύμπιον Θεραπευτήριο</u></b> <br/> 06/04/2020 - 100 Ασπίδες <br/>  <small>Ιδία δαπάνη του αποδέκτη</small>");

	L.marker([37.848084, 23.754751]).addTo(mymap)
		.bindPopup("<b><u>Μ.Ε.Θ Γενικό Νοσοκομείο Αθηνών Ασκληπιείο Βούλας</u></b> <br/> 07/04/2020 - 150 Ασπίδες <br/>  <small>Δωρεά της εταιρείας Σούλης ΑΒΕΕ</small>");

	L.marker([37.979717, 23.751011]).addTo(mymap)
		.bindPopup("<b><u>A' Παθολογική  Νοσηλευτικό Ίδρυμα Μετοχικού Ταμείου Στρατού (ΝΙΜΤΣ)</u></b> <br/> 07/04/2020 - 75 Ασπίδες <br/>  <small>Δωρεά της εταιρείας Σούλης ΑΒΕΕ</small>");

	L.marker([40.549139, 23.018629]).addTo(mymap)
		.bindPopup("<b><u>Κοινωνικό Παντοπωλείο Θέρμης</u></b> <br/> 07/04/2020 - 3 Ασπίδες <br/>  <small>Δωρεά της εταιρείας AidPlex ΙΚΕ</small>");

	L.marker([38.929020, 22.422613]).addTo(mymap)
		.bindPopup("<b><u>Γενικό Νοσοκομείο Λαμίας</u></b> <br/> 09/04/2020 - 500 Ασπίδες <br/>  <small>Δωρεά ιδιώτη</small>");

	L.marker([38.899372, 22.434444]).addTo(mymap)
		.bindPopup("<b><u>Ιδιώτες Ιατροί Ν.Φθιώτιδας</u></b> <br/> 09/04/2020 - 50 Ασπίδες <br/>  <small>Δωρεά ιδιώτη</small>");


//English Map 
var mapEn = L.map('mapEn').setView([38.711, 23.082], 6);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1
        }).addTo(mapEn);

        //Add markers
        L.marker([40.629539, 22.960201]).addTo(mapEn)
            .bindPopup("<b><u>AHEPA Hospital</u></b> <br/> 23/03/2020 - 30 Face Shields <br/>  <small>  Doanted by Rodia Event Decoration </small>");

        L.marker([40.504745, 21.280932]).addTo(mapEn)
            .bindPopup("<b><u>Kastoria Hospital</u></b> <br/> 23/03/2020 - 50 Face Shields <br/> <small> Donation by Aidplex </small>  <br/> 30/03/2020 - 200 Face Shields  <br/> <small> Donation by Ideas Forward ΙΚΕ  </small>");

        L.marker([40.611608, 22.961895]).addTo(mapEn)
            .bindPopup("<b><u>Ippokrateio Hospital</u></b> <br/> 27/03/2020 - 35 Face Shields <br/>  <small>  Private Donation</small>");

        L.marker([40.631931, 22.941172]).addTo(mapEn)
            .bindPopup("<b><u>Medical Association of Thessaloniki</u></b> <br/> 28/03/2020 - 3000 Face Shields <br/>  <small>  Εxpenses paid by the receiving end</small> <br/> 30/03/2020 - 2100 Face Shields  <br/> <small> Εxpenses paid by the receiving end  </small>  <br/> 01/04/2020 - 5000 Face Shields  <br/> <small> Εxpenses paid by the receiving end  </small>");

        L.marker([40.791203, 22.042702]).addTo(mapEn)
            .bindPopup("<b><u>Edessa Hospital</u></b> <br/> 30/03/2020 - 200 Face Shields <br/>  <small>  Donation by Aidplex</small>");

        L.marker([38.071819, 23.532224]).addTo(mapEn)
            .bindPopup("<b><u>Thriasio Hospital</u></b> <br/> 30/03/2020 - 30 Face Shields <br/>  <small>  Donation by Ideas Forward ΙΚΕ</small>");

        L.marker([37.977606, 23.747938]).addTo(mapEn)
            .bindPopup("<b><u>Evangelismos Hospital</u></b> <br/> 30/03/2020 - 30 Face Shields <br/>  <small> Donation by Aidplex</small>");

        L.marker([36.418044, 28.192768]).addTo(mapEn)
            .bindPopup("<b><u>Rhodes General Hospital Andreas Papandreou </u></b> <br/> 30/03/2020 - 50 Face Shields <br/>  <small> Donation by Aidplex</small> <br/> 01/04/2020 - 150 Face Shields  <br/> <small> Donation by Ideas Forward ΙΚΕ  </small>");

        L.marker([40.990324, 22.867293]).addTo(mapEn)
            .bindPopup("<b><u>Kilkis Hospital</u></b> <br/> 30/03/2020 - 10 Face Shields <br/>  <small> Donation by Aidplex</small>");

        L.marker([40.802157, 22.045014]).addTo(mapEn)
            .bindPopup("<b><u>Edessa Municipality</u></b> <br/> 30/03/2020 - 50 Face Shields <br/>  <small> Donation by SOULIS S.A</small>  <br/> 31/03/2020 - 100 Face Shields  <br/> <small> Donation by SOULIS S.A </small>");

        L.marker([40.768194, 22.154981]).addTo(mapEn)
            .bindPopup("<b><u>Skydra Municipality</u></b> <br/> 31/03/2020 - 50 Face Shields <br/>  <small> Donation by SOULIS S.A</small>");

        L.marker([40.805516, 22.052873]).addTo(mapEn)
            .bindPopup("<b><u>Pella Chamber of Commerce</u></b> <br/> 31/03/2020 - 1000 Face Shields <br/>  <small> Donation by SOULIS S.A</small>");

        L.marker([39.623375, 19.921558]).addTo(mapEn)
            .bindPopup("<b><u>Medical Association of Corfu</u></b> <br/> 01/04/2020 - 1300 Face Shields <br/>  <small> Εxpenses paid by the receiving end</small>");

        L.marker([35.335168, 25.131896]).addTo(mapEn)
            .bindPopup("<b><u>Medical Association of Heraklion</u></b> <br/> 01/04/2020 - 1200 Face Shields <br/>  <small> Εxpenses paid by the receiving end</small>");

        L.marker([38.367195, 21.427168]).addTo(mapEn)
            .bindPopup("<b><u>Medical Association of Aitoloakarnania</u></b> <br/> 01/04/2020 - 400 Face Shields <br/>  <small> Εxpenses paid by the receiving end</small>");

        L.marker([40.994525, 22.872674]).addTo(mapEn)
            .bindPopup("<b><u>Medical Association of Kilkis</u></b> <br/> 01/04/2020 - 400 Face Shields <br/>  <small> Εxpenses paid by the receiving end</small>");

        L.marker([38.016564, 23.665329]).addTo(mapEn)
            .bindPopup("<b><u>Attikon Hospital (2nd University Clinic of Anesthesiology)</u></b> <br/> 01/04/2020 - 20 Face Shields <br/>  <small> Donation by Ideas Forward ΙΚΕ</small>");

        L.marker([38.521049, 22.376063]).addTo(mapEn)
            .bindPopup("<b><u>Amphissa General Hospital (Artificial Kidney Unit)</u></b> <br/> 01/04/2020 - 10 Face Shields <br/>  <small> Donation by Ideas Forward ΙΚΕ</small>");

        L.marker([40.087995, 21.436862]).addTo(mapEn)
            .bindPopup("<b><u>Grevena General Hospital</u></b> <br/> 01/04/2020 - 20 Face Shields <br/>  <small> Donation by Ideas Forward ΙΚΕ</small>");

        L.marker([37.882434, 23.932171]).addTo(mapEn)
            .bindPopup("<b><u>Municipality of Markopoulo, General Secretariat of Civil Protection</u></b> <br/> 01/04/2020 - 190 Face Shields <br/>  <small> Donation by Ideas Forward ΙΚΕ</small>");

        L.marker([40.307198, 21.786191]).addTo(mapEn)
            .bindPopup("<b><u>Mamatsio General Hospital of Kozani</u></b> <br/> 01/04/2020 - 50 Face Shields <br/>  <small> Donation by Ideas Forward ΙΚΕ</small>");

        L.marker([41.151224, 24.151551]).addTo(mapEn)
            .bindPopup("<b><u>Pharmacist Association of Drama</u></b> <br/> 01/04/2020 - 10 Face Shields <br/>  <small> Donation by Ideas Forward ΙΚΕ</small>");

        L.marker([36.431051, 28.236616]).addTo(mapEn)
            .bindPopup("<b><u>Dental Association of Dodecanese </u></b> <br/> 01/04/2020 - 210 Face Shields <br/>  <small> Donation by Aidplex</small>");

        L.marker([40.634167, 22.955885]).addTo(mapEn)
            .bindPopup("<b><u>G. Gennimatas General Hospital of Thessaloniki - Nurse Service Administration</u></b> <br/> 01/04/2020 - 100 Face Shields <br/>  <small> Donation by Aidplex</small>");

        L.marker([40.845119, 25.874201]).addTo(mapEn)
            .bindPopup("<b><u>Medical Association of Evros</u></b> <br/> 02/04/2020 - 900 Face Shields <br/>  <small> Εxpenses paid by the receiving end</small>");

        L.marker([39.504021, 20.266716]).addTo(mapEn)
            .bindPopup("<b><u>Medical Association of Thesprotia</u></b> <br/> 02/04/2020 - 200 Face Shields <br/>  <small> Εxpenses paid by the receiving end</small>");

        L.marker([40.628192, 22.072994]).addTo(mapEn)
            .bindPopup("<b><u>Naoussa General Hospital</u></b> <br/> 02/04/2020 - 500 Face Shields <br/>  <small> Εxpenses paid by the receiving end</small>");

        L.marker([40.642889, 22.913000]).addTo(mapEn)
            .bindPopup("<b><u>Burns and Plastic surgery department, G. Papanikolaou General Hospital</u></b> <br/> 02/04/2020 - 600 Face Shields <br/>  <small> Εxpenses paid by the receiving end</small>");

        L.marker([40.631040, 23.044819]).addTo(mapEn)
            .bindPopup("<b><u>General Hospital Papanikolaou A' ICU</u></b> <br/> 02/04/2020 - 100 Face Shields <br/>  <small>Donation by Aidplex</small>");

        L.marker([40.503348, 22.216374]).addTo(mapEn)
            .bindPopup("<b><u>General Hospital of Veria</u></b> <br/> 03/04/2020 - 900 Face Shields <br/>  <small>Εxpenses paid by the receiving end</small>");

        L.marker([40.525396, 22.204685]).addTo(mapEn)
            .bindPopup("<b><u>Medical Association of Imathias</u></b> <br/> 03/04/2020 - 600 Face Shields <br/>  <small>Εxpenses paid by the receiving end</small>");

        L.marker([40.672803, 22.963414]).addTo(mapEn)
            .bindPopup("<b><u>424 Army General Hospital</u></b> <br/> 03/04/2020 - 300 Face Shields <br/>  <small>Εxpenses paid by the receiving end</small>");

        L.marker([41.352366, 26.503715]).addTo(mapEn)
            .bindPopup("<b><u>Didimoteixo General Hospital</u></b> <br/> 04/04/2020 - 600 Face Shields <br/>  <small>Private donation</small>");

        L.marker([40.520939, 21.263127]).addTo(mapEn)
            .bindPopup("<b><u>Medical Association of Kastoria</u></b> <br/> 06/04/2020 - 1000 Face Shields <br/>  <small>Εxpenses paid by the receiving end</small>");

        L.marker([40.522520, 23.070246]).addTo(mapEn)
            .bindPopup("<b><u>St George Elderly Care Unit</u></b> <br/> 06/04/2020 - 100 Face Shields <br/>  <small>Εxpenses paid by the receiving end</small>");

        L.marker([39.589816, 19.893430]).addTo(mapEn)
            .bindPopup("<b><u>Municipality of Kerkyra</u></b> <br/> 06/04/2020 - 400 Face Shields <br/>  <small>Εxpenses paid by the receiving end</small>");

        L.marker([41.142254, 24.879112]).addTo(mapEn)
            .bindPopup("<b><u>Mobile Surgical Hospital of Xanthi</u></b> <br/> 06/04/2020 - 600 Face Shields <br/>  <small>Private donation</small>");

        L.marker([41.352704, 26.503554]).addTo(mapEn)
            .bindPopup("<b><u>Mobile Surgical Hospital of Didimoticho</u></b> <br/> 06/04/2020 - 300 Face Shields <br/>  <small>Private donation</small>");

        L.marker([38.623642, 21.409590]).addTo(mapEn)
            .bindPopup("<b><u>Medical Association of Agrinio</u></b> <br/> 06/04/2020 - 800 Face Shields <br/>  <small>Εxpenses paid by the receiving end</small> <br/> 08/03/2020 - 200 Face Shields  <br/> <small> Εxpenses paid by the receiving end </small>");

        L.marker([37.986316, 23.759998]).addTo(mapEn)
            .bindPopup("<b><u>1st Health District of Attica</u></b> <br/> 07/04/2020 - 25 Face Shields <br/>  <small>Donation by SOULIS S.A</small>");

        L.marker([37.995045, 23.779350]).addTo(mapEn)
            .bindPopup("<b><u>Sotiria Thoracic Diseases Hospital of Athens</u></b> <br/> 07/04/2020 - 100 Face Shields <br/>  <small>Donation by SOULIS S.A</small>");

        L.marker([37.981542, 23.758412]).addTo(mapEn)
            .bindPopup("<b><u>Médecins Sans Frontières (MSF) Greece</u></b> <br/> 07/04/2020 - 100 Face Shields <br/>  <small>Donation by SOULIS S.A</small>");

        L.marker([39.598401, 20.314816]).addTo(mapEn)
            .bindPopup("<b><u>General Hospital of Filiata</u></b> <br/> 07/04/2020 - 60 Face Shields <br/>  <small>Εxpenses paid by the receiving end</small>");

        L.marker([37.992299, 23.769017]).addTo(mapEn)
            .bindPopup("<b><u>Hellenic Red Cross, Orthopedic Clinic</u></b> <br/> 07/04/2020 - 150 Face Shields <br/>  <small>Donation by SOULIS S.A</small>");

        L.marker([41.494442, 26.534008]).addTo(mapEn)
            .bindPopup("<b><u>Health Centre of Orestias</u></b> <br/> 07/04/2020 - 25 Face Shields <br/>  <small>Donation by SOULIS S.A</small>");

        L.marker([40.631214, 23.045704]).addTo(mapEn)
            .bindPopup("<b><u>Γενικό Νοσοκομείο Παπανικολάου Πλαστική Χειρουργική & Μ.Ε.Θ. Εγκαυμάτων</u></b> <br/> 02/04/2020 - 25 Face Shields <br/>  <small>Donation by Aidplex</small>");

        L.marker([38.264182, 21.760142]).addTo(mapEn)
            .bindPopup("<b><u>Olympion Rehabilitation Center & Care</u></b> <br/> 06/04/2020 - 100 Face Shields <br/>  <small>Εxpenses paid by the receiving end</small>");

        L.marker([37.848084, 23.754751]).addTo(mapEn)
            .bindPopup("<b><u>I.C.U General Hospital of Athens Asklipieio Voulas</u></b> <br/> 07/04/2020 - 150 Face Shields <br/>  <small>Donation by SOULIS S.A</small>");

        L.marker([37.979717, 23.751011]).addTo(mapEn)
            .bindPopup("<b><u>A' Pathology Clinic 417 General Military Hospital NIMTS</u></b> <br/> 07/04/2020 - 75 Face Shields <br/>  <small>Donation by SOULIS S.A</small>");

        L.marker([40.549139, 23.018629]).addTo(mapEn)
            .bindPopup("<b><u>Social Grocery Store of Thermi</u></b> <br/> 07/04/2020 - 3 Face Shields <br/>  <small>Donation by Aidplex</small>");

        L.marker([38.929020, 22.422613]).addTo(mapEn)
            .bindPopup("<b><u>General Hospital of Lamiaς</u></b> <br/> 09/04/2020 - 500 Face Shields <br/>  <small>Private donation</small>");

        L.marker([38.899372, 22.434444]).addTo(mapEn)
            .bindPopup("<b><u>Ιδιώτες Ιατροί Ν.Φθιώτιδας</u></b> <br/> 09/04/2020 - 50 Face Shields <br/>  <small>Private donation</small>");


});