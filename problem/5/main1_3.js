function result(){
    let traffic_money =parseFloat(document.getElementById('traffic').value);
    let food_money = parseFloat(document.getElementById('food').value);
    let drink_money = parseFloat(document.getElementById('drink').value);

    const total = traffic_money + food_money + drink_money;

    if(total > 10000){
        alert(Math.abs(total-10000)+" 초과")
    }else{
        alert("돈 관리를 참 잘했어요.")
    }
}
