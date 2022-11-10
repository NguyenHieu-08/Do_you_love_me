function yes(){
    alert('I love you <3');
}

function no() {
    let btnNo = document.getElementById('btnno');
    
    btnNo.style.top = Math.random() * window.innerHeight + 'px' ;
    btnNo.style.left = Math.random() * window.innerWidth + 'px';
}