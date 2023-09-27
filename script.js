// GRID 

function createColumn(col) {
    const newCol = document.createElement("div")
    newCol.classList.add('grid', 'column')
    newCol.setAttribute('id', `column-${col}`)
    container.appendChild(newCol)
}

function createCell(col, row) {
    const column = document.getElementById(`column-${col}`)
    const newCell = document.createElement("div")
    newCell.classList.add('grid', 'cell')
    newCell.setAttribute('id', `cell-${col}x${row}`)
    //newCell.textContent = `cell ${row}`
    column.appendChild(newCell)
}

function createGrid(col, row) {
    for (i = 1; i <= col; i++) {
        createColumn(i)
        for (j = 1; j <= row; j++) {
            createCell(i, j)
        }
    }
}

const container = document.querySelector('.grid-container')

function buttonPress(){
    const x = prompt("How many columns do you want?",10)
    const y = prompt("How many rows do you want?",10)
    createGrid(25,25)
}

function changeBackground(e){
    e.target.classList.toggle('background')
}

// UI

const cells = Array.from(document.querySelectorAll('.cell'))
cells.forEach(key => key.addEventListener("mouseover",changeBackground))

const resetButton = document.getElementById('reset-button')
resetButton.addEventListener("click", buttonPress)