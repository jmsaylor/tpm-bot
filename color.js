const fetch = require("node-fetch");

function getHex(hex) {
  fetch(`http://thecolorapi.com/id?hex=${hex}`)
    .then((res) => res.json())
    .then((res) => console.log(res));
}

// function getHex(hex) {
//   fetch(`http://reddit.com`)
//     .then((res) => res.text())
//     .then((res) => console.log("workeddddd?"));
// }

getHex(443356);
