var turnInfo_span = document.querySelector('.turn-info span');
turnInfo_span.innerHTML = 'O';
var turnCounter = 1;

var boxes = document.getElementsByClassName('box');


for(let i = 0; i < boxes.length; i++){
    boxes[i].setAttribute('onclick', 'userClick(this)');
};


function userClick(element){
    element.setAttribute('onclick', '');
    // debugger;

    element.classList.add('box-done');
    element.classList.add('done');
    // element.classList.remove('box');

    element.innerHTML = turnInfo_span.innerHTML;
    var abc = checkWin();
    if(abc){
        turnInfo_span.innerHTML = changeTurn();
    }
}


function checkWin(){
    let winnerConfirm = 1;
    let winCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    winCombinations.forEach((element) => {
        let val0 = boxes[element[0]].innerHTML;
        let val1 = boxes[element[1]].innerHTML;
        let val2 = boxes[element[2]].innerHTML;
        if(val0 === val1 && val2 === val1 && val0 !== ''){
            console.log(`${turnInfo_span.innerHTML} wins`);
            for(let i = 0; i < 3 ;i++){
                boxes[element[i]].style.background = 'greenyellow';
                boxes[element[i]].style.transition = 'all 0.5s';
                winnerConfirm = 0;
            }
            setTimeout(() => {
                document.querySelector('.victory-text').style.transform = 'scale(1)';
            }, 1000);
            setTimeout(() => {
                window.alert(`${changeTurn()} wins the game.`);
                location.reload();
            }, 1500);
            console.log(`val0 = ${val0}`);
            console.log(`val1 = ${val1}`);
            console.log(`val2 = ${val2}`);

        }
    });
    return winnerConfirm;
}

function changeTurn(){
    turnCounter++;
    if(turnCounter > 9){
        setTimeout(() => {
            window.alert(`Game draw.`);
            location.reload();
        }, 2000);
    }
    return turnInfo_span.innerHTML == 'O' ? 'X' : 'O';
}