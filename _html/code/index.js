var audio = document.getElementById("不眠之夜");
var img = document.getElementById("yyan");
function toggleAudio() {
    if (audio.paused) {
      audio.play();
      img.src = "../_html/resource/99.png"
      document.getElementById("不眠之夜").innerHTML = "暂停";
    } else {
      audio.pause();
      img.src = "../_html/resource/666.png"
      document.getElementById("不眠之夜").innerHTML = "播放";
    }
  }
