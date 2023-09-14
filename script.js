'use strict';
 //thông báo khi 
console.log(document.querySelector('.message').textContent);
//tại hàm again
//tạo số random
let random_number = 0;
let score = 20;
function again(){
    //score
    score = 20;
    document.getElementById('score').innerHTML = score;
    var min = 0;
    var max = 20;
    random_number = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(random_number);
}
//tại hàm check
function check(){
    var input_number = document.getElementById('input_number').value;
    input_number = input_number*1;
    let message = '';
    if (input_number < random_number) {
        message = 'too low';
        //console.log('too low');
        //trừ score
        score = score - 1;
    }
    else if (input_number > random_number) {
        message = ' too high ';
        //console.log('too high');
        score = score - 1;
    } else { 
        //đổi màu bg
        document.getElementsByTagName('body')[0].setAttribute("style","background-color: #60b347")
        let highscore = 0;
        message = 'correct number';
        //console.log('correct number');
        //đúng thì đổi giá trị mới không thì thôi
        let hstemp = 0;
        if (score > hstemp){
            hstemp = score;
            highscore = hstemp;
        } else
        {
            highscore = hstemp;
        }

        document.getElementById('highscore').innerHTML = highscore;
    }
    document.getElementById('message').innerHTML = message;
    document.getElementById('score').innerHTML = score;
}







