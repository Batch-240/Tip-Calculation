input = document.querySelector('input')
button = document.querySelector('button')
output = document.querySelector('.message')

// this is event listener
button.addEventListener("click", () =>{
    tip = input.value*10/100
    output.innerText = `Yoour Tip is ${tip}`
})
