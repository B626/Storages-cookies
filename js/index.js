const localBtn = document.querySelector('.button__local-storage')
const sessionBtn = document.querySelector('.button__session-storage')
const clearBtn = document.querySelector('.button__clear-storages')

console.log(localStorage.amountOfClicks)
console.log(sessionStorage.amountOfClicks)

localBtn.innerHTML = `Кнопку було натиснуто: ${localStorage.amountOfClicks ? localStorage.getItem('amountOfClicks') : 0} разів`
sessionBtn.innerHTML = `Кнопку було натиснуто: ${sessionStorage.amountOfClicks ? sessionStorage.getItem('amountOfClicks') : 0} разів`

function localStorageManager() {
   if (localStorage.amountOfClicks) {
      let amountOfClicks = localStorage.getItem('amountOfClicks')
      let newAmountOfClicks = +amountOfClicks + 1
      localStorage.setItem('amountOfClicks', newAmountOfClicks)
      localBtn.innerHTML = `Кнопку було натиснуто: ${newAmountOfClicks} разів`
   } else {
      localStorage.setItem('amountOfClicks', 1)
      localBtn.innerHTML = `Кнопку було натиснуто: 1 разів`
   }
}

function sessionStorageManager() {
   if (sessionStorage.amountOfClicks) {
      let amountOfClicks = sessionStorage.getItem('amountOfClicks')
      let newAmountOfClicks = +amountOfClicks + 1
      sessionStorage.setItem('amountOfClicks', newAmountOfClicks)
      sessionBtn.innerHTML = `Кнопку було натиснуто: ${newAmountOfClicks} разів`
   } else {
      sessionStorage.setItem('amountOfClicks', 1)
      sessionBtn.innerHTML = `Кнопку було натиснуто: 1 разів`
   }
}

function clearStorages() {
   localStorage.clear()
   sessionStorage.clear()
   localBtn.innerHTML = `Кнопку було натиснуто: 0 разів`
   sessionBtn.innerHTML = `Кнопку було натиснуто: 0 разів`
}

localBtn.addEventListener('click', localStorageManager)

sessionBtn.addEventListener('click', sessionStorageManager)

clearBtn.addEventListener('click', clearStorages)