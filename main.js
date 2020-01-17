document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')

  getQuote(body)
  getDogPic(body)
})

function getDogPic(body){
  const img = document.createElement('img')
  body.append(img)

  fetch('https://dog.ceo/api/breeds/image/random')
  .then(res => res.json())
  .then(doggo => {
    img.src = doggo.message
  })
}

function getQuote(body){
  const p = document.querySelector('#quote')
  fetch('https://quotes.rest/qod')
  .then(res => res.json())
  .then(res => {
    p.innerText = res.contents.quotes[0].quote
  })
}