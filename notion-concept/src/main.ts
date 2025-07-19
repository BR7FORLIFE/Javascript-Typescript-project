//recuperamos elementos del DOM
const insertContentDiv = document.getElementById("insertContent");
const template = document.querySelector<HTMLTemplateElement>("#week-template");
const copyTemplate = template?.content.cloneNode(true) as DocumentFragment;

//botones para hacer el slider del calendario
const buttonBefore = document.getElementById("before");
const buttonAfter = document.getElementById("after");

//elementos de la tabla
const thead = copyTemplate?.querySelector("thead");
const colGroup = copyTemplate.querySelector("colgroup");

//esta funcion permitira hacer un slider del calendario para los dias de la semana
// y dias del mes
let start = 0;
const VISIBLE = 6;

function renderOffset(array: string[]): void {
    thead!.innerHTML = "";
    colGroup!.innerHTML = "";

    const visible = array.slice(start, start + VISIBLE);

    visible.forEach((month) => {
        const th = document.createElement("th");
        const col = document.createElement("col");

        th.textContent = month;
        th.setAttribute("class", "border-r-2 border-black/40");
        thead?.appendChild(th);

        col.setAttribute("class", "w-40");
        colGroup?.appendChild(col);
    });

    buttonBefore?.addEventListener("click", () => {
        if (start > 0) {
            start--;
            renderOffset(array);
        }
        console.log("button before");
    });

    buttonAfter?.addEventListener("click", () => {
        if (start + VISIBLE < array.length) {
            start++;
            renderOffset(array);
        }
    });
}

function main() {
    const dayOfWeek = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];

    renderOffset(dayOfWeek);

    insertContentDiv?.appendChild(copyTemplate);
}
main();
