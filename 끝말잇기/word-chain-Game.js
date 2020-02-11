let body = document.body;
let 단어 = document.createElement('div');
단어.textContent = '김민우';
document.body.append(단어);

let form = document.createElement('form');
document.body.append(form);

let input = document.createElement('input');
form.append(input);

let button = document.createElement('button');
button.textContent = '입력!';
form.append(button);

let result = document.createElement('div');
document.body.append(result);

form.addEventListener('submit', (e) => { // 콜백함수
    e.preventDefault(); //preventDefault() 기본동작 취소
    if(단어.textContent[단어.textContent.length - 1] === input.value[0]){
        result.textContent = '딩동댕'
        단어.textContent = input.value;
        input.focus();
        input.value = '';
    }else {
        result.textContent = '땡'
        input.focus();
    }

});

// 자바스크립트를 이용하여 html태그 만들기


/* let start = '김민우'

while(true){
    let answer = prompt(start)
    if(start[start.length-1] === answer[0]){
        alert('딩동댕')
        start = answer
    }else {
        alert('땡')
    }
} */

/* for(let start='김민우'; true; ) {
    let answer = prompt(start)
    if(start[start.length-1] === answer[0]){
        alert('딩동댕')
        start = answer
    }else {
        alert('땡')
    }
} */