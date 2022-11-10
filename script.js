
document.querySelector('.x').classList.add('active');
let boxes = document.getElementsByClassName('box');
var count = 0;
for (let one of boxes) {
    one.addEventListener('click', function () {
        if (count % 2 == 0) {
            let parent = document.getElementById(one.id);
            if (!parent.firstChild) {
                parent.setAttribute('data-value', 1);
                let ele = document.createElement('h1');
                ele.classList.add('cross');
                ele.innerHTML = '+';
                parent.appendChild(ele);
                count++;
                document.querySelector('.o').classList.add('active');
                document.querySelector('.x').classList.remove('active');
            }
        }
        else {
            let parent = document.getElementById(one.id);
            if (!parent.firstChild) {
                parent.setAttribute('data-value', 2);
                let ele = document.createElement('h1');
                ele.classList.add('circle');
                ele.innerText = 'o';
                parent.appendChild(ele);
                count++;
                document.querySelector('.o').classList.remove('active');
                document.querySelector('.x').classList.add('active');
            }
        }
        if (count > 8) {
            Draw();
            return;
        }
        verify();
    });
}

function reset() {
    let boxes = document.getElementsByClassName('box');
    for (let one of boxes) {
        one.setAttribute('data-value', 0);
        one.classList = 'box';
        one.parentElement.classList = 'game-area';
        let element = document.getElementById(one.id);
        if (element.firstChild)
            element.removeChild(element.firstChild);
    }
    document.querySelector('.x').classList = 'x active';
    document.querySelector('.o').classList = 'o';
    document.querySelector('.dialog').classList = 'dialog';
    document.querySelector('.game-area').classList = 'game-area';
    document.querySelector('.details').classList = 'details';
    document.querySelector('.blackscreen').classList = 'blackscreen';
    count = 0;
}


function verify() {
    var b1 = document.getElementById('box-1').getAttribute('data-value');
    var b2 = document.getElementById('box-2').getAttribute('data-value');
    var b3 = document.getElementById('box-3').getAttribute('data-value');
    var b4 = document.getElementById('box-4').getAttribute('data-value');
    var b5 = document.getElementById('box-5').getAttribute('data-value');
    var b6 = document.getElementById('box-6').getAttribute('data-value');
    var b7 = document.getElementById('box-7').getAttribute('data-value');
    var b8 = document.getElementById('box-8').getAttribute('data-value');
    var b9 = document.getElementById('box-9').getAttribute('data-value');
    if (b1 != 0) {
        if (b1 == 1 && b2 == 1 && b3 == 1) {
            document.getElementById('box-1').classList.add('row');
            document.getElementById('box-2').classList.add('row');
            document.getElementById('box-3').classList.add('row');
            document.querySelector('.game-area').classList.add('disabled');
            cross();
        }
        else if (b1 == 2 && b2 == 2 && b3 == 2) {
            document.getElementById('box-1').classList.add('row');
            document.getElementById('box-2').classList.add('row');
            document.getElementById('box-3').classList.add('row');
            document.querySelector('.game-area').classList.add('disabled');
            circle();
        }
        else if (b1 == 1 && b4 == 1 && b7 == 1) {
            document.getElementById('box-1').classList.add('column');
            document.getElementById('box-4').classList.add('column');
            document.getElementById('box-7').classList.add('column');
            document.querySelector('.game-area').classList.add('disabled');
            cross();
        }
        else if (b1 == 2 && b4 == 2 && b7 == 2) {
            document.getElementById('box-1').classList.add('column');
            document.getElementById('box-4').classList.add('column');
            document.getElementById('box-7').classList.add('column');
            document.querySelector('.game-area').classList.add('disabled');
            circle();
        }
        else if (b1 == 1 && b5 == 1 && b9 == 1) {
            document.getElementById('box-1').classList.add('dia');
            document.getElementById('box-5').classList.add('dia');
            document.getElementById('box-9').classList.add('dia');
            document.querySelector('.game-area').classList.add('disabled');
            cross();
        }
        else if (b1 == 2 && b5 == 2 && b9 == 2) {
            document.getElementById('box-1').classList.add('dia');
            document.getElementById('box-5').classList.add('dia');
            document.getElementById('box-9').classList.add('dia');
            document.querySelector('.game-area').classList.add('disabled');
            circle();
        }
    }
    if (b2 != 0) {
        if (b2 == 1 && b5 == 1 && b8 == 1) {
            document.getElementById('box-2').classList.add('column');
            document.getElementById('box-5').classList.add('column');
            document.getElementById('box-8').classList.add('column');
            document.querySelector('.game-area').classList.add('disabled');
            cross();
        }
        else if (b2 == 2 && b5 == 2 && b8 == 2) {
            document.getElementById('box-2').classList.add('column');
            document.getElementById('box-5').classList.add('column');
            document.getElementById('box-8').classList.add('column');
            document.querySelector('.game-area').classList.add('disabled');
            circle();
        }
    }
    if (b3 != 0) {
        if (b3 == 1 && b6 == 1 && b9 == 1) {
            document.getElementById('box-3').classList.add('column');
            document.getElementById('box-6').classList.add('column');
            document.getElementById('box-9').classList.add('column');
            document.querySelector('.game-area').classList.add('disabled');
            cross();
        }
        else if (b3 == 2 && b6 == 2 && b9 == 2) {
            document.getElementById('box-3').classList.add('column');
            document.getElementById('box-6').classList.add('column');
            document.getElementById('box-9').classList.add('column');
            document.querySelector('.game-area').classList.add('disabled');
            circle();
        }
        else if (b3 == 1 && b5 == 1 && b7 == 1) {
            document.getElementById('box-3').classList.add('diaopp');
            document.getElementById('box-5').classList.add('diaopp');
            document.getElementById('box-7').classList.add('diaopp');
            document.querySelector('.game-area').classList.add('disabled');
            cross();
        }
        else if (b3 == 2 && b5 == 2 && b7 == 2) {
            document.getElementById('box-3').classList.add('diaopp');
            document.getElementById('box-5').classList.add('diaopp');
            document.getElementById('box-7').classList.add('diaopp');
            document.querySelector('.game-area').classList.add('disabled');
            circle();
        }
    }
    if (b4 != 0) {
        if (b4 == 1 && b5 == 1 && b6 == 1) {
            document.getElementById('box-4').classList.add('row');
            document.getElementById('box-5').classList.add('row');
            document.getElementById('box-6').classList.add('row');
            document.querySelector('.game-area').classList.add('disabled');
            cross();
        }
        else if (b4 == 2 && b5 == 2 && b6 == 2) {
            document.getElementById('box-4').classList.add('row');
            document.getElementById('box-5').classList.add('row');
            document.getElementById('box-6').classList.add('row');
            document.querySelector('.game-area').classList.add('disabled');
            circle();
        }
    }
    if (b7 != 0) {
        if (b7 == 1 && b8 == 1 && b9 == 1) {
            document.getElementById('box-7').classList.add('row');
            document.getElementById('box-8').classList.add('row');
            document.getElementById('box-9').classList.add('row');
            document.querySelector('.game-area').classList.add('disabled');
            cross();
        }
        else if (b7 == 2 && b8 == 2 && b9 == 2) {
            document.getElementById('box-7').classList.add('row');
            document.getElementById('box-8').classList.add('row');
            document.getElementById('box-9').classList.add('row');
            document.querySelector('.game-area').classList.add('disabled');
            circle();
        }
    }
}


function Draw(){
    document.getElementById('msg').innerHTML = ' Game Draw !!! ';
    document.querySelector('.dialog').classList.add('appear');
    document.querySelector('.details').classList.add('disappear');
    document.querySelector('.game-area').classList.add('disabled');
    document.querySelector('.blackscreen').classList.add('on');
}

var player_1 = 0;
function cross(){
    document.getElementById('msg').innerHTML = "<span>Player 1</span> has won the Game 🎉";
    document.querySelector('.dialog').classList.add('appear');
    document.querySelector('.details').classList.add('disappear');
    document.querySelector('.game-area').classList.add('disabled');
    document.querySelector('.blackscreen').classList.add('on');
    document.getElementById('Score_1').innerHTML = `Player 1 : <span>${++player_1}</span>`;
}

var player_2 = 0;
function circle(){
    document.getElementById('msg').innerHTML = "<span>Player 2</span> has won the Game 🎉";
    document.querySelector('.dialog').classList.add('appear');
    document.querySelector('.details').classList.add('disappear');
    document.querySelector('.game-area').classList.add('disabled');
    document.querySelector('.blackscreen').classList.add('on');
    document.getElementById('Score_2').innerHTML = `Player 2 : <span>${++player_2}</span>`;
}