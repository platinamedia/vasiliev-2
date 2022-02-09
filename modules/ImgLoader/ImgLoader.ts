const ImgLoader = ({ src, width, quality }) => {
  return `${process.env.IMG_URL}/${src}?w=${width}&q=${quality || 75}`;
};

export default ImgLoader;
