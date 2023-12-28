 let cara = 0;
 let coroa = 0;
 let moeda = document.querySelector("#container-moedas");
 let btnSorteio = document.querySelector("#sorteio");
 let btnLimpar = document.querySelector("#limpar");

 btnSorteio.addEventListener("click", ()=>{
    let i = Math.floor(Math.random() * 2);
    moeda.style.animation = 'none';
    if(i){
        setTimeout(function(){
            moeda.style.animation = 'spin-heads 3s forwards'
        },100);
        cara++;
    }else{
        setTimeout(function(){
            moeda.style.animation = 'spin-tails 3s forwards'
        },100);
        coroa++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
 });

 function updateStats(){
    document.querySelector("#contador-cara").textContent = `Cara: ${cara}`;
    document.querySelector("#contador-coroa").textContent = `Coroa: ${coroa}`;
 }

 function disableButton(){
    btnSorteio.disabled = true;
    setTimeout(function(){
        btnSorteio.disabled = false;
    }, 3000);
 }

btnLimpar.addEventListener('click', () => {
    moeda.style.animation = 'none';
    updateStats();
    cara = 0;
    coroa = 0;
})
