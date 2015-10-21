// Inspired by Phillips Ambilight, 
// Creates lights effects around any HTML5 video that correspond to the his content
// https://github.com/Jotune/AmbientVideoLightsProjection_Core

//Core method, you need to supply a <video> element
function avp_core(video, refreshRate = 30) {
	var canvasAvp = document.getElementById('AvpCanvas');
	canvasContainer.style.webkitFilter = "blur(80px)";
	var ctxAvp = canvasAvp.getContext('2d');
	var annimation;

	// This method will start drawing the video the canvasAvp
	this.Start = function () {
		canvasAvp.setAttribute('width', video.videoWidth);
		canvasAvp.setAttribute('height', video.videoHeight);

		if (annimation == null) {
			// Define an annimation that draw the video in a canvas every "refreshRate" ms
			// Default value is 30
			annimation = window.setInterval(function () {
				if (!video.paused) {
					ctxAvp.drawImage(video, 0, 0);
				}
			}, refreshRate);
		}
	}

	// This method wil lstop the annimation
	this.Stop = function () {
		window.clearInterval(annimation);
		annimation = null;
		ctxAvp.clearRect(0, 0, canvasAvp.width, canvasAvp.height);
	}
}