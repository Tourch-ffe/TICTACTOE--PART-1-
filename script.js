let btns = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset-btn");
let winningpattren = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let trunO = true;
let count = 0;

let btnO = document.querySelector(".btnO");
let btnX = document.querySelector(".btnX");
let draw = document.querySelector(".btndraw");

let winX = 0;
let winO = 0;
let Draw = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (trunO == true) {
      btn.innerHTML = "O";
      trunO = false;
    } else {
      btn.innerHTML = "X";
      trunO = true;
    }
    btn.disabled = true;
    count++;
    let winner = checkwin();
    if (count == 9 && !winner) {
      Draw++;
      draw.innerHTML = Draw;
      setTimeout(enablebtns, 1000);
    }
  });
});

let checkwin = () => {
  for (pattern of winningpattren) {
    let pos1 = btns[pattern[0]].innerHTML;
    let pos2 = btns[pattern[1]].innerHTML;
    let pos3 = btns[pattern[2]].innerHTML;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        disabltbtns();
        setTimeout(enablebtns, 1000);
        if (pos1 == "O") {
          winO++;
          btnO.innerHTML = winO;
        } else {
          winX++;
          btnX.innerHTML = winX;
        }
      }
    }
  }
};
reset.addEventListener("click", () => {
  resetfunc();
});

let enablebtns = () => {
  btns.forEach((btn) => {
    btn.disabled = false;
    btn.innerHTML = "";
    count = 0;
    trunO = true;
  });
};
let disabltbtns = () => {
  btns.forEach((btn) => {
    btn.disabled = true;
    count = 0;
  });
};

let resetfunc = () => {
  enablebtns();
  winX = 0;
  winO = 0;
  Draw = 0;
  btnX.innerHTML = winX;
  btnO.innerHTML = winO;
  draw.innerHTML = Draw;
};
