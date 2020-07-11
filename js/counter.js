// Yarışmalar sayacı
$('[data-countdown]').each(function () {
  var $this = $(this), finalDate = $(this).data('countdown');
  $this.countdown(finalDate, function (event) {
    var gun_ilk = event.strftime('%D')[0];
    var gun_son = event.strftime('%D')[1];

    var saat_ilk = event.strftime('%H')[0];
    var saat_son = event.strftime('%H')[1];

    var dakika_ilk = event.strftime('%M')[0];
    var dakika_son = event.strftime('%M')[1];

    var saniye_ilk = event.strftime('%S')[0];
    var saniye_son = event.strftime('%S')[1];
    if (gun_ilk == 0 && gun_son == 0) {

      $this.html(event.strftime(`
        <span>${saat_ilk}</span><span>${saat_son}</span>:<span>${dakika_ilk}</span><span>${dakika_son}</span>:<span>${saniye_ilk}</span><span>${saniye_son}</span>
        `));
      $this.parent().find('.counter-info').html(`
        <p>Saat</p>
        <p>Dakika</p>
        <p>Saniye</p>
        `)
    }
    else {
      $this.html(event.strftime(`
        <span>${gun_ilk}</span><span>${gun_son}</span>:<span>${saat_ilk}</span><span>${saat_son}</span>:<span>${dakika_ilk}</span><span>${dakika_son}</span>
        `));
    }

  });
});

// profesyoneller ve yarıışmalar mobil slider
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});
