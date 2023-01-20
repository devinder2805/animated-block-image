
frontFace = document.getElementsByClassName("front");


let count = 0;

let yOffset = 0;
for (let i = 0; i < 5; i++) {
    let xOffset = 0;
    for (let j = 0; j < 5; j++) {
        frontFace[count].style.backgroundPosition = "" + xOffset + "px" + " " + yOffset + "px";

        xOffset -= 100;
        count++;
    }
    yOffset -= 100;
}
console.log(count)