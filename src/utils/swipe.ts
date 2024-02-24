export function Swipe(PageURL: string) {
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
    const distanceX = Math.abs(endX - startX);
    const distanceY = Math.abs(endY - startY);
    if (distanceX > distanceY && distanceX > minimumDistance) {
      console.log("左右スワイプ");
      window.location.replace(PageURL);
    }
  });
}
