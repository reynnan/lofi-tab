import { LOFI_GIFS } from "../constants";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomBackground = () => {
  const length = LOFI_GIFS.length;
  return LOFI_GIFS[getRandomInt(0, length - 1)];
};

export { getRandomBackground };
