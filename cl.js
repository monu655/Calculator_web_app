const answer = document.querySelector(".answer");

const buttons = document.querySelectorAll(".input");
const op = ["+","-","*","/"];

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;

    if (val === "AC") {
      answer.innerText = "";
    } 
    else if (val === "DEL") {
      answer.innerText = answer.innerText.slice(0, -1);
    } 
    else if (val === "=") {
      if (answer.innerText !== "") {
        let res = String(eval(answer.innerText));
        if (res.length < 13) answer.innerText = res;
      }
    } 
    else {
      if (answer.innerText.length < 13) {
        let last = answer.innerText.slice(-1);
        if (op.includes(last) && op.includes(val)) {
          answer.innerText = answer.innerText.slice(0, -1) + val;
        } else {
          answer.innerText += val;
        }
      }
    }
  });
});
