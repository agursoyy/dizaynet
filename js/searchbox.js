$(document).ready(function () {
  mobile_menu();
});

const mobile_menu = () => {
  $("button.close-btn").click(function (e) {
    e.preventDefault();
    $(".search-box").removeClass("checked");
    $("header").removeClass("p-0");
    $("header").removeClass("b-none");

    $(".logo").removeClass("d-none");
    $(".mobile-search").removeClass("d-none");
    $(".notif-pop-main").removeClass("d-none");
    $(".user-pop-main").removeClass("d-none");

  });
  $("button.search-btn").click(function (e) {
    e.preventDefault();
    $(".search-box").addClass("checked");
    $("header").addClass("p-0");
    $("header").addClass("b-none");

    $(".logo").addClass("d-none");
    $(".mobile-search").addClass("d-none");
    $(".notif-pop-main").addClass("d-none");
    $(".user-pop-main").addClass("d-none");
    $('.hamburger-menu').addClass("d-none");
  });

  $(window).resize(function () {
    if (window.innerWidth > 1200) {
      $(".search-box").removeClass("checked");
      $("header").removeClass("p-0");
      $("header").removeClass("b-none");

      $(".logo").removeClass("d-none");
      $(".mobile-search").removeClass("d-none");
      $(".notif-pop-main").removeClass("d-none");
      $(".user-pop-main").removeClass("d-none");
    }
  });

  const items = [{ category: 'dizayn', item: 'item' }, { category: 'profesyoneller', item: 'item' },
  { category: 'blog', item: 'item' }, { category: 'yarisma', item: 'item' }];
  const web_search = () => {
    $('.input-text').keyup(function () {
      $('.search-list').html('');
      const search_val = $('.input-text').val();

      let filtered_items = items.filter(f => f.item.includes(search_val));
      if (!search_val || filtered_items.length == 0) {
        $('.search-list').css('display', 'none');
      }
      else {
        $('.search-list').css('display', 'block');
        filtered_items.forEach(item => {
          let selected_icon = '';
          if (item.category === 'dizayn') {
            selected_icon = './images/dizayn-ico.svg'
          }
          else if (item.category === 'profesyoneller') {
            selected_icon = './images/profesyoneller-ico.svg'
          }
          else if (item.category === 'blog') {
            selected_icon = './images/blog-ico.svg'
          }
          else if (item.category === 'yarisma') {
            selected_icon = './images/yarisma-ico.svg'
          }
          $('.search-list').append('<div class="item">' + '<img src="' + selected_icon + '"' + 'class="item-icon" alt="icon" />' +
            '	<a href="####" class="item-text">' + item.item + '</a> ' +
            '</div>');
        });
      }

    });
  }
  const mobile_search = () => {
    $('.input-text-mobile').keyup(function () {
      $('.search-list').html('');
      $('.search-list').html('');
      const search_val = $('.input-text-mobile').val();


      let filtered_items = items.filter(f => f.item.includes(search_val));
      if (!search_val || filtered_items.length == 0) {
        $('.search-list').css('display', 'none');
      }
      else {
        $('.search-list').css('display', 'block');

        filtered_items.forEach(item => {
          let selected_icon = '';
          if (item.category === 'dizayn') {
            selected_icon = './images/dizayn-ico.svg'
          }
          else if (item.category === 'profesyoneller') {
            selected_icon = './images/profesyoneller-ico.svg'
          }
          else if (item.category === 'blog') {
            selected_icon = './images/blog-ico.svg'
          }
          else if (item.category === 'yarisma') {
            selected_icon = './images/yarisma-ico.svg'
          }
          $('.search-list').append('<div class="item">' + '<img src="' + selected_icon + '"' + 'class="item-icon" alt="icon" />' +
            '	<a href="####" class="item-text">' + item.item + '</a> ' +
            '</div>');
        });
      }

    });
  }
  web_search();
  mobile_search();
  $("body").click
    (
      function (e) {
        if (e.target.className !== ".search-list") {
          $(".search-list").hide();
          $(".input-text").val('');
          $(".input-text-mobile").val('');
        }
      }
    );


}
