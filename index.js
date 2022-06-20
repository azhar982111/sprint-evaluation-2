// fill in javascript code here


document.querySelector("form").addEventListener("submit",collectdata)


function collectdata(){
    let tdodys = document.querySelector("tbody")
    let newtr = document.createElement("tr")

event.preventDefault()

let name = document.getElementById("name").value
let docID = document.getElementById("docID").value
let dept = document.getElementById("dept").value
let exp = document.getElementById("exp").value
let email = document.getElementById("email").value
let mbl = document.getElementById("mbl").value
let role;
if(exp > 5){
    role = "Senior"
}
else if(exp >=2 || exp <= 5){
    role = "Junior"
}
else if(exp >= 1){
    role = "Trainee"
}

let nameth = document.createElement("th")
nameth.textContent = name

let docIDth = document.createElement("th")
docIDth.textContent = docID

let deptth = document.createElement("th")
deptth.textContent = dept

let expth = document.createElement("th")
expth.textContent = exp

let emailth = document.createElement("th")
emailth.textContent = email

let mblth = document.createElement("th")
mblth.textContent = mbl

let roleth = document.createElement("th")
roleth.textContent = role

let deletebtn = document.createElement("th")
deletebtn.textContent = "DELETE"
deletebtn.style.backgroundColor = "red"

deletebtn.addEventListener("click",deleterow)

newtr.append(nameth,docID,deptth,expth,emailth,mblth,roleth,deletebtn)
tdodys.append(newtr)

console.log(name,docID,dept,exp,email,mbl)


function deleterow(){
    newtr.innerHTML = ""
}

}
