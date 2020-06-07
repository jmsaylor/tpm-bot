const fetch = require("node-fetch");

const colorInfoLink = async (hex) => {
  let result = await fetch(`http://thecolorapi.com/id?hex=${hex}`);
  console.log("result is! ", result);
  result = await result.json();
  const pic = result.image.name;
  console.log(pic);
  return pic;
};

colorInfoLink("ff0037");

module.exports = colorInfoLink;
