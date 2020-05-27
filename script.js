const input = document.querySelector(".textInput");
const btn = document.querySelector("button");
const output = document.querySelector("#output");
new ClipboardJS(".btn");

function upperLower() {
  const word = input.value;
  output.innerHTML = [...word]
    .map((v, i) => (i % 2 ? v.toUpperCase() : v.toLowerCase()))
    .join("");
}
