export const fillFunction = (corruption, investment) => {
  return {
    G: 255 - 255 * Number(corruption),
    B: 255 - (155 * (Number(corruption) + Number(investment))) / 2,
    R: 255 - 255 * Number(investment)
  };
};

export const colorScale2D = (corruption, investment) => {
  const color = fillFunction(corruption, investment);

  // const hex = rgbHex(color["R"], color["G"], color["B"]);

  return `rgb(${color["R"]}, ${color["G"]} , ${color["B"]})`;
};
