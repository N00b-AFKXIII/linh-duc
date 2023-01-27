---
---
var player;

//This function creates an <iframe> (and YouTube player)
function onYouTubeIframeAPIReady() {

    player = new YT.Player('musicPlayer', {
        height: '500',
        width: '500',
        videoId: '{{site.music}}',
        playerVars: {
            autoplay: 0,
            controls: 0,
            showinfo: 0,
            mute: 0,
            loop: 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

//The API will call this function when the video player is ready.
function onPlayerReady(event) {

    if (event.data != YT.PlayerState.PLAYING) {
        console.log("Music ready to play!");
    }
}

// The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        console.log("Music is playing!");
    }
}

function stopVideo() {
    player.stopVideo();
}

function switchVideo(secondVideoId) {
    player.stopVideo();
    player.loadVideoById(secondVideoId);
    player.playVideo();
    player.unMute();
}

function handleMusicButton(newVideoId) {

    if(!player){
        console.log("Player" + player);
        player = onYouTubeIframeAPIReady();
    }
    
    var videoData = player.getVideoData();
    var currentVideoId = videoData['video_id'];

    if (newVideoId && newVideoId !== currentVideoId){
        switchVideo(newVideoId);
    }
    else if (player.getPlayerState() !== YT.PlayerState.PLAYING) {
        player.playVideo();
    }
    else if (player.isMuted) {
        player.unMute();
    }
}
