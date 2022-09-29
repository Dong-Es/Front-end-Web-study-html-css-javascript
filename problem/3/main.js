let username = prompt("당신의 이름을 입력하시오 : ")
let userHeight = prompt("당신의 키를 입력하시오 : ")
let userWeight = prompt("당신의 몸무게를 입력하시오 : ")

const normal_w = (userHeight-100)*0.9;

const over_w = normal_w+5;
const low_w = normal_w-5;

document.write("이름 : " ,username ,"<br> 당신의 키 : ", userHeight,"<br> 당신의 몸무게 :", userWeight,"<br> 펑균 몸무게는 :", normal_w," 입니다 <br>");

if(over_w<userWeight){
    document.write("비만 입니다.");
}else if(low_w>userWeight){
    document.write("저제충입니다.");
}else{
    document.write("평균입니다.")
}
