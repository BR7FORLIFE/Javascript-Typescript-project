import './style.css'

function createInterface(): HTMLElement {
  const $container = document.createElement('section') as HTMLElement
  const $div = document.createElement('div') as HTMLDivElement
  const $h1 = document.createElement('h1') as HTMLHeadingElement
  const $input = document.createElement('input') as HTMLInputElement
  const $button = document.createElement('button') as HTMLButtonElement
  const $taskList = document.createElement('ul') as HTMLUListElement

  $h1.innerText = "To - Do App"
  $button.innerText = "Guardar Tarea"

  $container.classList.add('container')
  $div.classList.add('layout')
  $h1.classList.add('title')
  $input.classList.add('input')
  $button.classList.add('button')
  $taskList.classList.add('task')

  $input.placeholder = "Ingrese su tarea..."

  $button.addEventListener("click", () => {
    const text = $input.value.trim()

    if (text !== "") {
      const $task = aggTask(text)
      $taskList.appendChild($task)
      $input.value = ""
    }
  })

  $div.appendChild($h1)
  $div.appendChild($input)
  $div.appendChild($button)

  $container.appendChild($div)
  $container.appendChild($taskList)

  return $container
}

function aggTask(text: string): HTMLLIElement {
  const $li = document.createElement('li') as HTMLLIElement
  const $p = document.createElement('p') as HTMLParagraphElement
  const $editButton = document.createElement('button') as HTMLButtonElement
  const $deleteButton = document.createElement('button') as HTMLButtonElement

  $p.innerText = text
  $editButton.innerText = "Editar"
  $deleteButton.innerText = "Borrar"

  $editButton.addEventListener("click", () => {
    const newText = prompt("Editar tarea:", $p.innerText)
    if (newText !== null && newText.trim() !== "") {
      $p.innerText = newText.trim()
    }
  })

  $deleteButton.addEventListener("click", () => {
    $li.remove()
  })

  $li.appendChild($p)
  $li.appendChild($editButton)
  $li.appendChild($deleteButton)

  return $li
}

document.body.appendChild(createInterface())
