# Ambient Video Projection (Ambivid's core)
Inspired by Phillips Ambilight, this JavaScript plugin creates light effects around any HTML5 video that correspond to the video content, resulting in a more immersive experience.

##How to use

First off all, you need to create a container that will contain the video and the canvas in which we will draw our annimation. This container must be in *relative* or *absolute* position. Defining his background to black produce a cleaner effect.

Then, you just have to init avp_core providing the video's Id and the recently created container's Id.

    var avp_core = new avp_core("html5video", "avpContainer");
    avp_core.Start();
	
The AVP effect will now fill your container.
