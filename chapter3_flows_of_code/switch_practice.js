// 조건이 만족하는 케이스가 아니면 건너뛴 다음 
// 만족하는 케이스부터 주어진 명령을 수행
// break 만나면 switch문 종료

var coursename = 'A' ;

switch (coursename) {
    case 'C' : 
        console.log('게살수프,칠리새우')
    case 'B' : 
        console.log('유산슬')
    case 'A' : 
        console.log('짜장면,탕수육,짬뽕,양장피,팔보채')
        break
    default : 
        console.log('주문이 잘못되었습니다.')
        break
    }       