$(document).ready(function() {
	var container = document.getElementById('container');
	function browserSize() {
    var browserWidth = window.innerWidth;
    var browserHeight = window.innerHeight;

    console.log('---------------------------');
    console.log('height ' + browserHeight);
    console.log('width ' + browserWidth);
    console.log('---------------------------');
	}

	// Write info when page loads
	window.onload = browserSize;

	// Write info when browser is resized
	window.onresize = browserSize;

	var originalChars = $('.counter').text();
	function getRandom() {
		return Math.floor(Math.random()*10)+1;
	}

	function randomUser(rand) {
		var user;

		console.log(rand);
		if(rand <= 2){
			user = {
				profilePic: 'user.png',
				name: 'blah',
				username: 'blah',
			}
		} else if(rand <= 4){
			user = {
				profilePic: 'user1.png',
				name: 'blah',
				username: 'blah',
			}
		} else if(rand <= 6){
			user = {
				profilePic: 'user2.png',
				name: 'blah',
				username: 'blah',
			}
		} else if(rand <= 8){
			user = {
				profilePic: 'user3.png',
				name: 'blah',
				username: 'blah',
			}
		} else if(rand > 8) {
			user = {
				profilePic: 'user4.png',
				name: 'blah',
				username: 'blah',
			}
		}

		return user;
	}

	function posting() {
		var posting = $('.status-box').val();
		$('<div class="post">').append('<img src="img/' + randomUser(getRandom()).profilePic +'">').append('<p>' + posting).prependTo('.posts');
		$('.status-box').val('');
		$('.counter').text(originalChars);
		$('.btnPost').addClass('disabled');
	}

	$('.butt').click(function() {
		var clicked = $(this).parent();
		if(!clicked.hasClass('active')) {
			console.log(clicked);
			$('.demo').removeClass('active');
			clicked.addClass('active');
		}
	})

	$('.btnPost').addClass('disabled');

	$('.btnPost').click(posting);

	$('.status-box').keyup(function (evt) {
		var postLength = $(this).val().length;
		var charactersLeft = originalChars - postLength;

		if(charactersLeft >= 0 && charactersLeft != originalChars){
			$('.btnPost').removeClass('disabled');
			$('.counter').text(charactersLeft);
		} else {
			$('.btnPost').addClass('disabled');
		}
	});

	$('.status-box').keydown(function(evt) {
		if(evt.keyCode === 13 && !evt.shiftKey) {
			evt.preventDefault();
		}
	});
})