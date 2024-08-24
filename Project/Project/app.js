const refresh=document.getElementById("refresh")
const input=document.getElementById("input-user")
refresh.addEventListener('click',()=>{
    input.value="";
})




const output=document.getElementById("output-user")
const fontSize=document.getElementById("size")
fontSize.addEventListener("change",()=>{
    input.style.fontSize = fontSize.value;
    output.style.fontSize = fontSize.value;
})