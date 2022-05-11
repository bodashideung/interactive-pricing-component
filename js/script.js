const d = document,
      views = d.querySelector('.pageviews'),
      price = d.querySelector('.price'),
      slider = d.querySelector('.slider'),
      toggleBtn = d.querySelector('.toggle'),
      toggleSwitch = d.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('change-bg')
    toggleSwitch.classList.toggle('toggle-on')
})

function pageViews(value){
    const totalPrice = (value*4)/10;
    views.textContent = `${(value*5)/2}k pageviews`
    price.textContent = `$${totalPrice}`
} 

slider.addEventListener('input', () => {
    pageViews(slider.value)
})

