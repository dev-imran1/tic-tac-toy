let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let newgame = document.querySelector("#new_game");
let win = document.querySelector(".win");
let msgContainer = document.querySelector(".win_msg");


let turn0 = true;

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((item) => {
    item.addEventListener("click", () => {
        if (turn0) {
            item.innerHTML = "0";
            turn0 = false
        } else {
            item.innerHTML = "X";
            turn0 = true
        }
        item.disabled = true;
        checkWinner();
    })
})

const disabledBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enabledBox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showWinner = (winner) => {
    win.innerHTML = `Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disabledBox()
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1)
            }
        }
    }
}

const resetGame = () => {
    turn0 = true;
    enabledBox();
}

resetBtn.addEventListener("click", resetGame)
newgame.addEventListener("click", resetGame)