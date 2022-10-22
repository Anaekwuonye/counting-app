let displayNum = document.getElementById('displayN')
let countEl = document.getElementById('count-El')
let resetbtn = document.getElementById('reset-btn')


let count = 0


function countBtn(){
    count +=1
    displayNum.textContent = count
    
}

function addBtn(){
    countEl.textContent += count + " "
    
    displayNum.textContent = 0
    count = 0

}

