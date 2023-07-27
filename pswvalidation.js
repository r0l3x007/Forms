
let pass = document.getElementById(`password`);
let confirmPsw =  document.getElementById(`passwordConfirm`);
let pswMsg =  document.getElementById(`pswUnder`);


function validatepsw(){

    if(pass.value.length > 0 && pass.value.length < 8){
        pass.style.border = `1px solid rgb(255, 0, 0)`;
        confirmPsw.style.border = `1px solid rgb(255, 0, 0)`
        pswMsg.textContent = `* Password is too short.`
        pswMsg.style.color = `rgb(255, 0, 0)`;
    } else if(confirmPsw.value == `` || pass.value == ``){
        confirmPsw.style.border = ``;
        pass.style.border = ``;
        pswMsg.textContent = ``;
    }else if(pass.value != confirmPsw.value && (pass.value != 0 || confirmPsw.value != ``)){
        confirmPsw.style.border = `1px solid rgb(255, 0, 0)`;
        pswMsg.textContent = `* Passwords do not match.`
        pswMsg.style.color = `rgb(255, 0, 0)`;
    } else if (pass.value === confirmPsw.value){
        confirmPsw.style.border = `1px solid rgb(7, 219, 78)`;
        pass.style.border = `1px solid rgb(7, 219, 78)`;
        pswMsg.textContent = `* Passwords match`;
        pswMsg.style.color = `rgb(7, 219, 78)`;
    } 
}


confirmPsw.addEventListener(`input`, validatepsw);
pass.addEventListener(`input`, validatepsw);

