let body = document.body;


let number1 = Math.ceil(Math.random() * 9)
let number2 = Math.ceil(Math.random() * 9)                                                                      

let word = document.createElement('div');
word.textContent = number1 + '곱하기' + number2+'는?';
document.body.append(word);

let answer = number1 * number2

let form = document.createElement('form');
document.body.append(form);

let input = document.createElement('input');
form.append(input);

let button = document.createElement('button');
button.textContent = '확인!'
form.append(button);

let result = document.createElement('div');
document.body.append(result);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(input.value === answer) {
        result.textContent = '딩동댕'
    } else {
        result.textContent = '땡'
    }
});

/* while(true){
    let 숫자1 = Math.ceil(Math.random() * 9) + 1
    let 숫자2 = Math.ceil(Math.random() * 9) + 1
    let 조건 = true
    while(조건) {
    let answer = 숫자1 * 숫자2
    let input = Number(prompt(숫자1 +"*"+ 숫자2+'는?'))
    if(answer === input) {
        alert("정답")
        조건 = false;
    }else{
        alert("땡")
    }
}
} */