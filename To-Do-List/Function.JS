function Add(){
    let input = document.getElementById("Input");
    let container = document.getElementById("hey");

    let value = input.value;

let p = document.createElement("p");
p.textContent = value;
container.appendChild(p);
}