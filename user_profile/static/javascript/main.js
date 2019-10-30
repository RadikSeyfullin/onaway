$(document).ready(function () {
	$('#maipage').fullpage({
    scrollingSpeed: 1200
	});
});
/*Функция для скрытие и появление элементов*/
function look (block, but, type)
{
	if (type == 'reg')
	{
    if ($(block).css('display') == 'none' && $(but).css('display') == 'block' )
        {
            $(block).animate({height: 'show'}, 500);
						$(but).animate({height: 'hide'}, 250);
						$('#reg-last-page').animate({height: 'hide'}, 250);
        }
    else
        {
						$(but).animate({height: 'hide'}, 500);
            $(block).animate({height: 'show'}, 500);
        }
	}
	else if (type == 'login') {
		if ($(block).css('display') == 'none' && $(but).css('display') == 'block' )
				{
						$(block).animate({height: 'show'}, 500);
						$(but).animate({height: 'hide'}, 250);
						$('#login-last-page').animate({height: 'hide'}, 250);
				}
	}
	else {
		return false;
	}
}

function goback(show, hide) {
	if ($(show).css('display') == 'none' && $(hide).css('display') == 'block')
	{
		$(show).animate({height: 'show'}, 500);
		$(hide).animate({height: 'hide'}, 250);
		$('#reg-last-page').animate({height: 'show'}, 250);
		$('#login-last-page').animate({height: 'show'}, 250);
	}
}

/*Размытие фона у аватарки*/
$(document).ready(function() {
    $('.ava-profile').blurr({
        height: 300, // Height, in pixels of this blurred div.
        sharpness: 40, // Sharpness, as a number between 0-100. 100 is very sharp, 0 is extremely blurry
        offsetX: 0, // The x (left - right) offset of the image
        offsetY: 0, // The y (top - bottom) offset of the image
        callback: null // Callback to be called after the blur has been rendered. Recieves the following arguments (href, offsetX, offsetY, sharpness)
    });
});

$(document).ready(function() {
	$('.login-right').click(function() {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$('html, body').animate({scrollTop: destination}, 800);
		return false;
	});
});
