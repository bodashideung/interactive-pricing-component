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


function showValue(value){
    
    if(value === '0'){
        views.textContent = `0 pageviews`
        price.textContent = `$0`
    }
    if(value === '20'){
        views.textContent = `10k pageviews`
        price.textContent = `$8`
    }
    if(value === '40'){
        views.textContent = `50k pageviews`
        price.textContent = `$12`
    }
    if(value === '60'){
        views.textContent = `100k pageviews`
        price.textContent = `$16`
    }
    if(value === '80'){
        views.textContent = `500k pageviews`
        price.textContent = `$24`
    }
    if(value === '100'){
        views.textContent = `1m pageviews`
        price.textContent = `$36`
    }
}

slider.addEventListener('input', () => {
    showValue(slider.value)
})

