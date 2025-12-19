let buttonBox =document.querySelector('#box')
let titleBox = document.querySelector('h2')
let buttons = document.querySelectorAll('.btn')
let backspaceBtn = document.querySelector('.X')
let buttonValue
console.log(buttonBox)
buttons.forEach(function(btn){
    btn.addEventListener('click',function(event){
        event.preventDefault()
        buttonValue = event.target.dataset.id
        titleBox.innerHTML = titleBox.innerHTML + buttonValue
    })
})

backspaceBtn.addEventListener('click',function(){
    titleBox.innerHTML = titleBox.innerHTML.slice(0,-1)
})

let mainWidth = buttonBox.style.width
console.log(mainWidth)
