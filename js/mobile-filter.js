
/* mobile filter */

var filter1 = document.getElementById('filter-mobile-black');
var mobile_filter1 = document.getElementById('mobile-filter-1');
var item1 = document.getElementById('item-1');
var item2 = document.getElementById('item-2');
var item3 = document.getElementById('item-3');
var item4 = document.getElementById('item-4');
var item5 = document.getElementById('item-5');
var item6 = document.getElementById('item-6');


var bitti_a = document.querySelectorAll('.bitti-a');

bitti_a.forEach(item => item.addEventListener('click', function () {
	filter1.style.opacity = "0";
	filter1.style.pointerEvents = "none";
	mobile_filter1.style.transform = "translateY(100%)";
}));


function mobileFilterAll() {
	if (window.innerWidth < 900) {
		backAllFilters();
		filter1.style.opacity = "1";
		filter1.style.pointerEvents = "all";
		mobile_filter1.style.transform = "translateY(0%)";
	}
}

//----------------------------------------------
function openTur() {
	item1.style.position = "absolute";
	item1.style.transform = "translateX(-100%)";

	item2.style.position = "static";
	item2.style.transform = "translateX(0%)";
}


function openOdalar() {

	item1.style.position = "absolute";
	item1.style.transform = "translateX(-200%)";

	item2.style.position = "absolute";
	item2.style.transform = "translateX(-100%)";

	item3.style.position = "static";
	item3.style.transform = "translateX(0%)";
}


function openStiller() {
	item1.style.position = "absolute";
	item1.style.transform = "translateX(-100%)";

	item2.style.position = "absolute";
	item2.style.transform = "translateX(-100%)";

	item3.style.position = "absolute";
	item3.style.transform = "translateX(-100%)";

	item4.style.position = "static";
	item4.style.transform = "translateX(0%)";
}


function openKonum() {
	item1.style.position = "absolute";
	item1.style.transform = "translateX(-100%)";

	item2.style.position = "absolute";
	item2.style.transform = "translateX(-100%)";

	item3.style.position = "absolute";
	item3.style.transform = "translateX(-100%)";

	item4.style.position = "absolute";
	item4.style.transform = "translateX(-100%)";

	item5.style.position = "static";
	item5.style.transform = "translateX(0%)";
}



function openMalzeme() {
	item1.style.position = "absolute";
	item1.style.transform = "translateX(-100%)";

	item2.style.position = "absolute";
	item2.style.transform = "translateX(-100%)";

	item3.style.position = "absolute";
	item3.style.transform = "translateX(-100%)";

	item4.style.position = "absolute";
	item4.style.transform = "translateX(-100%)";

	item5.style.position = "absolute";
	item5.style.transform = "translateX(-100%)";


	item6.style.position = "static";
	item6.style.transform = "translateX(0%)";
}

function backAllFilters() {
	item1.style.position = "static";
	item1.style.transform = "translateX(0%)";

	item2.style.position = "absolute";
	item2.style.transform = "translateX(100%)";

	item3.style.position = "absolute";
	item3.style.transform = "translateX(100%)";

	item4.style.position = "absolute";
	item4.style.transform = "translateX(100%)";

	item5.style.position = "absolute";
	item5.style.transform = "translateX(100%)";

	item6.style.position = "absolute";
	item6.style.transform = "translateX(100%)";
}


/* open self */

function openSelfTur() {
	if (window.innerWidth < 900) {
		backAllFilters();
		filter1.style.opacity = "1";
		filter1.style.pointerEvents = "all";
		mobile_filter1.style.transform = "translateY(0%)";
		item1.style.position = "absolute";
		item1.style.transform = "translateX(-100%)";

		item2.style.position = "static";
		item2.style.transform = "translateX(0%)";
	}
}


function openSelfOdalar() {
	if (window.innerWidth < 900) {
		backAllFilters();
		filter1.style.opacity = "1";
		filter1.style.pointerEvents = "all";
		mobile_filter1.style.transform = "translateY(0%)";
		item1.style.position = "absolute";
		item1.style.transform = "translateX(-200%)";

		item2.style.position = "absolute";
		item2.style.transform = "translateX(-100%)";

		item3.style.position = "static";
		item3.style.transform = "translateX(0%)";
	}
}


function openSelfStiller() {
	if (window.innerWidth < 900) {
		backAllFilters();
		filter1.style.opacity = "1";
		filter1.style.pointerEvents = "all";
		mobile_filter1.style.transform = "translateY(0%)";
		item1.style.position = "absolute";
		item1.style.transform = "translateX(-100%)";

		item2.style.position = "absolute";
		item2.style.transform = "translateX(-100%)";

		item3.style.position = "absolute";
		item3.style.transform = "translateX(-100%)";

		item4.style.position = "static";
		item4.style.transform = "translateX(0%)";
	}
}


function openSelfKonum() {
	if (window.innerWidth < 900) {
		backAllFilters();
		filter1.style.opacity = "1";
		filter1.style.pointerEvents = "all";
		mobile_filter1.style.transform = "translateY(0%)";
		item1.style.position = "absolute";
		item1.style.transform = "translateX(-100%)";

		item2.style.position = "absolute";
		item2.style.transform = "translateX(-100%)";

		item3.style.position = "absolute";
		item3.style.transform = "translateX(-100%)";

		item4.style.position = "absolute";
		item4.style.transform = "translateX(-100%)";

		item5.style.position = "static";
		item5.style.transform = "translateX(0%)";
	}
}


function openSelfMalzeme() {
	if (window.innerWidth < 900) {
		backAllFilters();
		filter1.style.opacity = "1";
		filter1.style.pointerEvents = "all";
		mobile_filter1.style.transform = "translateY(0%)";
		item1.style.position = "absolute";
		item1.style.transform = "translateX(-100%)";

		item2.style.position = "absolute";
		item2.style.transform = "translateX(-100%)";

		item3.style.position = "absolute";
		item3.style.transform = "translateX(-100%)";

		item4.style.position = "absolute";
		item4.style.transform = "translateX(-100%)";

		item5.style.position = "absolute";
		item5.style.transform = "translateX(-100%)";

		item6.style.position = "static";
		item6.style.transform = "translateX(0%)";
	}
}

var $radios = $('input[type="radio"]');
$radios.click(function () {
	var $this = $(this);
	if ($this.data('checked')) {
		this.checked = false;
	}
	var $otherRadios = $radios.not($this).filter('[name="'
		+ $this.attr('name') + '"]');
	$otherRadios.prop('checked', false).data('checked', false);
	$this.data('checked', this.checked);
});









var result_mimari_desk = document.getElementById('result-mimari-desk');
var result_icmimari_desk = document.getElementById('result-icmimari-desk');
var result_peyzaj_desk = document.getElementById('result-peyzaj-desk');
var result_endustri_desk = document.getElementById('result-endustri-desk');


var result_mimari_mobile = document.getElementById('result-mimari-mobile');
var result_icmimari_mobile = document.getElementById('result-icmimari-mobile');
var result_peyzaj_mobile = document.getElementById('result-peyzaj-mobile');
var result_endustri_mobile = document.getElementById('result-endustri-mobile');

var alert_p = document.getElementById('alert-p');
var alert_p_desk = document.getElementById('alert-p-desk');


function alanMimariGoster() {
	result_mimari_desk.style.display = "flex";
	alert_p_desk.style.display = "none";
}

function alanIcMimariGoster() {
	result_icmimari_desk.style.display = "flex";
	alert_p_desk.style.display = "none";
}

function alanPeyzajGoster() {
	result_peyzaj_desk.style.display = "flex";
	alert_p_desk.style.display = "none";
}

function alanEndustriGoster() {
	result_endustri_desk.style.display = "flex";
	alert_p_desk.style.display = "none";
}



function alanMimariGosterMobile() {
	result_mimari_mobile.style.display = "block";
	alert_p.style.display = "none";
}

function alanIcMimariGosterMobile() {
	result_icmimari_mobile.style.display = "block";
	alert_p.style.display = "none";
}

function alanPeyzajGosterMobile() {
	result_peyzaj_mobile.style.display = "block";
	alert_p.style.display = "none";
}

function alanEndustriGosterMobile() {
	result_endustri_mobile.style.display = "block";
	alert_p.style.display = "none";
}