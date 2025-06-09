let fondos = 10000;
let fon=document.querySelector('.Fondos');
let num=document.querySelector('.num');
function handleSubmit(e){
    e.preventDefault();
    let form = e.target;
    let n = form.num.value;
    let apu = form.apu.value;
    let max = +form.max.value;
    for(let i=0;i<10;i++){
        setInterval(1000);
        let numero=Math.floor(Math.random()*max);
        num.value=numero;
    }
}