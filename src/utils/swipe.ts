export function Swipe(prevURL: string, nextURL: string) {
  const minimumDistance = 200;
  let startX = 0;
  let startY = 0;
  let endX = 0;
  let endY = 0;
  window.addEventListener("touchstart", (e) => {
    startX = e.touches[0].pageX;
    startY = e.touches[0].pageY;
  });
  window.addEventListener("touchmove", (e) => {
    endX = e.changedTouches[0].pageX;
    endY = e.changedTouches[0].pageY;
  });
  window.addEventListener("touchend", () => {
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    if (
      distanceX > distanceY &&
      distanceX > minimumDistance &&
      prevURL != null
    ) {
      console.log("右スワイプ");
      window.location.replace(prevURL);
    }
    if (
      distanceX < distanceY &&
      distanceX < minimumDistance * -1 &&
      nextURL != null
    ) {
      console.log("左スワイプ");
      window.location.replace(nextURL);
    }
  });
}
