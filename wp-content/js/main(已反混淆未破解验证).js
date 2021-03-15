var host2 = document['domain'];
var xy = location['protocol'];
var url = 'https://api.iecraft.com/verify/seaous.php?callback=?';
$['ajax']({
url: url,
type: 'GET',
complete: function (_0xb1a5x4) {
  if (_0xb1a5x4['status'] == 200) {
      console['log']('成功连接到验证服务器！');
  } else {
      alert('抱歉，无法连接至验证服务器。请检查网站运行设备是否连接网络。');
  }
}
});
$(function () {
$['getJSON'](url, {
  host2: host2,
  id: 1
}, function (_0xb1a5x5) {
  if ('done' in _0xb1a5x5) {
      console['log']('域名 ' + host2 + ' 正版验证成功。');
  } else {
      if (xy == 'file:') {
          console['log']('本地模式开启');
      } else {
          {
              window['location']['href'] = 'http://www.iecraft.com';
              alert('抱歉！您当前域名未通过IEcraft系统授权，无法绑定域名使用，请支持正版，购买后再使用，谢谢。');
          }
      }
  }
});
});
$(window)['scroll'](function () {
if ($(this)['scrollTop']() > 100) {
  $('#header')['addClass']('header-scrolled');
} else {
  $('#header')['removeClass']('header-scrolled');
}
});
if ($(window)['scrollTop']() > 100) {
$('#header')['addClass']('header-scrolled');
}
$(document)['on']('click', '.nav-menu a, .mobile-nav a, .scrollto', function (_0xb1a5x6) {
if (location['pathname']['replace'](/^\//, '') == this['pathname']['replace'](/^\//, '') && location['hostname'] == this['hostname']) {
  _0xb1a5x6['preventDefault']();
  var _0xb1a5x7 = $(this['hash']);
  if (_0xb1a5x7['length']) {
      var _0xb1a5x8 = _0xb1a5x7['offset']()['top'];
      var _0xb1a5x9 = 20;
      if ($('#header')['length']) {
          _0xb1a5x8 -= $('#header')['outerHeight']();
          if (!$('#header')['hasClass']('header-scrolled')) {
              _0xb1a5x8 += _0xb1a5x9;
          }
      }
      if ($(this)['attr']('href') == '#header') {
          _0xb1a5x8 = 0;
      }
      $('html, body')['animate']({ scrollTop: _0xb1a5x8 }, 1500, 'easeInOutExpo');
      if ($(this)['parents']('.nav-menu, .mobile-nav')['length']) {
          $('.nav-menu .active, .mobile-nav .active')['removeClass']('active');
          $(this)['closest']('li')['addClass']('active');
      }
      if ($('body')['hasClass']('mobile-nav-active')) {
          $('body')['removeClass']('mobile-nav-active');
          $('.mobile-nav-toggle i')['toggleClass']('bx-menu bx-x');
          $('.mobile-nav-overly')['fadeOut']();
      }
      return false;
  }
}
});
if ($('.nav-menu')['length']) {
var $mobile_nav = $('.nav-menu')['clone']()['prop']({ class: 'mobile-nav d-lg-none' });
$('body')['append']($mobile_nav);
$('body')['prepend']('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="bx bx-menu"></i></button>');
$('body')['append']('<div class="mobile-nav-overly"></div>');
$(document)['on']('click', '.mobile-nav-toggle', function (_0xb1a5x6) {
  $('body')['toggleClass']('mobile-nav-active');
  $('.mobile-nav-toggle i')['toggleClass']('bx-menu bx-x');
  $('.mobile-nav-overly')['toggle']();
});
$(document)['on']('click', '.mobile-nav .drop-down > a', function (_0xb1a5x6) {
  _0xb1a5x6['preventDefault']();
  $(this)['next']()['slideToggle'](300);
  $(this)['parent']()['toggleClass']('active');
});
$(document)['click'](function (_0xb1a5x6) {
  var _0xb1a5xb = $('.mobile-nav, .mobile-nav-toggle');
  if (!_0xb1a5xb['is'](_0xb1a5x6['target']) && _0xb1a5xb['has'](_0xb1a5x6['target'])['length'] === 0) {
      if ($('body')['hasClass']('mobile-nav-active')) {
          $('body')['removeClass']('mobile-nav-active');
          $('.mobile-nav-toggle i')['toggleClass']('bx-menu bx-x');
          $('.mobile-nav-overly')['fadeOut']();
      }
  }
});
} else {
if ($('.mobile-nav, .mobile-nav-toggle')['length']) {
  $('.mobile-nav, .mobile-nav-toggle')['hide']();
}
}
if (window['matchMedia']('(max-width: 767px)')['matches']) {
$('#hero')['css']({ height: $(window)['height']() });
}
var heroCarousel = $('#heroCarousel');
heroCarousel['on']('slid.bs.carousel', function (_0xb1a5x6) {
$(this)['find']('h2')['addClass']('animated fadeInDown');
$(this)['find']('p')['addClass']('animated fadeInUp');
$(this)['find']('.btn-get-started')['addClass']('animated fadeInUp');
});
$(window)['scroll'](function () {
if ($(this)['scrollTop']() > 100) {
  $('.back-to-top')['fadeIn']('slow');
} else {
  $('.back-to-top')['fadeOut']('slow');
}
});
$('.back-to-top')['click'](function () {
$('html, body')['animate']({ scrollTop: 0 }, 1500, 'easeInOutExpo');
return false;
});
$(window)['on']('load', function () {
$('.venobox')['venobox']();
});
$('[data-toggle="counter-up"]')['counterUp']({
delay: 10,
time: 1000
});
$('.skills-content')['waypoint'](function () {
$('.progress .progress-bar')['each'](function () {
  $(this)['css']('width', $(this)['attr']('aria-valuenow') + '%');
});
}, { offset: '80%' });
$('.testimonials-carousel')['owlCarousel']({
autoplay: true,
dots: true,
loop: true,
items: 1
});
$(window)['on']('load', function () {
var _0xb1a5xd = $('.portfolio-container')['isotope']({ layoutMode: 'fitRows' });
$('#portfolio-flters li')['on']('click', function () {
  $('#portfolio-flters li')['removeClass']('filter-active');
  $(this)['addClass']('filter-active');
  _0xb1a5xd['isotope']({ filter: $(this)['data']('filter') });
});
});
AOS['init']({
duration: 1000,
easing: 'ease-in-out-back'
});