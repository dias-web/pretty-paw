export const videoBackgroundInit = () => {
  const videoBGElems = document.querySelectorAll(".video-bg");

  const videoSourses = `
  <source src="video/video.webm" type="video/webm">
  <source src="video/video.mp4" type="video/mp4">
  `;

  for (const videoElem of videoBGElems) {
    videoElem.innerHTML = videoSourses;
  }
};
