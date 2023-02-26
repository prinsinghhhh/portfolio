let a = document.getElementById("h1")
let btn = document.getElementById("btn1")
let body = document.body
let text2 = document.getElementById("h2")
function darkMode(){
        body.style.background = "black";
        a.style.color = "white";
        text2.style.color = "white"
        btn.style.background = "white";
        btn.style.color = "black";
        btn.innerHTML = "Dbl click for Light Mode"
        btn.style.width = "100px"
        btn.style.fontSize = "12px"

    }
function lightMode(){
    body.style.background = "white";
    a.style.color = "black";
    btn.style.background = "black";
    btn.style.color = "white";
    btn.innerHTML = "Dark Mode"
    
    
}