
let computer = '0';
let dictionary = {
    가위: '0',
    바위: '-160px',
    보: '-350px',
};

/* let dictionary2 = {
    '0': '가위',
    '-138px': '바위',
    '-282px': '보',
}; */

console.log(Object.entries(dictionary)); // 객체를 배열형태로 변경
컴퓨터선택 =(computer) => {
    return Object.entries(dictionary).find( (y) => { // find 반복문 true 나올시 return 
        console.log(y)
        return y[1] === computer;
    })[0];
}

let interval;
 intervalMethod=() => {
    interval = setInterval( () => {
    if( computer === dictionary.가위 ) {
        computer = dictionary.바위
    }else if( computer === dictionary.바위) {
        computer = dictionary.보
    }else {
        computer = dictionary.가위
    }
    document.querySelector('#computer').style.background =
    'url(가위바위보.png) ' + computer + ' 0';
    }, 100);
};
    intervalMethod();

    let 점수표 = {
        가위: 1,
        바위: 0,
        보: -1,
    };

    document.querySelectorAll('.btn').forEach( (btn) => {
        btn.addEventListener('click', () => {
            clearInterval(interval);
            setTimeout( () => {
                intervalMethod();
            },1000);

            let 나의선택 = btn.textContent
            console.log(나의선택, 컴퓨터선택(computer));
            let 나의점수 = 점수표[나의선택]; 
            let 컴퓨터점수 =  점수표[컴퓨터선택(computer)]
            let 점수차 = 나의점수 - 컴퓨터점수;
            if(점수차 === 0) {
                /* console.log('비겼습니다.') */
                alert('비겼습니다.')
            }else if([-1,2].includes(점수차)) {
                /* else if( 점수표[나의선택] - 점수표[컴퓨터선택(computer)] === -1 || 점수표[나의선택] - 점수표[컴퓨터선택(computer)] === 2 ) */
                /* console.log('이겼습니다') */
                alert('이겼습니다.')
            }else {
                /* console.log('졌습니다.') */
                alert('졌습니다.')
            };


            /* if( 나의선택 === '가위') {
                if(컴퓨터선택(computer) === '가위') {
                    console.log('비겼습니다!');
                }else if( 나의선택 === '바위') {
                    console.log('졌습니다ㅠ');
                }else {
                    console.log('이겼습니다!!');
                }
            }else if( 나의선택 === '바위') {
                if(컴퓨터선택(computer) === '가위') {
                    console.log('이겼습니다!!');
                }else if( 나의선택 === '바위') {
                    console.log('비겼습니다!');
                }else {
                    console.log('졌습니다ㅠ');
                }
            }else if( 나의선택 === '보') {
                if(컴퓨터선택(computer) === '가위') {
                    console.log('졌습니다ㅠ');
                }else if( 나의선택 === '바위') {
                    console.log('이겼습니다!!');
                }else {
                    console.log('비겼습니다!');
                }
            } */
        })
    } )


/*  if문이 너무 많아서
    가위바위보 규칙 찾아 보기.   
    
    가위 : 1. 바위: 0 보: -1
    나\컴퓨터     가위    바위    보
            가위  1 1     1 0    1 -1 
            바위  0 1     0 0    0 -1
            보   -1 1    -1 0   -1 -1 
            */ 