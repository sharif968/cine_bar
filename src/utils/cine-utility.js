function getImgUrl(name) {
  return new URL(`../assets/movie/${name}`, import.meta.url).href;
}
export { getImgUrl };
