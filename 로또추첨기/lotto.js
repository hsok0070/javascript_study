/* let 후보군 = Array(45);
let fill = 후보군.fill();
 */

 /* fill.forEach( (요소,index)=> {
    fill[index] = index + 1;
}); */

/* let map = fill.map( (요소,index)=> {
    return index + 1;
}); */


let 후보군 = Array(45).fill().map( (요소,index) => {
    return index + 1;
});
console.log(후보군);

let 셔플 = [];

while(후보군.length > 0) { // 후보군 기준값이 번호를 뽑은 후에 변동 사항이 일어나기 떄문에 while문이 더 편해서 
    let 이동값 = 후보군.splice(Math.floor(Math.random() * 후보군.length),1)[0]; 
    // 실제로 완벽한 random숫자를 뽑기 위해서는 Math.random이 아닌 다른 랜덤 알고리즘 및 라이브러리등을 찾아서 해야 한다.
    셔플.push(이동값);
}
console.log(셔플);
let 보너스 = 셔플[셔플.length - 1];
let 당첨숫자들 = 셔플.splice(0,6);

console.log('당첨된숫자',당첨숫자들.sort((p,c) => { return p - c;}) ,'보너스번호',보너스);

let 결과창 = document.getElementById('결과창');

for (let i = 0; i < 당첨숫자들.length; i += 1) {
    setTimeout(() => {
        let ball = document.createElement('div');
        ball.style.display = 'inline-block'; // 자바스크립트로 css 조작하기
        ball.style.border = '1px solid black';
        ball.style.borderRadius = '10px';
        ball.style.width = '20px';
        ball.style.height = '20px';
        ball.style.textAlign = 'center';
        ball.style.marginRight = '10px';
        ball.style.fontSize = '15px';
        ball.textContent = 당첨숫자들[i];
        let 배경색;
        if(당첨숫자들[i] <= 10) {
            배경색 = 'red';
        }else if (당첨숫자들[i] <= 20) {
            배경색 = 'orange';
        }else if (당첨숫자들[i] <= 30 ) {
            배경색 = 'yellow';
        }else if (당첨숫자들[i] <= 40) {
            배경색 = 'blue';
        }else {
            배경색 = 'green';
        };
        ball.style.backgroundColor = 배경색;
        결과창.append(ball);
    }, 1000) // 밀리초
}
let 보너스칸 = document.getElementsByClassName('보너스')[0];
let 보너스공 = document.createElement('div');
보너스공.textContent = 보너스;
보너스칸.append(보너스공);

