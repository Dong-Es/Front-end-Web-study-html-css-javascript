function result(){
    let Weight = document.getElementById('userWeight').value;
    let Height = document.getElementById('userHeight').value;
    let Name = document.getElementById('userName').value;

    const normal_W = (Height-100)*0.9;
    const over_W = normal_W+5;
    const low_W = normal_W-5;


    alert(
     "이름 : " + Name+
     "\n 몸무게 : " +Weight+
     "\n 키 : "+Height + 
     "\n 종합한 결과 :" + normal_W+
     "\n 정상체중은 : " + low_W +"~" + over_W
    )
}
