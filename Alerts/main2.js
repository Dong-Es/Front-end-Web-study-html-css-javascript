function alertbox(btn){
    document.getElementById('alertopen').style.display=btn;
}
alertbox('block')
alertbox('none')
function changetext(){
    document.getElementById('alertopen').innerHTML='보물은 이미 가져갔다.';
    
}