// GRID 

function createColumn(col) {
    const newCol = document.createElement("div")
    newCol.classList.add('grid', 'column')
    newCol.setAttribute('id', `column-${col}`)
    gridContainer.appendChild(newCol)
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

const gridContainer = document.querySelector('.grid-container')
createGrid(16, 16)

// UI

function changeBackground(e) {
    e.target.classList.toggle('background')
}

function removeGrid() {
    const toRemove = Array.from(gridContainer.getElementsByClassName("column"))
    toRemove.forEach(key => key.remove())
}

function checkInput(input) {
    if (input > 100) {
        alert(`${input} is larger than 100`)
        return true
    } else if (input < 0) {
        alert(`${input} is negative`)
        return true
    } else if (isNaN(input)) {
        alert(`${input} is not a number`)
        return true
    } else {
        return false
    }
}

function buttonPress() {
    removeGrid()
    let x = prompt("How many columns do you want? (Max 100)", 10)
    while (checkInput(x)) {
        x = prompt("How many columns do you want? (Max 100)", 10)
        checkInput(x)
    }
    const y = prompt("How many rows do you want? (Max 100)", 10)
    while (checkInput(y)) {
        y = prompt("How many columns do you want? (Max 100)", 10)
        checkInput(y)
    }
    createGrid(x, y)
    const cells = Array.from(document.querySelectorAll('.cell'))
    cells.forEach(key => key.addEventListener("mouseover", changeBackground))
}

const cells = Array.from(document.querySelectorAll('.cell'))
cells.forEach(key => key.addEventListener("mouseover", changeBackground))

//const resetButton = document.getElementById('reset-button')
//resetButton.addEventListener("click", buttonPress)