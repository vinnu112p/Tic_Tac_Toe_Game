let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let show = document.querySelector(".winner p")

//gsap 
var anim = gsap.timeline();

anim.from("h1",{
    opacity:0,
    y: -20,
    duration:0.8,
    
})
anim.from(".box",{
    opacity:0,
    y: -20,
    duration:0.5,
    delay:0.2,
    stagger:0.15
})
anim.from(".btn",{
    opacity:0,
    y: 20,
    duration:0.5
    
    
})

let turn0 = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    
]

boxes.forEach(function(box){
    box.addEventListener("click", function(){
        show.style.visibility = "hidden";  // this is to remove prevoius winning outcome
        if(turn0){
            box.style.color = "#725AC1";
            box.innerHTML = "X";
            turn0 = false;
        }else{
            box.style.color = "#5DA9E9";
            box.innerHTML = "O";
            turn0 = true;
        }
        box.disabled  = true;
        checkWinner();
    })
});

const checkWinner =() => {
    for(let patterns of winPatterns){
        
        let pos1 = boxes[patterns[0]].innerHTML;
        let pos2 = boxes[patterns[1]].innerHTML;
        let pos3 = boxes[patterns[2]].innerHTML;
        if(pos1!= "" && pos2!= "" && pos3!= ""){
            if(pos1 === pos2 && pos2 === pos3){
                
                showWinner(pos1);
                resetGame();

            }
        }
       
    }
};

resetGame = () =>{
    turn0 = true;
    boxes.forEach(function(box){
        box.innerHTML = "";
        box.disabled = false;
    });
};

resetbtn.addEventListener("click", function(){
    turn0 = true;
    boxes.forEach(function(box){
        box.innerHTML = "";
        box.disabled = false;
    });
});

showWinner = (pos) =>{
    if(pos == "X"){
        show.style.color = "#725AC1";
        show.innerHTML = `Winner is ${pos}`;
        show.style.visibility = "visible";
    }else{
        show.style.color = "#5DA9E9";
        show.innerHTML = `Winner is ${pos}`;
        show.style.visibility = "visible";

    }
}

