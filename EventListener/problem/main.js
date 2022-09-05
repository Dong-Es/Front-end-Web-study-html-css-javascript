function openclosebtn(){
    document.getElementById('alert').style.display='block';
    document.getElementById('title').innerHTML='안녕';
}
function openclosebtn2(){
    document.getElementById('alert').style.display='block';
    document.getElementById('title').innerHTML='반가워';
}

var closetext = document.getElementById("close");	
closetext.addEventListener('click', close);
function close() {
    document.getElementById('alert').style.display='none';
}
