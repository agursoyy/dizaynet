

// when user scroll down hide bottom bar, when scrolls up show bottom bar
$(function () {
	var lastScrollTop = 0, delta = 5;
	$(window).scroll(function () {
		var nowScrollTop = $(this).scrollTop();
		if (Math.abs(lastScrollTop - nowScrollTop) >= delta) {
			if (nowScrollTop > lastScrollTop) {
				// ACTION ON
				// SCROLLING DOWN 
				$('.mobile-bottom-menu').addClass('go-down')
			} else {
				// ACTION ON
				// SCROLLING UP 
				$('.mobile-bottom-menu').removeClass('go-down')
			}
			lastScrollTop = nowScrollTop;
		}
	});


});



function getInputValue() {
	var inputVal = document.getElementById("invite-input").value;
	createPerson(inputVal);
	document.getElementById("invite-input").value = '';
}

var added_persons = document.getElementById('added-persons');

function createPerson(name) {
	var ad = name;
	if (ad !== '') {
		var yenidiv = document.createElement("DIV");
		yenidiv.setAttribute("class", "person");
		yenidiv.innerHTML = `${ad}<span onclick="benisil(this)" title="Sil"><i class="fa fa-trash"></i></span>`;
		added_persons.appendChild(yenidiv);
	} else {
		alert("Lütfen bir isim giriniz..");
	}
}


function benisil(spanEl) {
	var spanParent = spanEl.parentNode;
	spanParent.remove();
}


/*
var delete_person = document.querySelectorAll('.delete-person');

delete_person.forEach(item => item.addEventListener('click', function(e) {
	var element = e.target.parentNode.parentNode.parentNode;
	element.remove();
}));*/

/*
function likeComment(z) {
	var yenisayi = parseInt(z.childNodes[2].innerText);
	yenisayi++;
	var yenisayiStr = yenisayi.toString();
	z.childNodes[2].innerText = yenisayiStr;
}

*/



/* yarisma detay sayfası tab nav */

var tab_btn = document.querySelectorAll('.tab-btn');
var projeler = document.getElementById('projeler');
var aciklama = document.getElementById('aciklama');
var kaynaklar = document.getElementById('kaynaklar');
function activeTab() {
	removeTab();
	this.classList.add('active-detay-tab');

	if (this.innerText == "Teslimler") {
		projeler.style.display = "flex";
		aciklama.style.display = "none";
		kaynaklar.style.display = "none";
	} else if (this.innerText == "Açıklama") {
		projeler.style.display = "none";
		aciklama.style.display = "block";
		kaynaklar.style.display = "none";
	} else if (this.innerText == "Kaynaklar") {
		projeler.style.display = "none";
		aciklama.style.display = "none";
		kaynaklar.style.display = "flex";
	}
}


function removeTab() {
	tab_btn.forEach(item => item.classList.remove('active-detay-tab'));
}
tab_btn.forEach(item => item.addEventListener('click', activeTab));







var notif_popup = document.getElementById('notif-popup');

var filter_btn = document.querySelectorAll('.filter-button');
var filter_modal_all = document.querySelectorAll('.filter-pop');

function activeFilter() {
	removeFilter();
}
function removeFilter() {
	filter_modal_all.forEach(item => item.classList.remove('filter-open'));
}
filter_btn.forEach(item => item.addEventListener('click', activeFilter));



$(document).ready(function () {
	// Show hide popover
	var w_width = window.innerWidth;

	if (w_width > 900) {
		$(".filter-tools").click(function () {
			$(this).find(".filter-pop").addClass('filter-open');
		});

	}

	$(".user-pop-main").click(function () {
		$(this).find(".login-user-popup").css("display", "flex");
	});

	$(".notif-pop-main").click(function () {
		$(this).find(".notification-popup").css("display", "flex");
	});

	$(".chosen-one").click(function () {
		$(this).find(".chosen-one-pop").css("display", "flex");
	});

});

$(document).on("click", function (event) {


	var $trigger = $(".filter-tools");
	if ($trigger !== event.target && !$trigger.has(event.target).length) {
		$(".filter-pop").removeClass('filter-open');
	}


	var $profile_trigger = $(".user-pop-main");
	if ($profile_trigger !== event.target && !$profile_trigger.has(event.target).length) {
		$(".login-user-popup").css("display", "none");
	}


	var $notif_trigger = $(".notif-pop-main");
	if ($notif_trigger !== event.target && !$notif_trigger.has(event.target).length) {
		$(".notification-popup").css("display", "none");
	}

	var $chosen_trigger = $(".chosen-one");
	if ($chosen_trigger !== event.target && !$chosen_trigger.has(event.target).length) {
		$(".chosen-one-pop").css("display", "none");
	}
});





/* mobil kesfedin dropdown açıp-kapatma */
var mobile_kesfedin = document.getElementById('mobile-kesfedin');
function openKesfedin() {

	if (mobile_kesfedin.style.height === "auto") {
		mobile_kesfedin.style.height = "70px";
	} else {
		mobile_kesfedin.style.height = "auto";
	}
}


$('.job-info-text p.less').text($('.job-info-text p.more').text());
$('.job-info-text p.less').hide();

let letter_count_to_show = 300;  // 300 karakterden fazlasını gizle.
if ($('.job-info-text p.more').text().length > letter_count_to_show) {
	$('.job-info-text p.more').hide();
	$('.job-info-text p.less').show();
	$('.job-info-text p.less').text($('.job-info-text p.less').text().substring(0, letter_count_to_show));
}
else {
	$('.job-info-text span.more-text-button').hide();
}


/* profil sayfası açılır-kaparnır yazı */
function openJobInfoText(spanText) {
	var job_info_text = document.getElementById('job-info-text');
	if ($('.job-info-text p.less').is(':visible')) {
		$('.job-info-text p.more').show();
		$('.job-info-text p.less').hide();
		spanText.innerText = "DAHA AZ GÖSTER..";
	}
	else {
		$('.job-info-text p.more').hide();
		$('.job-info-text p.less').show();
		span.innerText = 'DEVAMINI OKU...';
	}
}






var nav_btn = document.querySelectorAll('.nav_btn');
function activeButton() {
	removeActive();
	this.classList.add('active-nav');
}
function removeActive() {
	nav_btn.forEach(item => item.classList.remove('active-nav'));
}
nav_btn.forEach(item => item.addEventListener('click', activeButton));



/* modal açıp-kapatma kontrolleri */
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var modal_search = document.getElementById('id03');
var modal_save_photo = document.getElementById('id05');
var mobile_cont_filter = document.getElementById('mobile-cont-filter');
var mobile_menu_cont = document.getElementById('mobile-menu-cont');

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
		modal2.style.display = "none";
	} else if (event.target == modal2) {
		modal2.style.display = "none";
		modal.style.display = "none";
	} else if (event.target == modal_search) {
		modal_search.style.display = "none";
		modal2.style.display = "none";
		modal.style.display = "none";
	} else if (event.target == modal_save_photo) {
		modal_save_photo.style.display = "none";
	} else if (event.target == mobile_cont_filter) {
		mobile_menu_cont.style.transform = "translateX(-100%)";
		mobile_cont_filter.style.transform = "translateX(-100%)";
	}/* else if (event.target == filter1) {
		filter1.style.opacity = "0";
		filter1.style.pointerEvents = "none";
		mobile_filter1.style.transform = "translateY(100%)";
	}*/
}

function openLogin() {
	document.getElementById('id01').style.display = 'block';
	document.getElementById('id02').style.display = 'none';
}

function openRegister() {
	document.getElementById('id01').style.display = 'none';
	document.getElementById('id02').style.display = 'block';
}

function openSearch() {
	document.getElementById('id03').style.display = 'flex';
}

function savePhoto() {
	document.getElementById('id05').style.display = 'flex';
}

function openMobileMenu() {
	var mobile_menu_cont = document.getElementById('mobile-menu-cont');
	var mobile_cont_filter = document.getElementById('mobile-cont-filter');
	mobile_menu_cont.style.transform = "translateX(0%)";
	mobile_cont_filter.style.transform = "translateX(0%)";
}
function closeMobileMenu() {
	var mobile_menu_cont = document.getElementById('mobile-menu-cont');
	var mobile_cont_filter = document.getElementById('mobile-cont-filter');
	mobile_menu_cont.style.transform = "translateX(-100%)";
	mobile_cont_filter.style.transform = "translateX(-100%)";
}



/* Yorumun devamını gör açıp-kapatma */
function readMore(comment) {
	var item = comment.parentNode.childNodes[3];
	if (item.style.height === "auto") {
		item.style.height = "44px";
	} else {
		item.style.height = "auto";
	}
}



/* Yorumlar bölümü daha fazla gör açıp-kapatma */
function moreComments() {
	var section = document.getElementById('comment-section');

	if (section.style.height === "auto") {
		section.style.height = "650px";
	} else {
		section.style.height = "auto";
	}
}






/* Profil sayfası kullanıcı bilgisi yazısı açıp-kapatma*/

var user_info_p_all = $('.user-info-p.more');
var user_info_p_less = $('.user-info-p.less');

user_info_p_less.html(user_info_p_all.html());
user_info_p_less.hide();
if (user_info_p_all.text().length > 400) {
	user_info_p_all.hide();
	user_info_p_less.show();
	$('.user-info-p.less .text').text($('.user-info-p.less .text').text().substring(0, 400))
}
else {
	$('.user-info .more-text-button').hide();
}

function openUserInfo(span) {
	if ($('.user-info-p.less').is(':visible')) {
		user_info_p_all.show();
		user_info_p_less.hide();
		span.innerText = 'Daha az...';
	}
	else {
		user_info_p_all.hide();
		user_info_p_less.show();
		span.innerText = 'Daha fazla...';
	}
}



/* Blog yazısı beğen butonu */
var begen_btn = document.getElementById('begen-btn');

function likeBlogPost() {
	begen_btn.style.backgroundColor = "#AA7C13";
}


/* 	resimler.html sayfası slider kontrolleri */
var thumb = document.querySelectorAll('.thumb');
var thumbLength = thumb.length;

slideNo = 0; // kaçıncı slide olduğunu belirleyeceğimiz slide numarası

var sliderImg = document.getElementById('slider-img');
function activeThumb() {
	removeThumb();
	this.classList.add('active-thumb');
	var thumbImg = this.childNodes[1].src;
	document.getElementById('slider-img').src = thumbImg;
	slideNo = this.id - 1;

}
function removeThumb() {
	thumb.forEach(item => item.classList.remove('active-thumb'));
}
thumb.forEach(item => item.addEventListener('click', activeThumb));




/* slider ileri-geri butonları */
function nextSlide(arti) {
	slideNo += arti;
	if (slideNo < thumbLength) {
		document.getElementById('slider-img').src = thumb[slideNo].childNodes[1].src;
		thumb.forEach(item => item.classList.remove('active-thumb'));
		thumb[slideNo].classList.add('active-thumb');
	} else {
		slideNo = -1;
	}
}

function prevSlide(eksi) {
	slideNo += eksi;
	if (slideNo < thumbLength && slideNo > -1) {
		document.getElementById('slider-img').src = thumb[slideNo].childNodes[1].src;
		thumb.forEach(item => item.classList.remove('active-thumb'));
		thumb[slideNo].classList.add('active-thumb');
	} else {
		slideNo = 5;
	}
}




/* resimler.html sayfası açılır-kapanır yazı kontrolleri*/

var mobileUserText = document.getElementById('mobile-user-text');
var chevronDown = document.getElementById('chevron-down');

function openMobileText() {
	if (mobileUserText.style.height === "auto") {
		mobileUserText.style.height = "48px";
		chevronDown.style.transform = "rotate(0deg)";
	} else {
		mobileUserText.style.height = "auto";
		chevronDown.style.transform = "rotate(180deg)";
	}
}


const openDrawingBox = () => {
	console.log($('.checkboxes-container'));
	$('.checkboxes-container').toggleClass("d-block");
}



$(document).ready(function () {
	$('.ui.dropdown').dropdown();
});


function handle_mobile_auth_screen() {
	$('#mobile-login').toggleClass('d-none');
	if ($("#mobile-login").hasClass("d-none") === false) {
		$("body").addClass("modal-open");
	}
	else
		$("body").removeClass("modal-open");
}


function open_mobile_login_screen() {  // to close login screen which visible only on small screens.
	$('#mobile-login').addClass('d-none'); // close previous screen.
	$('#kayit-mobile').addClass('d-none');

	$('#giris-mobile').toggleClass('d-none');
	if ($("#giris-mobile").hasClass("d-none") === false) {
		$("body").addClass("modal-open");
	}
	else
		$("body").removeClass("modal-open");
}

function close_all_auth() {
	$('#mobile-login').addClass('d-none'); // close previous screen.
	$('#giris-mobile').addClass('d-none');
	$('#kayit-mobile').addClass('d-none');
	$("body").removeClass("modal-open");
}

function open_mobile_signup_screen() {  // to close login screen which visible only on small screens.
	$('#mobile-login').addClass('d-none'); // close previous screen.
	$('#giris-mobile').addClass('d-none'); // close previous screen.
	$('#kayit-mobile').toggleClass('d-none');
	if ($("#kayit-mobile").hasClass("d-none") === false) {
		$("body").addClass("modal-open");
	}
	else
		$("body").removeClass("modal-open");
}



function start_rating(event) {
	console.log(event);
	//$('.rating-container .rating-of-project').hide();
	$('.rating-container .rating-of-project .rating-action-btn.first-start').hide();
	$('.rating-container .rating-result').hide();
	$('.rating-container .post-rating').show();
}


function rate_post(name, rating) { // name refers to name of the hidden input
	$(`#${name}-input`).val(rating);
	//	console.log($(`#${name}-input`).val());
	console.log(name);

	if (name === 'fikir-rating') { // skip to işlevsel rating
		$('#post-rating #category').val('islevsel-rating')
		$('#post-rating .title').text('2. İşlevsel');
	}
	else if (name === 'islevsel-rating') { // skip to işlevsel rating
		$('#post-rating #category').val('estetik-rating')
		$('#post-rating .title').text('3. Estetik');
	}
	else if (name === 'estetik-rating') { // skip to işlevsel rating
		$('#post-rating #category').val('grafik-rating')
		$('#post-rating .title').text('4. Grafik');
	}
	else if (name === 'grafik-rating') { // skip to işlevsel rating
		$('.rating-container .post-rating').hide();

		let fikir_rating_val = $('#fikir-rating-input').val();
		let islevsel_rating_val = $('#islevsel-rating-input').val();
		let estetik_rating_val = $('#estetik-rating-input').val();
		let grafik_rating_val = $('#grafik-rating-input').val();

		bar = new ldBar('.rating-container .rating-result .rated_spinners .fikir-rating .ldBar', {});
		bar.set(parseInt(fikir_rating_val), true);
		bar = new ldBar('.rating-container .rating-result .rated_spinners .islevsel-rating .ldBar', {});
		bar.set(parseInt(islevsel_rating_val), true);
		bar = new ldBar('.rating-container .rating-result .rated_spinners .estetik-rating .ldBar', {});
		bar.set(parseInt(estetik_rating_val), true);
		bar = new ldBar('.rating-container .rating-result .rated_spinners .grafik-rating .ldBar', {});
		bar.set(parseInt(grafik_rating_val), true);

		$('.rating-container .rating-result').show();
		$('.rating-container .rating-result .rated_spinners').show();



		$('#post-rating #category').val('fikir-rating') // this is critical.
	}
	//$('#post-rating').hide();
}



// new comment section functionality for hiding and showing comment texts.

const child_comments = $("#comment-section-wrapper .posted-comments");

console.log('ALP');
let last_comment_number = 0;
$("#comment-section-wrapper .posted-comments .comment").each(function (index) {
	console.log(index + ": " + $(this).text());
	$(this).addClass(`comment-${index}`);
	last_comment_number = index;
});

for (i = 0; i <= last_comment_number; i++) {
	const comment_text_less = $(`#comment-section-wrapper .comment-${i} .comment-text .comment-content.less`);
	const comment_text_more = $(`#comment-section-wrapper .comment-${i} .comment-text .comment-content.more`);

	comment_text_less.text(comment_text_more.text());
	comment_text_less.hide();
	const read_more_comment_btn = $(`#comment-section-wrapper .comment-${i} .read-more-btn`);

	const comment_letter_count = 600;  // 200 karakterden fazlasını gizle.
	if (comment_text_more.text().length > comment_letter_count) {
		comment_text_more.hide();
		comment_text_less.show();
		comment_text_less.text(comment_text_less.text().substring(0, comment_letter_count));
	}
	else {
		read_more_comment_btn.hide();
	}
	read_more_comment_btn.click(function () {
		if (comment_text_less.is(':visible')) {
			comment_text_more.show();
			comment_text_less.hide();
			read_more_comment_btn.text("Daha az göster");
		}
		else {
			comment_text_more.hide();
			comment_text_less.show();
			read_more_comment_btn.text("Devamını oku...");
		}
	})

}


/*

*/
last_comment_number = 0;
const COMMENT_NUMBER_TO_SHOW = 3; // 3 yorumdan sonrasını gizle.
$("#comment-section-wrapper .posted-comments .comment").each(function (index) {
	if (index >= COMMENT_NUMBER_TO_SHOW) {
		console.log(index);
		$(this).hide();
		$('#comment-section-wrapper .posted-comments').addClass('comment-hided');
	}
	last_comment_number = index;
});

$('.list-more-comment-btn').click(function () {
	if ($('#comment-section-wrapper .posted-comments').hasClass('comment-hided')) {
		$("#comment-section-wrapper .posted-comments .comment").show();
		$('#comment-section-wrapper .posted-comments').removeClass('comment-hided');
	}
	else {
		$("#comment-section-wrapper .posted-comments .comment").each(function (index) {
			if (index >= COMMENT_NUMBER_TO_SHOW) {
				console.log(index);
				$(this).hide();
				$('#comment-section-wrapper .posted-comments').addClass('comment-hided');
			}
			last_comment_number = index;
		});
	}
})

