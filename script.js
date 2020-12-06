// Inputs
const treatInput= document.getElementById('treat_price')
const frequencyInput = document.getElementById
('weekly_frequency')
const yearsInput = document.getElementById('years_saved')

// Outputs
const displayPrice = document.getElementById("display_price")
const weeklyDisplay = document.getElementById("weekly_display")
const yearsDisplay = document.getElementById('display_years')
// display price
treatInput.addEventListener('input', e => {
  displayPrice.innerHTML = treatInput.value
})
// display weeks
frequencyInput.addEventListener('input', e => {
  weeklyDisplay.innerHTML = frequencyInput.value
})

// display years
yearsInput.addEventListener('input', e => {
  const weekly_cost = treatInput.value * frequencyInput.value
  const yearly_cost = weekly_cost * 52
  const amount_saved = yearly_cost *  yearsInput.value
  console.log(amount_saved)

  yearsDisplay.innerHTML = amount_saved
})