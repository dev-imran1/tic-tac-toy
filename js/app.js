let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");


let turn0 = true;

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((item)=>{
    item.addEventListener("click", ()=>{
        if (turn0) {
            item.innerHTML = "0";
            turn0 = false
        }else{
            item.innerHTML = "X";
            turn0 = true
        }
        item.disabled = true
    })
})