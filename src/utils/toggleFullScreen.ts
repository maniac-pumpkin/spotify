const toggleFullScreen = () => {
  if (document.fullscreenElement) {
    if (document.exitFullscreen) document.exitFullscreen();
  } else {
    if (document.documentElement.requestFullscreen)
      document.documentElement.requestFullscreen();
  }
};

export default toggleFullScreen;
