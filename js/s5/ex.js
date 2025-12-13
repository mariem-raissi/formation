let div=document.getElementById("div1");
let input=document.getElementById("text");   

  input.addEventListener("keypress",function(e){
    
    if(e.key=="m"){div.style.backgroundColor="gray"}
})
