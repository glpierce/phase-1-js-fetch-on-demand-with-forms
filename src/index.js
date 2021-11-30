const init = () => {
  const inputForm = document.querySelector(`form`)
  inputForm.addEventListener(`submit`, event => {
      event.preventDefault()
      const input = event.target.children[1].value
      fetch(`http://localhost:3000/movies/${input}`)
      .then(resp => resp.json())
      .then(resp => updateDOM(resp))
  })
}

function updateDOM(resp) {
    const title = document.querySelector(`#movieDetails h4`)
    const summary = document.querySelector(`#movieDetails p`)
    title.textContent = resp.title
    summary.textContent = resp.summary
}

document.addEventListener('DOMContentLoaded', init);