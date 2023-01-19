// PASSWORD FEATURES
const pswrd_el = document.querySelector('#pswrd');
const length_el = document.querySelector("#length");
const uppercase_el = document.querySelector("#uppercase");
const lowercase_el = document.querySelector("#lowercase");
const number_el = document.querySelector("#number");
const symbol_el = document.querySelector("#symbol");

// BUTTONS
// generate button
const generate_btn = document.querySelector("#genertr");
generate_btn.addEventListener("click",generatePassword);
// copy button
const copy_btn = document.querySelector("#copy");
copy_btn.addEventListener("click",copyPassword);

// CHARACTERS
const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
const number_chars = "0123456789";
const symbol_chars = "!@#$%^&*()";

// PASSWORD GENERATING FUNCTION
function generatePassword(){
    let password = "";
    let length = length_el.value;
    let chars = "";

    chars += uppercase_el.checked ? uppercase_chars : "";
    chars += lowercase_el.checked ? lowercase_chars : "";
    chars += number_el.checked ? number_chars : "";
    chars += symbol_el.checked ? symbol_chars : "";

    for (let i = 0; i <= length; i++) {
        let rand = Math.floor(Math.random() * chars.length);
        password += chars.substring(rand, rand+1);
    }
    pswrd_el.value = password;
}


// PASSWORD COPY FUNCTION
async function copyPassword(){
    if(navigator.clipboard){
        await navigator.clipboard.writeText(pswrd_el.value);
    }
    alert("Password Copied!");   
}