//document.getElementById("count").innerText = 5
//var welcome = document.getElementById("welcome")
//var name = "Mr. Omkar"
//var greetings = "Hey , Welcome "
//welcome.textContent = greetings + name
//welcome.textContent += "😊😶‍🌫️😶‍🌫️"
var Incremntlcount = 0
var saveel = document.getElementById("save-el")
var savebtn = document.getElementById("save-btn")
var tcounts = document.getElementById("tcount")
var count = document.getElementById("count")

function increment() {
    Incremntlcount += 1
    count.textContent = Incremntlcount 
    savebtn.disabled = false;
}
function savecount()
{
    saveel.textContent += " "+ Incremntlcount + " - "
    Incremntlcount = 0
    count.textContent = Incremntlcount
    savebtn.disabled = true;
}
