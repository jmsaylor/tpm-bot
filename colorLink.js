const fetch = require("node-fetch");

const colorInfoLink = async (hex) => {
  let result = await fetch(`http://thecolorapi.com/id?hex=${hex}`);
  result = await result.json();
  const pic = result.image.named;
  return pic;
};

module.exports = colorInfoLink;
