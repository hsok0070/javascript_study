let word = document.createElement('div');
document.body.append(word);

let number = [1,2,3,4,5,6,7,8,9];
let randomNum = [];

for(let i = 0; i < 4; i++) {
    let drawing = number.splice(Math.floor(Math.random() * (number.length -1)) , 1)[0]; // splice는 배열을 반환 하기 때문에 [0]을 붙여줘야 0번째에 숫자 4자리가 들어 갈수 있다.
    randomNum.push(drawing);
}
console.log(randomNum);

let answer = document.createElement('h1')
document.body.append(answer);

let form = document.createElement('form');
document.body.append(form);

let input = document.createElement('input');
input.maxLength = 4;
form.append(input);

let button = document.createElement('button');
button.textContent = '확인!';
form.append(button);


form.addEventListener('submit', (e) => {
    e.preventDefault();
        if(Number(input.value) ===  Number(randomNum.join(''))) { // randomNum 배열을 문자열로 변환 후 비교
            console.log(input.value)
            console.log(randomNum)
            answer.textContent = '홈런'
            input.value = null
           
            number = [1,2,3,4,5,6,7,8,9];
            randomNum = [];

            for(let i = 0; i < 4; i++) {
                let drawing = number.splice(Math.floor(Math.random() * (number.length -1)) , 1)[0];
                randomNum.push(drawing);
            }
            console.log(randomNum)

        }else{
            let strike = 0
            let ball = 0
            for(let i = 0; i<input.value.length; i++){
                if(Number(input.value[i]) === Number(randomNum[i])) {
                    strike ++
                }else if(input.value.indexOf(randomNum[i]) > -1) {
                    ball ++
                }
            }
            answer.textContent = '스트라이크' + strike + '볼' + ball
        }
})
