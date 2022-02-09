const ApiImgLoader = ({ src, width, quality }) => {
  return `${process.env.API_URL}${src}?w=${width}&q=${quality || 75}`;
};

export default ApiImgLoader;
