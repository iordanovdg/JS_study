$(document).ready(function () {


	$('.window-slider').slick({
		zIndex: 1,
		arrows: false,
		vertical: true,
		responsive: [{
			breakpoint: 1199,
			settings: {
				vertical: false,
			}
		}]
	});


	//Счетчик слайдов для .window-slider
	//цыфры до черты
	var curSlideWin = $(".window-slider").slick("slickCurrentSlide") + 1;
	$(".count-window__box .w-before").text(curSlideWin);
	//цыфры после черты
	var allSlideWin = $(".window-slider").slick("getSlick").slideCount;
	$(".count-window__box .w-after").text(allSlideWin);
	//Смена цифры в слайдере
	$(".window-slider").on("afterChange", function (event, slick, currentSlide) {
		$(".count-window__box .w-before").text(currentSlide + 1);
	});
	//*******************************

	//Назначаем кнопки для слайдера главного экрана
	$('.window__up-btn').on('click', function () {
		$(".window-slider").slick('slickNext');
	});
	$('.door__up-btn').on('click', function () {
		$(".door-slider").slick('slickNext');
	});

	$('.window__down-btn').on('click', function () {
		$(".window-slider").slick('slickPrev');
	});
	$('.door__down-btn').on('click', function () {
		$(".door-slider").slick('slickPrev');
	});
	//END-Назначаем кнопки для слик-слайдера

	// Переключение между слайдерами
	$('.switcher').on('click', function () {
		$('.switcher').toggleClass('switcher_active');
		$(".count-window__box").toggleClass('slider_hide');

		if ($('.door-slider').hasClass('slider_hide')) {
			$('.window-slider').addClass('slider_hide');
			$('.window-slider').slick('unslick');

			$('.door-slider').removeClass('slider_hide');
			$('.door-slider').slick({
				zIndex: 1,
				arrows: false,
				vertical: true,
				responsive: [{
					breakpoint: 1199,
					settings: {
						vertical: false,
					}
				}]
			});
			//Счетчик слайдов для door-slider
			//цыфры до черты
			var curSlideDoor = $(".door-slider").slick("slickCurrentSlide") + 1;
			$(".count-door__box .d-before").text(curSlideDoor);
			//цыфры после черты
			var allSlideDoor = $(".door-slider").slick("getSlick").slideCount;
			$(".count-door__box .d-after").text(allSlideDoor);
			//Смена цифры в слайдере
			$(".door-slider").on("afterChange", function (event, slick, currentSlide) {
				$(".count-door__box .d-before").text(currentSlide + 1);
			});

		} else {
			$('.window-slider').removeClass('slider_hide');
			$('.window-slider').slick({
				zIndex: 1,
				arrows: false,
				vertical: true,
			});
			$('.door-slider').addClass('slider_hide');
			$('.door-slider').slick('unslick');
		}
	});

	$('.projects-slider').slick({
		zIndex: 1,
		arrows: false,
		responsive: [{
			breakpoint: 580,
			settings: {
				arrows: true,
				prevArrow: '<button type="button" class="projects-slider_prev"><i class="fas fa-chevron-right"></i></button>',
				nextArrow: '<button type="button" class="projects-slider_next"><i class="fas fa-chevron-left"></button>',
				asNavFor: $('.projects__content-slider'),
			}
		}]

	});

	$('.projects__content-slider').slick({
		zIndex: 1,
		arrows: false,
		asNavFor: $('.projects-slider')
	});
	$('.projects__slide-about, .close-btn__project').on('click', function () {
		if ($('.projects__slide-description').hasClass('projects__slide-description_active')) {
			$('.projects__slide-description').removeClass('projects__slide-description_active');
			$('.close-btn__project').css('display', 'none');
		} else {
			$('.projects__slide-description').addClass('projects__slide-description_active');
			$('.close-btn__project').css('display', 'block');
			if ($(window).width() < 580) {
				$('.projects__slide-title').css('padding-right', '15px');
			}
		}

	});

	//Переключение сладера проектов
	$('.projects-slider__btn-next').on('click', function () {
		$(".projects-slider").slick('slickNext');
		$(".projects__content-slider").slick('slickNext');
	});
	$('.projects-slider__btn-prev').on('click', function () {
		$(".projects-slider").slick('slickPrev');
		$(".projects__content-slider").slick('slickPrev');
	});







	$('.team__slider-img').slick({
		zIndex: 1,
		arrows: false,
		vertical: true,
		responsive: [{
			breakpoint: 991,
			settings: {
				vertical: false,
			}
		}]
	});

	$('.team__slider-content').slick({
		zIndex: 1,
		arrows: false
	});

	//Назначаем кнопки для слайдера команды
	$('.team__up-btn').on('click', function () {
		$(".team__slider-img").slick('slickNext');
		$(".team__slider-content").slick('slickNext');
	});
	$('.team-btn__left').on('click', function () {
		$(".team__slider-img").slick('slickNext');
	});

	$('.team__down-btn').on('click', function () {
		$(".team__slider-img").slick('slickPrev');
		$(".team__slider-content").slick('slickPrev');
	});
	$('.team-btn__right').on('click', function () {
		$(".team__slider-img").slick('slickPrev');
	});
	//END-Назначаем кнопки для слайдера команды

	//Счетчик слайдов для сладера команды
	//цыфры до черты
	var curSlideTeam = $(".team__slider-img").slick("slickCurrentSlide") + 1;
	$(".count-team__box .t-before").text(curSlideTeam);
	//цыфры после черты
	var allSlideTeam = $(".team__slider-img").slick("getSlick").slideCount;
	$(".count-team__box .t-after").text(allSlideTeam);
	//Смена цифры в слайдере
	$(".team__slider-img").on("afterChange", function (event, slick, currentSlide) {
		$(".count-team__box .t-before").text(currentSlide + 1);
	});
	//*******************************

	//Кнопка ютуба

	$(".play-btn").click(function () {
		var src = $("#video").attr("src");
		$("#video").attr("src", src + "&autoplay=1");
		$(".iframe-wrap").removeClass("dark-bg");
		$(this).css("display", "none");


	});

	// End кнопка ютуба

	//Слайдер постов блога
	// function postSlider() {
	// 	if ($(window).width() < 1199) {
			$('.allposts-wrap').slick({
				zIndex: 1,
				arrows: false,
				infinite: true,				
				slidesToShow: 2,
				slidesToScroll: 1,
				responsive: [{
					breakpoint: 1199,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						
					}
				}]
			});
	// 	}
	// }
	// postSlider();
	//END Слайдер постов блога

	//Паралакс .promotext
	var promo1 = document.getElementById('promo1');
	var promo2 = document.getElementById('promo2');
	var promo3 = document.getElementById('promo3');
	var parallaxInstance1 = new Parallax(promo1);
	var parallaxInstance2 = new Parallax(promo2);
	var parallaxInstance3 = new Parallax(promo3);


	var mobileMenu = $('#mobile-menu').offset().top;
	var fixedBoxWrap = $('#fixed-box_wrap').offset().top;
	var orderPhoneWrap = $('#order-phone_wrap').offset().top;

	var material = $('#material').offset().top;
	var works = $('#works').offset().top;
	var philosophyCompany = $('#philosophyCompany').offset().top;
	var product = $('#product').offset().top;
	var team = $('#team').offset().top;
	var ideas = $('#ideas').offset().top;
	var collaboration = $('#collaboration').offset().top;
	var blogPposts = $('#blog-posts').offset().top;


	if ($(window).width() > 1199) {
		if ($(window).scrollTop() >= (product - 287)) {
			$('#mobile-menu').css('background-color', '#E6E2D6');
			$('#order-phone_wrap').css('background-color', '#E6E2D6');
			$('.order-phone').css('background-color', '#E6E2D6');
		} else if ($(window).scrollTop() <= product) {
			$('#mobile-menu').css('background-color', '#2a2b40');
			$('#order-phone_wrap').css('background-color', '#2a2b40');
			$('.order-phone').css('background-color', '#2a2b40');
			$('#fixed-box_wrap').css('background-color', '#2a2b40');
			$('.fixed-box').removeClass('fixed-box_light');
		}
		if ($(window).scrollTop() >= product) {
			$('#fixed-box_wrap').css('background-color', '#E6E2D6');
			$('.fixed-box').addClass('fixed-box_light');
		} else if ($(window).scrollTop() <= product) {
			$('#fixed-box_wrap').css('background-color', '#2a2b40');
			$('.fixed-box').removeClass('fixed-box_light');
		}

		if ($(window).scrollTop() >= (material - 287)) {
			$('#mobile-menu').css('background-color', '#2a2b40');
			$('#order-phone_wrap').css('background-color', '#2a2b40');
			$('.order-phone').css('background-color', '#2a2b40');
		}
		if ($(window).scrollTop() >= material) {
			$('#fixed-box_wrap').css('background-color', '#2a2b40');
			$('.fixed-box').removeClass('fixed-box_light');
		}


		if ($(window).scrollTop() >= (team - 287)) {
			$('#mobile-menu').css('background-color', '#E6E2D6');
			$('#order-phone_wrap').css('background-color', '#E6E2D6');
			$('.order-phone').css('background-color', '#E6E2D6');
		}
		if ($(window).scrollTop() >= team + 60) {
			$('#fixed-box_wrap').css('background-color', '#E6E2D6');
			$('.fixed-box').addClass('fixed-box_light');
		}

		if ($(window).scrollTop() >= (ideas - 287)) {
			$('#mobile-menu').css('background-color', '#2a2b40');
			$('#order-phone_wrap').css('background-color', '#2a2b40');
			$('.order-phone').css('background-color', '#2a2b40');
		}

		if ($(window).scrollTop() >= ideas) {
			$('#fixed-box_wrap').css('background-color', '#2a2b40');
			$('.fixed-box').removeClass('fixed-box_light');
		}

		if ($(window).scrollTop() >= (collaboration - 287)) {
			$('#mobile-menu').css('background-color', '#E6E2D6');
			$('#order-phone_wrap').css('background-color', '#E6E2D6');
			$('.order-phone').css('background-color', '#E6E2D6');
		}
		if ($(window).scrollTop() >= collaboration + 80) {
			$('#fixed-box_wrap').css('background-color', '#E6E2D6');
			$('.fixed-box').addClass('fixed-box_light');
		}

		if ($(window).scrollTop() >= (blogPposts - 287)) {
			$('#mobile-menu').css('background-color', '#2a2b40');
			$('#order-phone_wrap').css('background-color', '#2a2b40');
			$('.order-phone').css('background-color', '#2a2b40');
		}

		if ($(window).scrollTop() >= blogPposts) {
			$('#fixed-box_wrap').css('background-color', '#2a2b40');
			$('.fixed-box').removeClass('fixed-box_light');
		}

		$(document).scroll(function () {
			if ($(window).scrollTop() >= (product - 287)) {
				$('#mobile-menu').css('background-color', '#E6E2D6');
				$('#order-phone_wrap').css('background-color', '#E6E2D6');
				$('.order-phone').css('background-color', '#E6E2D6');
			} else if ($(window).scrollTop() <= product) {
				$('#mobile-menu').css('background-color', '#2a2b40');
				$('#order-phone_wrap').css('background-color', '#2a2b40');
				$('.order-phone').css('background-color', '#2a2b40');
				$('#fixed-box_wrap').css('background-color', '#2a2b40');
				$('.fixed-box').removeClass('fixed-box_light');
			}
			if ($(window).scrollTop() >= product) {
				$('#fixed-box_wrap').css('background-color', '#E6E2D6');
				$('.fixed-box').addClass('fixed-box_light');
			} else if ($(window).scrollTop() <= product) {
				$('#fixed-box_wrap').css('background-color', '#2a2b40');
				$('.fixed-box').removeClass('fixed-box_light');
			}

			if ($(window).scrollTop() >= (material - 287)) {
				$('#mobile-menu').css('background-color', '#2a2b40');
				$('#order-phone_wrap').css('background-color', '#2a2b40');
				$('.order-phone').css('background-color', '#2a2b40');
			}
			if ($(window).scrollTop() >= material) {
				$('#fixed-box_wrap').css('background-color', '#2a2b40');
				$('.fixed-box').removeClass('fixed-box_light');
			}


			if ($(window).scrollTop() >= (team - 287)) {
				$('#mobile-menu').css('background-color', '#E6E2D6');
				$('#order-phone_wrap').css('background-color', '#E6E2D6');
				$('.order-phone').css('background-color', '#E6E2D6');
			}
			if ($(window).scrollTop() >= team + 60) {
				$('#fixed-box_wrap').css('background-color', '#E6E2D6');
				$('.fixed-box').addClass('fixed-box_light');
			}

			if ($(window).scrollTop() >= (ideas - 287)) {
				$('#mobile-menu').css('background-color', '#2a2b40');
				$('#order-phone_wrap').css('background-color', '#2a2b40');
				$('.order-phone').css('background-color', '#2a2b40');
			}

			if ($(window).scrollTop() >= ideas) {
				$('#fixed-box_wrap').css('background-color', '#2a2b40');
				$('.fixed-box').removeClass('fixed-box_light');
			}

			if ($(window).scrollTop() >= (collaboration - 287)) {
				$('#mobile-menu').css('background-color', '#E6E2D6');
				$('#order-phone_wrap').css('background-color', '#E6E2D6');
				$('.order-phone').css('background-color', '#E6E2D6');
			}
			if ($(window).scrollTop() >= collaboration) {
				$('#fixed-box_wrap').css('background-color', '#E6E2D6');
				$('.fixed-box').addClass('fixed-box_light');
			}

			if ($(window).scrollTop() >= (blogPposts - 287)) {
				$('#mobile-menu').css('background-color', '#2a2b40');
				$('#order-phone_wrap').css('background-color', '#2a2b40');
				$('.order-phone').css('background-color', '#2a2b40');
			}

			if ($(window).scrollTop() >= blogPposts) {
				$('#fixed-box_wrap').css('background-color', '#2a2b40');
				$('.fixed-box').removeClass('fixed-box_light');
			}
		});
	}
	if ($(window).width() < 1199) {

		if ($(window).scrollTop() >= (product - 120)) {
			$('#mobile-menu').css('background-color', '#E6E2D6');
			$('#order-phone_wrap').css('background-color', '#E6E2D6');
			$('.order-phone').css('background-color', '#E6E2D6');
		} else if ($(window).scrollTop() <= product) {
			$('#mobile-menu').css('background-color', '#2a2b40');
			$('#order-phone_wrap').css('background-color', '#2a2b40');
			$('.order-phone').css('background-color', '#2a2b40');
			$('#fixed-box_wrap').css('background-color', '#2a2b40');
			$('.fixed-box').removeClass('fixed-box_light');
		}
		if ($(window).scrollTop() >= product) {
			$('#fixed-box_wrap').css('background-color', '#E6E2D6');
			$('.fixed-box').addClass('fixed-box_light');
		} else if ($(window).scrollTop() <= product) {
			$('#fixed-box_wrap').css('background-color', '#2a2b40');
			$('.fixed-box').removeClass('fixed-box_light');
		}

		if ($(window).scrollTop() >= (material - 120)) {
			$('#mobile-menu').css('background-color', '#2a2b40');
			$('#order-phone_wrap').css('background-color', '#2a2b40');
			$('.order-phone').css('background-color', '#2a2b40');
		}
		if ($(window).scrollTop() >= material) {
			$('#fixed-box_wrap').css('background-color', '#2a2b40');
			$('.fixed-box').removeClass('fixed-box_light');
		}


		if ($(window).scrollTop() >= works - 775) {
			$('#mobile-menu').css('background-color', '#E6E2D6');
			$('#order-phone_wrap').css('background-color', '#E6E2D6');
			$('.order-phone').css('background-color', '#E6E2D6');
		}


		if ($(window).scrollTop() >= (philosophyCompany - 778)) {
			$('#mobile-menu').css('background-color', '#2a2b40');
			$('#order-phone_wrap').css('background-color', '#2a2b40');
			$('.order-phone').css('background-color', '#2a2b40');
		}
		if ($(window).scrollTop() >= philosophyCompany) {
			$('#fixed-box_wrap').css('background-color', '#2a2b40');
			$('.fixed-box').removeClass('fixed-box_light');
		}

		if ($(window).scrollTop() >= (team - 749)) {
			$('#mobile-menu').css('background-color', '#E6E2D6');
			$('#order-phone_wrap').css('background-color', '#E6E2D6');
			$('.order-phone').css('background-color', '#E6E2D6');
		}
		if ($(window).scrollTop() >= (team - 600)) {
			$('#fixed-box_wrap').css('background-color', '#E6E2D6');
			$('.fixed-box').addClass('fixed-box_light');
		}

		if ($(window).scrollTop() >= (ideas - 749)) {
			$('#mobile-menu').css('background-color', '#2a2b40');
			$('#order-phone_wrap').css('background-color', '#2a2b40');
			$('.order-phone').css('background-color', '#2a2b40');
		}

		if ($(window).scrollTop() >= (team - 600)) {
			$('#fixed-box_wrap').css('background-color', '#2a2b40');
			$('.fixed-box').removeClass('fixed-box_light');
		}

		if ($(window).scrollTop() >= (collaboration - 749)) {
			$('#mobile-menu').css('background-color', '#E6E2D6');
			$('#order-phone_wrap').css('background-color', '#E6E2D6');
			$('.order-phone').css('background-color', '#E6E2D6');
		}
		if ($(window).scrollTop() >= (collaboration - 600)) {
			$('#fixed-box_wrap').css('background-color', '#E6E2D6');
			$('.fixed-box').addClass('fixed-box_light');
		}

		if ($(window).scrollTop() >= (blogPposts - 749)) {
			$('#mobile-menu').css('background-color', '#2a2b40');
			$('#order-phone_wrap').css('background-color', '#2a2b40');
			$('.order-phone').css('background-color', '#2a2b40');
		}

		if ($(window).scrollTop() >= (blogPposts - 600)) {
			$('#fixed-box_wrap').css('background-color', '#2a2b40');
			$('.fixed-box').removeClass('fixed-box_light');
		}

		$(document).scroll(function () {
			if ($(window).scrollTop() >= (product - 120)) {
				$('#mobile-menu').css('background-color', '#E6E2D6');
				$('#order-phone_wrap').css('background-color', '#E6E2D6');
				$('.order-phone').css('background-color', '#E6E2D6');
			} else if ($(window).scrollTop() <= product) {
				$('#mobile-menu').css('background-color', '#2a2b40');
				$('#order-phone_wrap').css('background-color', '#2a2b40');
				$('.order-phone').css('background-color', '#2a2b40');
				$('#fixed-box_wrap').css('background-color', '#2a2b40');
				$('.fixed-box').removeClass('fixed-box_light');
			}
			if ($(window).scrollTop() >= product) {
				$('#fixed-box_wrap').css('background-color', '#E6E2D6');
				$('.fixed-box').addClass('fixed-box_light');
			} else if ($(window).scrollTop() <= product) {
				$('#fixed-box_wrap').css('background-color', '#2a2b40');
				$('.fixed-box').removeClass('fixed-box_light');
			}

			if ($(window).scrollTop() >= (material - 120)) {
				$('#mobile-menu').css('background-color', '#2a2b40');
				$('#order-phone_wrap').css('background-color', '#2a2b40');
				$('.order-phone').css('background-color', '#2a2b40');
			}
			if ($(window).scrollTop() >= material) {
				$('#fixed-box_wrap').css('background-color', '#2a2b40');
				$('.fixed-box').removeClass('fixed-box_light');
			}


			if ($(window).scrollTop() >= works - 775) {
				$('#mobile-menu').css('background-color', '#E6E2D6');
				$('#order-phone_wrap').css('background-color', '#E6E2D6');
				$('.order-phone').css('background-color', '#E6E2D6');
			}


			if ($(window).scrollTop() >= (philosophyCompany - 778)) {
				$('#mobile-menu').css('background-color', '#2a2b40');
				$('#order-phone_wrap').css('background-color', '#2a2b40');
				$('.order-phone').css('background-color', '#2a2b40');
			}
			if ($(window).scrollTop() >= philosophyCompany) {
				$('#fixed-box_wrap').css('background-color', '#2a2b40');
				$('.fixed-box').removeClass('fixed-box_light');
			}

			if ($(window).scrollTop() >= (team - 749)) {
				$('#mobile-menu').css('background-color', '#E6E2D6');
				$('#order-phone_wrap').css('background-color', '#E6E2D6');
				$('.order-phone').css('background-color', '#E6E2D6');
			}
			if ($(window).scrollTop() >= (team - 600)) {
				$('#fixed-box_wrap').css('background-color', '#E6E2D6');
				$('.fixed-box').addClass('fixed-box_light');
			}

			if ($(window).scrollTop() >= (ideas - 749)) {
				$('#mobile-menu').css('background-color', '#2a2b40');
				$('#order-phone_wrap').css('background-color', '#2a2b40');
				$('.order-phone').css('background-color', '#2a2b40');
			}

			if ($(window).scrollTop() >= (team - 600)) {
				$('#fixed-box_wrap').css('background-color', '#2a2b40');
				$('.fixed-box').removeClass('fixed-box_light');
			}

			if ($(window).scrollTop() >= (collaboration - 749)) {
				$('#mobile-menu').css('background-color', '#E6E2D6');
				$('#order-phone_wrap').css('background-color', '#E6E2D6');
				$('.order-phone').css('background-color', '#E6E2D6');
			}
			if ($(window).scrollTop() >= (collaboration - 600)) {
				$('#fixed-box_wrap').css('background-color', '#E6E2D6');
				$('.fixed-box').addClass('fixed-box_light');
			}

			if ($(window).scrollTop() >= (blogPposts - 749)) {
				$('#mobile-menu').css('background-color', '#2a2b40');
				$('#order-phone_wrap').css('background-color', '#2a2b40');
				$('.order-phone').css('background-color', '#2a2b40');
			}

			if ($(window).scrollTop() >= (blogPposts - 600)) {
				$('#fixed-box_wrap').css('background-color', '#2a2b40');
				$('.fixed-box').removeClass('fixed-box_light');
			}
		});

	}

	// Активация меню сайта

	$('#mobile-menu').on('click', function () {
		$('#mobile-menu').toggleClass('burger_active');
		$('.popup').toggleClass('popup_active');
		$('body').toggleClass('body__overflow');
		$('#mobile-menu').toggleClass('popup-color');
		$('#order-phone_wrap').toggleClass('popup-color');
		$('.order-phone').toggleClass('popup-color');
		$('#fixed-box_wrap').toggleClass('popup-color');
		$('.fixed-box').toggleClass('fixed-box_light-popup');
	});

	//END Активация меню сайта



	// секция с материалами
	let infoDub = $('.material__info_dub'),
		infoSosna = $('.material__info_sosna'),
		infoList = $('.material__info_list'),
		itemDub = $('.material__item_dub'),
		itemList = $('.material__item_list'),
		itemSosna = $('.material__item_sosna'),
		itemParam = $('.material__item-param'),
		textMore = $('.material__text_more');


	$('.material__btn_dub, .close-dub').on('click', function () {

		$('.close-dub').toggleClass('elem_show');
		$('.material__btn_dub').toggleClass('elem_hide');

		if ($(window).width() < 1199) {
			$('.material__item_dub .material__info_mobile').slideToggle();
			$('.material__item_dub .material__item-img').toggleClass('elem_hide');
			$('.product__link_dub_mobile').toggleClass('elem_show');
			$('.material__item_dub .material__item-param').toggleClass('elem_hide');
			$('.material__item_dub .material__text_more').toggleClass('elem_show');
			$('.material__item_dub').toggleClass('material__item_padding');
		} else {
			infoDub.toggleClass('material__info_active');
			infoList.toggleClass('material__item_hide');
			infoSosna.toggleClass('material__item_hide');
			itemParam.toggleClass('elem_hide');
			textMore.toggleClass('elem_show');
			$('.product__link_dub').toggleClass('elem_show');
		}
	});

	$('.material__btn_list, .close-list').on('click', function () {

		$('.material__btn_list').toggleClass('elem_hide');
		$('.close-list').toggleClass('elem_show');
		if ($(window).width() < 1199) {
			$('.material__item_list .material__info_mobile').slideToggle();
			$('.material__item_list .material__item-img').toggleClass('elem_hide');
			$('.product__link_list_mobile').toggleClass('elem_show');
			$('.material__item_list .material__item-param').toggleClass('elem_hide');
			$('.material__item_list .material__text_more').toggleClass('elem_show');
			$('.material__item_list').toggleClass('material__item_padding');
		} else {
			itemDub.toggleClass('material__item_hide');
			itemSosna.toggleClass('material__item_hide');
			itemList.toggleClass('material__item_transform');
			infoList.toggleClass('material__info_active');
			itemParam.toggleClass('elem_hide');
			textMore.toggleClass('elem_show');
			$('.product__link_list').toggleClass('elem_show');
		}
	});

	$('.material__btn_sosna, .close-sosna').on('click', function () {
		$('.material__btn_sosna').toggleClass('elem_hide');
		$('.close-sosna').toggleClass('elem_show');
		if ($(window).width() < 1199) {
			$('.material__item_sosna .material__info_mobile').slideToggle();
			$('.material__item_sosna .material__item-img').toggleClass('elem_hide');
			$('.product__link_sosna_mobile').toggleClass('elem_show');
			$('.material__item_sosna .material__item-param').toggleClass('elem_hide');
			$('.material__item_sosna .material__text_more').toggleClass('elem_show');
			$('.material__item_sosna').toggleClass('material__item_padding');
		} else {
			itemDub.toggleClass('material__item_hide');
			itemList.toggleClass('material__item_hide');
			itemSosna.toggleClass('material__item_transform2');
			infoSosna.toggleClass('material__info_active');
			itemParam.toggleClass('elem_hide');
			textMore.toggleClass('elem_show');
			$('.product__link_sosna').toggleClass('elem_show');
		}
	});


	// End секция с материалами



});