let poem = document.querySelector("#poem")
let words = poem.querySelectorAll("span")
let wind = new Audio("https://cdn.glitch.global/402ce5d1-f5ed-4319-9bbd-cad152f099ea/381853__sqeeeek__wind-gust-short-sqeeeek.wav?v=1665106493456")

shuffleWords()
let wait = 10000
setInterval(shuffleWords, wait)

function shuffleWords() {
  wind.play()
  setTimeout(() => {
    let margin = 100
    let shuffle = Array.from(words).slice().sort((a, b) => Math.random() > 0.5)
    shuffle.forEach((word, i) => {
      // word.style.left = `${margin + (i * ((window.innerWidth - margin * 2) / shuffle.length))}px`
      word.style.left = `${margin + Math.random() * (window.innerWidth - margin * 2)}px`
      word.style.top = `${margin + Math.random() * (window.innerHeight - margin * 2)}px`
    })
  }, 800)
}