let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");
modeBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
// document.querySelector("body").style.backgroundColor="black";
body.classList.add("dark");
body.classList.remove("light");
}
        else{
            currMode="light";
            // document.querySelector("body").style.backgroundColor="white";
            body.classList.add("light");
            body.classList.remove("dark");
        }
    console.log(currMode);
})
     
let user = document.querySelector("user");
user.addEventListener("hover",()=>{
    
})