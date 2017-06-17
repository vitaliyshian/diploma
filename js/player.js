$(function () {

	var $player = $('#player')
	var $playlistItems = $('.play_list table tbody tr')
	var $radioStationName = $('.info p')
	var $radioStationImg = $('.info img')
	var $vol = $('#vol')
	var $play = $('.play_button')
	var $playIcon = $('.icon')

	// Задать значение громкости по умолчанию
	changeVolume($vol.val() / 100)

	function changeRadioStation (src) {
		$player.attr('src', src)
		changePlayButton()
	}

	function changeRadioStationInfo (name, imgSrc) {
		$radioStationName.text(name)
		$radioStationImg.attr('src', imgSrc)
	}

	function changeVolume (volume) {
		$player[0].volume = volume
	}

	function changePlayButton () {
		var audio = $player[0]

		if (audio.paused) {
	        audio.play()
	   		$playIcon.removeClass('play')
	    } else {
	        audio.pause()
	        $playIcon.addClass('play')
	    }
	}

	$playlistItems.on('dblclick', function (e) {
		var $tr = $(e.currentTarget)
		$playlistItems.removeClass('selected')
		$tr.addClass('selected')
		
		changeRadioStation($tr.attr('data-src'))
		changeRadioStationInfo(
			$tr.find('.name_tab').text(), 
			$tr.attr('data-img'))
	})

	$vol.on('input', function () {
		changeVolume($(this).val() / 100)
	})

	$play.on('click', function () {
		changePlayButton()
	})
})
