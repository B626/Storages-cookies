const ageText = document.querySelector('.age')

if (document.cookie) {
   ageCalculator()
} else if (!document.cookie) {
   let dateOfBirth = prompt('Введіть вашу дату народження. Приклад: May 22 2007 17:30:00')
   document.cookie = `dateOfBirth=${dateOfBirth}`
   ageCalculator()
}


function ageCalculator() {
   let dateOfBirthPure = document.cookie.split('=').pop()
   let dateOfBirthConverted = new Date(dateOfBirthPure)
   let now = new Date()
   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
   let dateOfBirthConvertedNow = new Date(today.getFullYear(), dateOfBirthConverted.getMonth(), dateOfBirthConverted.getDate())
   let age = today.getFullYear() - dateOfBirthConverted.getFullYear()
   if (today < dateOfBirthConvertedNow) {
      age = age-1
   }
   console.log(age)
   ageText.style.fontSize = '30px'
   ageText.innerHTML = `Ваш вік: ${age}`
}