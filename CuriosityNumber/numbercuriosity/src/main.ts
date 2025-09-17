import { getAllRandomCuriosity, type ResponseApi } from './Api';

async function main(){
    const  response: ResponseApi | undefined = await getAllRandomCuriosity()
    if(response) showResponse(response)
}

function showResponse(data: ResponseApi): void {
    const $div = document.getElementById("app")
    const $span = $div?.querySelector("span")
    const $p = $div?.querySelector("p")

    if($span) $span.textContent = data.number
    if($p) $p.textContent = `Curiosity: ${data.text}`
}

main()
