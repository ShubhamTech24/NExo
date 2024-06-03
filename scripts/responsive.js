function setFontSize() {
// 14px for all devices below vmin 400. Then, increases gradually, proportionally to vmax. Is equal to 16px for devices with vmax 1920.
  const minViewportDimension = Math.min(window.innerWidth, window.innerHeight);
  const minFontSize = 14;
  const adaptativeFontSize = minFontSize + Math.round((minViewportDimension - 400) * (4 / (1920 - 400)));
  const fontSize = Math.max(minFontSize, adaptativeFontSize);
  document.documentElement.style.fontSize = fontSize + 'px';
}

window.addEventListener('resize', setFontSize);
setFontSize();
