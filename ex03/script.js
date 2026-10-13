let count = 0;
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let reset = document.getElementById("reset");

plus.addEventListener("click", counterPlus);
minus.addEventListener("click", counterMinus);
reset.addEventListener("click", reseting)

function counterPlus() {
    count += 1;
    colorChange();
}

function counterMinus() {
    count -= 1;
    colorChange();
}

function reseting() {
    count = 0;
    colorChange();
}


function colorChange ()
{
    document.getElementById("change").textContent = count;

    if (count > 0) {
        document.getElementById("change").style.color = "green";
    }
    else if (count < 0) {
        document.getElementById("change").style.color = "red";
    }
    else
        document.getElementById("change").style.color = "black";
}