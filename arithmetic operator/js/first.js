function resultbtn(){
    let x1 = document.getElementById("input1").value;
    let y2 = document.getElementById("input2").value;

    document.getElementById("result1").value = parseInt(x1)+parseInt(y2);
    document.getElementById("result2").value = parseInt(x1)-parseInt(y2);
    document.getElementById("result3").value = parseInt(x1)*parseInt(y2);
    document.getElementById("result4").value = parseInt(x1)/parseInt(y2);
    document.getElementById("result5").value = parseInt(x1)%parseInt(y2);
}