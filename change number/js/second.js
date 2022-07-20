function changebtn(){
    let x =document.getElementById("input1").value;
    let y =document.getElementById("input2").value;
    let z =document.getElementById("input3").value;
    
    var box;

    box=z;
    z=y;
    y=x;
    x=box;

    document.getElementById("inputnumer").value =x+y+z;

    document.getElementById("result1").value =x;
    document.getElementById("result2").value =y;
    document.getElementById("result3").value =z;
}