
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  const newJokeLi = document.createElement('li')
  const username = document.getElementById('name-input').value
  let joke;


  function fetchJoke(name){
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(jokeData => {
      return [name, jokeData.joke]
    })
    .then(printJokes)
 
  }

  function formEvent() {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      const u_name = event.target.u_name.value
      if(u_name === "") return
      else {
        fetchJoke(u_name)
      }
    })
  }

  const printJokes = (joke) => {
    name = joke[0]
    newJokeLi.innerHTML = `
        <span class="username">${name} says:</span> ${joke[1]}
        `
        jokeList.appendChild(newJokeLi)
  }

  document.addEventListener('DOMContentLoaded', () => {
    formEvent()
  })