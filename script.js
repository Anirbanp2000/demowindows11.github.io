taskbar=document.getElementsByClassName("taskbar")[0]
startmenu=document.getElementsByClassName("startmenu")[0]

taskbar.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "60px"){
        startmenu.style.bottom ="-500px"
    }
    else{
        startmenu.style.bottom = "60px"
    }
})