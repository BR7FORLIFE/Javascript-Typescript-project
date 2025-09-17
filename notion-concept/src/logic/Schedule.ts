//esta funcion permitira hacer un slider del calendario para los dias de la semana
// y dias del mes
let start = 0;
const VISIBLE = 6;

function dayOfMonth() {
    const $tbody = document.querySelector("tbody");

    $tbody!.innerHTML = ""

    const days = Array.from({ length: 30 }, (_, i) => i + 1);

    let offsetDay = Array.from({ length: VISIBLE}, (_, i) => {
        return days[(start + i) % days.length];
    });

    offsetDay.forEach((days) => {
        const $th = document.createElement("th");
        $th.innerText = days.toString();
        $tbody?.appendChild($th);
    });
}

function renderOffset(array: string[]): void {
    //elementos de la tabla
    const $thead = document?.querySelector("thead");
    const $colGroup = document.querySelector("colgroup");

    if (!$thead || !$colGroup) return;

    $thead!.innerHTML = "";
    $colGroup!.innerHTML = "";

    const visible = Array.from({length: VISIBLE}, (_, i) => {
        return array[(start + i) % array.length]
    });

    visible.forEach((month) => {
        const $th = document.createElement("th");
        const $col = document.createElement("col");

        $th.textContent = month;
        $th.setAttribute("class", "border-r-2 border-black/40");
        $thead?.appendChild($th);

        $col.setAttribute("class", "w-40");
        $colGroup?.appendChild($col);
    });
}

export function renderDom(array: string[]) {
    //recuperamos elementos del DOM
    const $insertContentDiv = document.getElementById("insertContent");
    const $template =
        document.querySelector<HTMLTemplateElement>("#week-template");
    const copyTemplate = $template?.content.cloneNode(true) as DocumentFragment;

    //botones para hacer el slider del calendario
    const $buttonBefore = document.getElementById("before");
    const $buttonAfter = document.getElementById("after");

    //addeventlistener
    $buttonBefore?.addEventListener("click", () => {
        if (start > 0) {
            start--;
            renderOffset(array);
            dayOfMonth();
        }
    });

    $buttonAfter?.addEventListener("click", () => {
        if (start + VISIBLE) {
            start++;
            renderOffset(array);
            dayOfMonth();
        }
    });
    $insertContentDiv?.appendChild(copyTemplate);
    renderOffset(array);
    dayOfMonth();
}
