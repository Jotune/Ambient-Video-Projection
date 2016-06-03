// Inspired by Phillips Ambilight, 
// Creates lights effects around any HTML5 video that correspond to the his content
// https://github.com/Jotune/AmbientVideoLightsProjection_Core

//Core method, you need to supply a <video> element
function avp_core(videoId, containerId,  refreshRate = 30) {
	var video = document.getElementById(videoId);
	var canvasAvp = CreateCanvas(containerId);	
	var ctxAvp = canvasAvp.getContext('2d');
	var annimation;
	
	function CreateCanvas(containerId) {
        var canvas = document.createElement("canvas");
        canvas.style.position = "absolute";
        document.getElementById(containerId).appendChild(canvas);
        canvas.id = "AvpCanvas";
        canvas.style.top = 0;
        canvas.style.left = 0;
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.webkitFilter = "blur(80px)";
		return canvas;
	}
	
	// This method will start drawing the video the canvasAvp
	this.Start = function () {
		canvasAvp.setAttribute('width', video.videoWidth);
		canvasAvp.setAttribute('height', video.videoHeight);

		//Start playing the video
		video.play();
		
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
