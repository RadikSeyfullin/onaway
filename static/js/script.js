$(function(){
    $('.left').css("text-decoration", "underline");
  $('input[id="fstsrch"]').focus(function(){
    $(this).css("border","1px solid #fff");
  });
  $('input[id="fstsrch"]').blur(function(){
    $(this).attr('style', '');
  });
  $('input[id="sndsrch"]').focus(function(){
    $(this).css("border","1px solid #fff");
  });
  $('input[id="sndsrch"]').blur(function(){
    $(this).attr('style', '');
  });
  $('#login').focus(function() {
      $(this).css("border-bottom","1px solid #74e2c2");
  });
  $('#login').blur(function() {
      $(this).attr('style', '');
  });
  $('#password').focus(function() {
      $(this).css("border-bottom","1px solid #85e57d");
  });
  $('#password').blur(function() {
      $(this).attr('style', '');
  });
  $('#loginreg').focus(function() {
      $(this).css("border-bottom","1px solid #85e57d");
  });
  $('#loginreg').blur(function() {
      $(this).attr('style', '');
  });
  $('#emailreg').focus(function() {
      $(this).css("border-bottom","1px solid #74e2c2");
  });
  $('#emailreg').blur(function() {
      $(this).attr('style', '');
  });
  $('#passwordreg').focus(function() {
      $(this).css("border-bottom","1px solid #74e2c2");
  });
  $('#passwordreg').blur(function() {
      $(this).attr('style', '');
  });
  $('#p_password').focus(function() {
      $(this).css("border-bottom","1px solid #85e57d");
  });
  $('#p_password').blur(function() {
      $(this).attr('style', '');
  });

  function fInleft() {
      $('.loginform').fadeIn();
  }

  $('.left').click(function() {
    $('.reg').css("font-size", "30px");
    $('.reg').css("text-decoration", "none");
    $('.left').css("font-size", "50px");
    $('.left').css("text-decoration", "underline");
    /*$('.regform').attr('style','');
    $('.loginform').css('display','block');*/
    $('.regform').fadeOut();
    setTimeout(fInleft, 300);
  });

  function fInreg() {
      $('.regform').fadeIn();
  }

  $('.reg').click(function() {
    $('.reg').css("font-size", "50px");
    $('.reg').css("text-decoration", "underline");
    $('.left').css("font-size", "30px");
    $('.left').css("text-decoration", "none");
    setTimeout(fInreg, 300);
    $('.loginform').fadeOut();
    /*$('.regform').css('display','block');
    $('.loginform').css('display','none');*/
  });

  $(window).scroll (function () {
    var ratio = $(document).scrollTop () / (($(document).height () - $(window).height ()) / 100);
    $("#progress-bar").width (ratio + "%");
  });


    $(".owl-carousel").owlCarousel({
    items : 2,
    nav : false,
    navText : "",
    dots: false,
    loop: false,
    margin: 0,
    autoWidth: true,
    responsive:{
        0:{
            items: 2,
            nav : false,
            autoplay : false,
            autoplayHoverPause : false,
            fluidSpeed : 100,
            autoplaySpeed : 600,
            navSpeed : 600,
            dotsSpeed : 600,
            dragEndSpeed : 600,
            loop : false
        },
        390:{
          items : 2,
          nav : false,
          navText : "",
          dots: false,
          loop: false,
        }
      }
  });

  $(".owl-item").attr("style", "");
    $('#stuck_container').tmStickUp({});

    var currentYear = (new Date).getFullYear();
        $(document).ready(function() {
        $("#copyright-year").text( (new Date).getFullYear() );
    });
// IPad/IPhone
	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
	ua = navigator.userAgent,

	gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";},

	scaleFix = function () {
		if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
			viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			document.addEventListener("gesturestart", gestureStart, false);
		}
	};

	scaleFix();
	// Menu Android
	if(window.orientation!=undefined){
  var regM = /ipod|ipad|iphone/gi,
   result = ua.match(regM)
  if(!result) {
   $('.sf-menu li').each(function(){
    if($(">ul", this)[0]){
     $(">a", this).toggle(
      function(){
       return false;
      },
      function(){
       window.location.href = $(this).attr("href");
      }
     );
    }
   })
  }
 }
});
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')

//DIAGRAM
var o = {
	init: function(){
		this.diagram();
	},
	random: function(l, u){
		return Math.floor((Math.random()*(u-l+1))+l);
	},
	diagram: function(){
		var r = Raphael('diagram', 600, 600),
			rad = 73,
			defaultText = 'Ваши навыки',
			speed = 250;

		r.circle(300, 300, 85).attr({ stroke: 'none', fill: '#193340' });

		var title = r.text(300, 300, defaultText).attr({
			font: '20px Arial',
			fill: '#fff'
		}).toFront();

		r.customAttributes.arc = function(value, color, rad){
			var v = 3.6*value,
				alpha = v == 360 ? 359.99 : v,
				random = o.random(91, 240),
				a = (random-alpha) * Math.PI/180,
				b = random * Math.PI/180,
				sx = 300 + rad * Math.cos(b),
				sy = 300 - rad * Math.sin(b),
				x = 300 + rad * Math.cos(a),
				y = 300 - rad * Math.sin(a),
				path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
			return { path: path, stroke: color }
		}

		$('.get').find('.arc').each(function(i){
			var t = $(this),
				color = t.find('.color').val(),
				value = t.find('.percent').val(),
				text = t.find('.text').text();

			rad += 30;
			var z = r.path().attr({ arc: [value, color, rad], 'stroke-width': 26 });

			z.mouseover(function(){
                this.animate({ 'stroke-width': 50, opacity: .75 }, 1000, 'elastic');
                if(Raphael.type != 'VML') //solves IE problem
				this.toFront();
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					this.attr({ text: text + '\n' + value + '%' }).animate({ opacity: 1 }, speed, '<');
				});
            }).mouseout(function(){
				this.stop().animate({ 'stroke-width': 26, opacity: 1 }, speed*4, 'elastic');
				title.stop().animate({ opacity: 0 }, speed, '>', function(){
					title.attr({ text: defaultText }).animate({ opacity: 1 }, speed, '<');
				});
            });
		});

	}
}
$(function(){ o.init(); });
