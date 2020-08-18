/*let num = document.getElementById('output');
let numbtn = document.getElementById('btn');
let out = document.getElementById('num');
numbtn.addEventListener('click',()=>{
    var number = Number(num.value);
    var result = '';
    if(number===0){
        out.innerHTML = "ไม่มีผลลัพท์นี้";
        return;
    }
    for(var i = 1;i<=12;i++){
        
        result += '<p>'
        result += number+'x'+i+'='+(number*i); 
        result += '</p>'
    }
    out.innerHTML = result;
});*/
let num = document.getElementById('P_num');
let user = document.getElementById('P_user');
let numbtn = document.getElementById('btn');
let money = document.getElementById('money');
let pop = document.getElementById('pop');
numbtn.addEventListener('click',()=>{
    
    var number = Number(num.value);
    var numberUser = Number(user.value);
    out = money.innerHTML = numberUser - number;
    money.style.transition =".5s";
    pop.style.transform ="scale(1)";
    if (out === 0) {
        money.innerHTML = "ไม่มีเงินทอน";
        money.style.fontSize ="2rem";
        money.style.transition =".5s";
    }
    if (numberUser < number) {
        money.innerHTML = "จำนวนเงินไม่พอ";
    }
});

