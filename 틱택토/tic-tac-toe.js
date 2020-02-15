let table = document.createElement('table');
document.body.append(table);
let 줄들 = [];
let 칸들 = [];
let trun = 'X';

let callback = (e) => {
    /* console.log(e.target);  
    console.log(e.target.parentNode); 
    console.log(e.target.parentNode.parentNode);  */

    let 몇줄 = 줄들.indexOf(e.target.parentNode);
    console.log('몇줄',몇줄);
    let 몇칸 = 칸들[몇줄].indexOf(e.target);
    console.log('몇칸',몇칸);

    if(칸들[몇줄][몇칸].textContent !== '') { // 칸이 이미 채워져 있는지 확인
        console.log('빈칸이 아닙니다');
    } else {
        console.log('빈칸입니다');
        칸들[몇줄][몇칸].textContent = trun;
        //세칸 채워졌는지 확인
        let 다참 = false;
        if(칸들[몇줄][0].textContent === trun && 칸들[몇줄][1].textContent === trun && 칸들[몇줄][2].textContent === trun) {
            다참 = true;
        }
        //세로줄 검사
        if(칸들[0][몇칸].textContent === trun && 칸들[1][몇칸].textContent === trun && 칸들[2][몇칸].textContent === trun ) {
            다참 = true;
        }
        //대각선 검사
        if(몇줄 - 몇칸 === 0 ) { // 대각선 검사가 필요한 경우 줄이랑 칸이 같은 경우 나온다.
            if(칸들[0][0].textContent === trun && 칸들[1][1].textContent === trun && 칸들[2][2].textContent === trun) {
                다참 = true;
            }
        }
        if(Math.abs(몇줄 - 몇칸) === 2) { // 대각선 검사가 필요한 경우 줄이랑 칸이 같은 경우 나온다.
            if(칸들[0][2].textContent === trun && 칸들[1][1].textContent === trun && 칸들[2][0].textContent === trun) {
                다참 = true;
            }
        }
        //대각선 검사
        if(다참 === true) {
           alert(trun + '님 승리!');
           //초기화
           턴 = 'X';
           칸들.forEach( (줄) => {
               줄.forEach( (칸)=> {
                 칸.textContent = '';
               });
           });
        }else { //다 안찼으면
            if(trun === 'X') {
                trun = 'O';
            }else{
                trun = 'X';
            }
            
        }
    }
};

for (let i = 0; i < 3; i++) {
    var row = document.createElement('tr');
    줄들.push(row);
    칸들.push([]);
    for(let j = 0; j < 3; j++) {
        var column = document.createElement('td');
        column.addEventListener('click', callback);
        칸들[i].push(column);
        row.appendChild(column);
    }
    table.appendChild(row)
}
console.log('줄들',줄들,'칸들',칸들)

//중첩 반복문을 최소화 하는 실력을 갖추자!