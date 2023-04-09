const inputHeight = document.querySelector('#height')
const inputWeight = document.querySelector('#weight')
const calcBtn = document.querySelector('#calc')
const resetBtn = document.querySelector('#reset')

calcBtn.addEventListener('click', () => {
    let score = Number(inputWeight.value / ((inputHeight.value/100) * 2))
    let health = ''

    if(score < 18.5){
        health = 'Under Weight 😒'
    }else if(score >= 18.5 && score <= 24.9){
        health = 'Normal Weight 😍'
    }else if(score >= 25 && score <= 29.9){
        health = 'Overweight 😮'
    }else{
        health = 'Obese 😱'
    }

    document.querySelector('.result-screen').style.display = 'flex'
    document.querySelector('#score').textContent = score.toFixed(2)
    document.querySelector('#health').textContent = health
    resetBtn.style.display = 'block'
})

resetBtn.addEventListener('click', () => {
    inputHeight.value = ''
    inputWeight.value = ''
    document.querySelector('.result-screen').style.display = 'none'
    document.querySelector('#reset').style.display = 'none'
})