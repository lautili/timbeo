let fondos = 10000;
let fon=document.querySelector('.Fondos');
let num=document.querySelector('.num');
let i=0;
let max;
let n;
let apu;
let intervalos;
let form=document.querySelector('form');
function handleSubmit(e){
    e.preventDefault();
    if(i==0||i>=15){
        i=0;
        num.style.color='black';
        n = +form.num.value;
        apu = +form.apu.value;
        max = +form.max.value;
        if((fondos-apu>=0)){
            fondos-=apu;
            intervalos=setInterval(tick, 50);   
        }
    }
}
function tick(){
    fon.textContent='Fondos: '+fondos+'$';
    let numero=Math.floor(Math.random()*max);
        num.textContent=numero;
        console.log(numero);
        i++;
    if(i>=15){
        if(numero==n){
            apu=apu*max;
            fondos+=apu;
            num.style.color='green';
        }else{
            num.style.color='red';
        }
        clearInterval(intervalos);
        console.log("Paró el intervalo");
        fon.textContent='Fondos: '+fondos+'$';
    }
}