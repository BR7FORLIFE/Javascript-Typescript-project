const $main = document.querySelector("main");
const $dropZone = document.getElementById("drop-zone");
const $overlay = document.getElementById("drag-overlay");
const $template = document.querySelector("template");

["dragover", "drop"].forEach((eventname) => {
    $dropZone.addEventListener(eventname, (e) => e.preventDefault());
});

//estilos ux para que el usaurio sepa que esta haciendo drag an drop xd
$dropZone.addEventListener("dragover", () => $overlay.classList.add("visible"));

$dropZone.addEventListener("dragleave", () =>
    $overlay.classList.remove("visible"),
);

$dropZone.addEventListener("mouseleave", () =>
    $overlay.classList.remove("visible"),
);

//inicializamos las variables, nivel singleton
let audioContext: AudioContext;
let audioBuffer: AudioBuffer;
let source: AudioBufferSourceNode;
let gainNode: GainNode;

$dropZone.addEventListener("drop", async (e) => {
    const filesArray = e.dataTransfer.files;

    if (filesArray.length > 0) {
        const file = filesArray[0].name.endsWith(".mp3") ? filesArray[0] : null;

        if (!file) {
            alert("intente subir un archivo valido!");
            return;
        }

        //limpiamos el main
        $main.innerHTML = "";

        //renderizamos el template para que haga parte del arbol de nodos de javascript
        $main.appendChild($template.content.cloneNode(true));

        //creamos un buffer para el stream de bytes de la cancion
        const buffer = await file.arrayBuffer();

        renderRack(buffer);
    }

    console.log(filesArray);
});

async function renderRack(buffer: ArrayBuffer) {
    //preparamos el audio para transformar
    await prepareAudio(buffer);

    const $rackSection = document.getElementById("rack");
    const $racksControlArray = $rackSection.querySelectorAll(".rack-control");

    const inputsRackValue = {};

    $racksControlArray.forEach(($controlRack) => {
        const $title = $controlRack.querySelector("span").textContent;
        const $input = $controlRack.querySelector("input");

        $input.addEventListener("input", async (e) => {
            const target = e.target as HTMLInputElement;
            inputsRackValue[$title] = target.value;

            if ($title === "Playback Rate") {
                source.playbackRate.setTargetAtTime(
                    parseFloat(target.value),
                    audioContext.currentTime,
                    0.01,
                );
            } else if ($title === "Volume") {
                gainNode.gain.setTargetAtTime(
                    parseFloat(target.value),
                    audioContext.currentTime,
                    0.01,
                );
            }
        });
    });

    initAudioTransformation(inputsRackValue);
}

async function prepareAudio(buffer: ArrayBuffer) {
    //sino tenemos contexto inizializamos uno nuevo
    if (!audioBuffer) audioContext = new AudioContext();

    //state SourceNode

    //como es pesado el calculo debemos mandar el metodo a las microtask
    //transformamos de un array en crudo de bit en el canal del buffer a PEM buffer
    audioBuffer = await audioContext.decodeAudioData(buffer);

    //creamos un pipeline de transformaciones
    gainNode = audioContext.createGain();
    //conectamos al destino en este caso a la salida de audio
    gainNode.connect(audioContext.destination);
}

async function initAudioTransformation(config) {
    //sino tenemos buffer no hacemos nd
    if (!audioBuffer) return;

    //si existe un source anterior detenemos para recrear uno nuevo
    if (source) source.stop();
    /**
     * 3 pasos de la AUDIO WEB API
     *
     * 1. SourceNode
     * 2. GainNode
     * 3. Destination
     */

    //creamos el source (tocadiscos)
    source = audioContext.createBufferSource();

    //en el source asignamos el AudioBuffer en este caso que recuperamos anteriormente
    source.buffer = audioBuffer;

    //stage GainNode
    source.playbackRate.value = parseFloat(config["playback rate"] || 1);
    gainNode.gain.value = parseFloat(config["Volume"] || 0.5);

    //stage destination
    source.loop = true;
    source.connect(gainNode);

    //empezamos a escuchar
    source.start(0);
}
