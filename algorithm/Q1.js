// <문제>
// 알파벳 대문자와 숫자(0 ~ 9)로만 구성된 문자열이 입력으로 주어집니다. 
// 이때 모든 알파벳을 오름차순으로 정렬하여 이어서 출련한 뒤에, 그 뒤에 모든 숫자를 더한 값을 이어서 출력합니다. 예를 들어 K1KA5CB7이라는 값이 들어오면 ABCKK13을 출력합니다.

// <입력>
// 첫째 줄에 하나의 문자열 S가 주어집니다. (1 <= S의 길이 <= 10,000)

// <출력>
// 첫째 줄에 문제에서 요구하는 정답을 출력합니다.

const inputString = prompt("문자열을 입력해주세요.");

const stringArray = [];
let numberSum=0;

for(let element of inputString){
  if(isNaN(element)){
    stringArray.push(element);
  }else{
    numberSum += Number(element);
  }
}

let result = stringArray.sort(); // 문자부터 우선 정렬

if(numberSum != 0){ // 숫자들의 합이 0이 아니라면 배열에 가장 뒤에 삽입
  result.push(numberSum);
}
 
result = result.join(""); //배열을 문자열로 바꾸기

console.log(result);
