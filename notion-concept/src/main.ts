import { renderDom } from "@/logic/Schedule";

function main() {
    const dayOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    renderDom(dayOfWeek);
}
main();
