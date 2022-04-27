let videoSource = new Array();
videoSource[0] = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
videoSource[1] = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4';
let i = 0; // global
const videoCount = videoSource.length;
const element = document.getElementById("videoPlayer");

function videoPlay(videoNum) {
    element.setAttribute("src", videoSource[videoNum]);
    element.autoplay = true;
    element.load();
}
document.getElementById('videoPlayer').addEventListener('ended', myHandler, false);

videoPlay(0); // load the first video
ensureVideoPlays();	// play the video automatically

function myHandler() {
    i++;
    if (i == videoCount) {
        i = 0;
        videoPlay(i);
    } else {
        videoPlay(i);
    }
}

function ensureVideoPlays() {
    const video = document.getElementById('videoPlayer');

    if(!video) return;
    
    const promise = video.play();
    if(promise !== undefined){
        promise.then(() => {
            // Autoplay started
        }).catch(error => {
            // Autoplay was prevented.
            video.muted = true;
            video.play();
        });
    }
}
