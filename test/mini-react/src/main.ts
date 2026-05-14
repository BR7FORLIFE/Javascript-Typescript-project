import "./style.css";
import parser from "@babel/parser";
import type { Vnode, jsxType } from "./Vnode/vNode";

const app = async () =>
    await fetch("./App.jsx")
        .then(async (res) => {
            const data = await res.text();

            return parser.parse(data, {
                sourceType: "module",
                plugins: ["jsx"],
            });
        })
        .catch((err) => console.log(err));

const AST = await app();

console.log(AST);

function createCore(ast) {
    const body = ast.program.body;

    console.log(body);
}

createCore(AST);

function createRoot(element: HTMLElement) {}

const $app = document.getElementById("app");
createRoot($app);
