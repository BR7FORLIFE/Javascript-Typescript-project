const inputWeigth = document.getElementById("inputWeight") as HTMLInputElement;
const inputHeight = document.getElementById("inputHeight") as HTMLInputElement;
const button = document.getElementById("button") as HTMLButtonElement;
const template = document.getElementById("template") as HTMLTemplateElement;

const faces = {
    badFace: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Face-bad.svg/768px-Face-bad.svg.png", "imagen de un cara triste"],
    mediumFace: ["https://www.clker.com/cliparts/u/O/o/a/8/z/smiley-face-md.png", "imagen de una cara seria"],
    happyFace: ["https://static.vecteezy.com/system/resources/previews/022/917/027/non_2x/yellow-happy-smile-face-emoticon-png.png", "imagen de una cara feliz"]
}

button.addEventListener("click",e => {
    e.preventDefault();
    let weightValue = parseFloat(inputWeigth.value);
    let heightValue = parseFloat(inputHeight.value);

    if(isNaN(weightValue) || isNaN(heightValue)) {return}

    let result = calculeImc(weightValue, heightValue);
    generateInfo(result);
})

function calculeImc(weight: number , height: number): number {
    return weight / height ** 2;
}

function generateInfo(result: number): void {
    const infoContainer  = document.querySelector("#information") as HTMLDivElement
    infoContainer.innerHTML = ""

    const cloneTemplate = template.content.cloneNode(true) as DocumentFragment
    let img = cloneTemplate.querySelector("img")!
    let p = cloneTemplate.querySelector("p")!

    if(result >= 18.5 && result <= 24.9){
        img.src = faces.happyFace[0];
        img.alt = faces.happyFace[1];
        p.innerText = "Your IMC is correct :D"
    }else if(result < 18.5){
        img.src = faces.badFace[0]
        img.alt = faces.badFace[1]
        p.innerText = "Your IMC is bad :("
    }else{
        img.src = faces.mediumFace[0]
        img.alt = faces.mediumFace[1]
        p.innerText = "Your IMC is Bad :("
    }
    infoContainer.appendChild(cloneTemplate);
}