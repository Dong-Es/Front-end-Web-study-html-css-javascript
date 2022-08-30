function openclosebtn(){
    document.getElementById('alert').style.display='block';
    document.getElementById('text').innerHTML='안녕';
}
function openclosebtn2(){
    document.getElementById('alert').style.display='block';
    document.getElementById('text').innerHTML='반가워';
}

document.getElementById('close').addEventListener('click',function(){
    document.getElementById('alert').style.display = 'none';
});