let dice = document.querySelector('.image')
let diceImg = document.querySelector('.dice')
let id = document.querySelector('.number')
let quote = document.querySelector('.advice')

function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
    .then((raw) => raw.json())
    .then((data)=>{
       let advice = data.slip.advice
       let adviceId = data.slip.id

      id.textContent = adviceId
      quote.textContent =`"${advice}"`

      console.log(data);
    })
}

window.onload = () =>{
    getAdvice()
}

dice.addEventListener('click', (e)=>{
    diceImg.classList.add('rotate')

    setTimeout(() => {
        diceImg.classList.remove('rotate')
    }, 1000);
    getAdvice()
})

