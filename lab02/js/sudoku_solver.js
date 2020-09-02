/*
* Andy Le
* 000805099
* Implementation of sudoku board
* I, Andy Le, 000805099 certify that this material is my original work. No other person's work has been used without due acknowledgement.
*/
window.addEventListener("load", function() {

	// Background setup
	class Board {
		constructor(grid) {
			this.grid = grid
		}

		solve() {
			let pos = this.findEmpty()
			if (pos == false) {
				return true
			}
			for (let i = 1; i < 10; i++) {
				if (this.validCell(i, pos)) {
					this.grid[pos[0]][pos[1]] = i  //WORK ON MUTATING
					if (this.solve()) {
						return true
					}
					this.grid[pos[0]][pos[1]] = 0	
				}
			}
			return false
		}

		validCell(num, pos) {
			for (let i = 0; i < 9; i++) {
				if ((this.grid[pos[0]][i] == num) && (pos[1] != i)) {
					return false
				}
			}
			for (let i = 0; i < 9; i++) {
				if ((this.grid[i][pos[1]] == num) && (pos[0] != i)) {
					return false
				}
			}
			let x = Math.floor(pos[1]/3)
			let y = Math.floor(pos[0]/3)
			for (let i = (y * 3); i < ((y * 3) + 3); i++) {
				for (let j = (x * 3); j < ((x * 3) + 3); j++) {
					if ((this.grid[i][j] == num) && ([i,j] != pos)) {
						return false
					}
				}
			}
			return true
		}

		findEmpty() {
			for (let i = 0; i < 9; i++) {
				for (let j = 0; j < this.grid.length; j++) {
					if (this.grid[i][j] == 0) {
						return [i, j]
					}
				}
			}
			return false
		}
	}

	class User {
		constructor(name, age, colour, skill) {
			this.name = name
			this.age = age
			this.colour = colour
			this.skill = skill
		}
	}

	let r1c1 = document.getElementById("r1c1")
	let r1c2 = document.getElementById("r1c2")
	let r1c3 = document.getElementById("r1c3")
	let r1c4 = document.getElementById("r1c4")
	let r1c5 = document.getElementById("r1c5")
	let r1c6 = document.getElementById("r1c6")
	let r1c7 = document.getElementById("r1c7")
	let r1c8 = document.getElementById("r1c8")
	let r1c9 = document.getElementById("r1c9")

	let r2c1 = document.getElementById("r2c1")
	let r2c2 = document.getElementById("r2c2")
	let r2c3 = document.getElementById("r2c3")
	let r2c4 = document.getElementById("r2c4")
	let r2c5 = document.getElementById("r2c5")
	let r2c6 = document.getElementById("r2c6")
	let r2c7 = document.getElementById("r2c7")
	let r2c8 = document.getElementById("r2c8")
	let r2c9 = document.getElementById("r2c9")

	let r3c1 = document.getElementById("r3c1")
	let r3c2 = document.getElementById("r3c2")
	let r3c3 = document.getElementById("r3c3")
	let r3c4 = document.getElementById("r3c4")
	let r3c5 = document.getElementById("r3c5")
	let r3c6 = document.getElementById("r3c6")
	let r3c7 = document.getElementById("r3c7")
	let r3c8 = document.getElementById("r3c8")
	let r3c9 = document.getElementById("r3c9")

	let r4c1 = document.getElementById("r4c1")
	let r4c2 = document.getElementById("r4c2")
	let r4c3 = document.getElementById("r4c3")
	let r4c4 = document.getElementById("r4c4")
	let r4c5 = document.getElementById("r4c5")
	let r4c6 = document.getElementById("r4c6")
	let r4c7 = document.getElementById("r4c7")
	let r4c8 = document.getElementById("r4c8")
	let r4c9 = document.getElementById("r4c9")

	let r5c1 = document.getElementById("r5c1")
	let r5c2 = document.getElementById("r5c2")
	let r5c3 = document.getElementById("r5c3")
	let r5c4 = document.getElementById("r5c4")
	let r5c5 = document.getElementById("r5c5")
	let r5c6 = document.getElementById("r5c6")
	let r5c7 = document.getElementById("r5c7")
	let r5c8 = document.getElementById("r5c8")
	let r5c9 = document.getElementById("r5c9")

	let r6c1 = document.getElementById("r6c1")
	let r6c2 = document.getElementById("r6c2")
	let r6c3 = document.getElementById("r6c3")
	let r6c4 = document.getElementById("r6c4")
	let r6c5 = document.getElementById("r6c5")
	let r6c6 = document.getElementById("r6c6")
	let r6c7 = document.getElementById("r6c7")
	let r6c8 = document.getElementById("r6c8")
	let r6c9 = document.getElementById("r6c9")

	let r7c1 = document.getElementById("r7c1")
	let r7c2 = document.getElementById("r7c2")
	let r7c3 = document.getElementById("r7c3")
	let r7c4 = document.getElementById("r7c4")
	let r7c5 = document.getElementById("r7c5")
	let r7c6 = document.getElementById("r7c6")
	let r7c7 = document.getElementById("r7c7")
	let r7c8 = document.getElementById("r7c8")
	let r7c9 = document.getElementById("r7c9")

	let r8c1 = document.getElementById("r8c1")
	let r8c2 = document.getElementById("r8c2")
	let r8c3 = document.getElementById("r8c3")
	let r8c4 = document.getElementById("r8c4")
	let r8c5 = document.getElementById("r8c5")
	let r8c6 = document.getElementById("r8c6")
	let r8c7 = document.getElementById("r8c7")
	let r8c8 = document.getElementById("r8c8")
	let r8c9 = document.getElementById("r8c9")

	let r9c1 = document.getElementById("r9c1")
	let r9c2 = document.getElementById("r9c2")
	let r9c3 = document.getElementById("r9c3")
	let r9c4 = document.getElementById("r9c4")
	let r9c5 = document.getElementById("r9c5")
	let r9c6 = document.getElementById("r9c6")
	let r9c7 = document.getElementById("r9c7")
	let r9c8 = document.getElementById("r9c8")
	let r9c9 = document.getElementById("r9c9")

	let helpText = document.getElementById("helpText")
	let oName = document.getElementById("myName")
	let oAge = document.getElementById("myAge")
	let oSkill = document.getElementById("mySkill")
	let myBody = document.getElementById("myBody")
	let name = document.forms.myForm.name
	let age = document.forms.myForm.age
	let colour = document.forms.myForm.colour
	let skill = document.forms.myForm.skill
	let startBut = document.getElementById("start")
	let form = document.getElementById("myForm")
	let userOut = document.getElementById("userOut")
	let helpBut = document.getElementById("help")
	let solveBut = document.getElementById("solve")
	let resetBut = document.getElementById("reset")
	let message = document.getElementById("message")

	r1c1.addEventListener('click', function(event) {changeCell(this)})
	r1c2.addEventListener('click', function(event) {changeCell(this)})
	r1c3.addEventListener('click', function(event) {changeCell(this)})
	r1c4.addEventListener('click', function(event) {changeCell(this)})
	r1c5.addEventListener('click', function(event) {changeCell(this)})
	r1c6.addEventListener('click', function(event) {changeCell(this)})
	r1c7.addEventListener('click', function(event) {changeCell(this)})
	r1c8.addEventListener('click', function(event) {changeCell(this)})
	r1c9.addEventListener('click', function(event) {changeCell(this)})

	r2c1.addEventListener('click', function(event) {changeCell(this)})
	r2c2.addEventListener('click', function(event) {changeCell(this)})
	r2c3.addEventListener('click', function(event) {changeCell(this)})
	r2c4.addEventListener('click', function(event) {changeCell(this)})
	r2c5.addEventListener('click', function(event) {changeCell(this)})
	r2c6.addEventListener('click', function(event) {changeCell(this)})
	r2c7.addEventListener('click', function(event) {changeCell(this)})
	r2c8.addEventListener('click', function(event) {changeCell(this)})
	r2c9.addEventListener('click', function(event) {changeCell(this)})

	r3c1.addEventListener('click', function(event) {changeCell(this)})
	r3c2.addEventListener('click', function(event) {changeCell(this)})
	r3c3.addEventListener('click', function(event) {changeCell(this)})
	r3c4.addEventListener('click', function(event) {changeCell(this)})
	r3c5.addEventListener('click', function(event) {changeCell(this)})
	r3c6.addEventListener('click', function(event) {changeCell(this)})
	r3c7.addEventListener('click', function(event) {changeCell(this)})
	r3c8.addEventListener('click', function(event) {changeCell(this)})
	r3c9.addEventListener('click', function(event) {changeCell(this)})

	r4c1.addEventListener('click', function(event) {changeCell(this)})
	r4c2.addEventListener('click', function(event) {changeCell(this)})
	r4c3.addEventListener('click', function(event) {changeCell(this)})
	r4c4.addEventListener('click', function(event) {changeCell(this)})
	r4c5.addEventListener('click', function(event) {changeCell(this)})
	r4c6.addEventListener('click', function(event) {changeCell(this)})
	r4c7.addEventListener('click', function(event) {changeCell(this)})
	r4c8.addEventListener('click', function(event) {changeCell(this)})
	r4c9.addEventListener('click', function(event) {changeCell(this)})

	r5c1.addEventListener('click', function(event) {changeCell(this)})
	r5c2.addEventListener('click', function(event) {changeCell(this)})
	r5c3.addEventListener('click', function(event) {changeCell(this)})
	r5c4.addEventListener('click', function(event) {changeCell(this)})
	r5c5.addEventListener('click', function(event) {changeCell(this)})
	r5c6.addEventListener('click', function(event) {changeCell(this)})
	r5c7.addEventListener('click', function(event) {changeCell(this)})
	r5c8.addEventListener('click', function(event) {changeCell(this)})
	r5c9.addEventListener('click', function(event) {changeCell(this)})

	r6c1.addEventListener('click', function(event) {changeCell(this)})
	r6c2.addEventListener('click', function(event) {changeCell(this)})
	r6c3.addEventListener('click', function(event) {changeCell(this)})
	r6c4.addEventListener('click', function(event) {changeCell(this)})
	r6c5.addEventListener('click', function(event) {changeCell(this)})
	r6c6.addEventListener('click', function(event) {changeCell(this)})
	r6c7.addEventListener('click', function(event) {changeCell(this)})
	r6c8.addEventListener('click', function(event) {changeCell(this)})
	r6c9.addEventListener('click', function(event) {changeCell(this)})

	r7c1.addEventListener('click', function(event) {changeCell(this)})
	r7c2.addEventListener('click', function(event) {changeCell(this)})
	r7c3.addEventListener('click', function(event) {changeCell(this)})
	r7c4.addEventListener('click', function(event) {changeCell(this)})
	r7c5.addEventListener('click', function(event) {changeCell(this)})
	r7c6.addEventListener('click', function(event) {changeCell(this)})
	r7c7.addEventListener('click', function(event) {changeCell(this)})
	r7c8.addEventListener('click', function(event) {changeCell(this)})
	r7c9.addEventListener('click', function(event) {changeCell(this)})

	r8c1.addEventListener('click', function(event) {changeCell(this)})
	r8c2.addEventListener('click', function(event) {changeCell(this)})
	r8c3.addEventListener('click', function(event) {changeCell(this)})
	r8c4.addEventListener('click', function(event) {changeCell(this)})
	r8c5.addEventListener('click', function(event) {changeCell(this)})
	r8c6.addEventListener('click', function(event) {changeCell(this)})
	r8c7.addEventListener('click', function(event) {changeCell(this)})
	r8c8.addEventListener('click', function(event) {changeCell(this)})
	r8c9.addEventListener('click', function(event) {changeCell(this)})

	r9c1.addEventListener('click', function(event) {changeCell(this)})
	r9c2.addEventListener('click', function(event) {changeCell(this)})
	r9c3.addEventListener('click', function(event) {changeCell(this)})
	r9c4.addEventListener('click', function(event) {changeCell(this)})
	r9c5.addEventListener('click', function(event) {changeCell(this)})
	r9c6.addEventListener('click', function(event) {changeCell(this)})
	r9c7.addEventListener('click', function(event) {changeCell(this)})
	r9c8.addEventListener('click', function(event) {changeCell(this)})
	r9c9.addEventListener('click', function(event) {changeCell(this)})

	startBut.addEventListener("click", startGame)
	helpBut.addEventListener("click", helpMe)
	solveBut.addEventListener("click", solveSudoku)
	resetBut.addEventListener("click", resetGrid)

	let tempGrid = [
		[3,0,0,0,2,9,0,0,4],
	    [0,0,0,5,7,8,0,3,2],
	    [0,0,2,0,0,0,0,0,0],
	    [0,7,0,0,5,0,0,0,1],
	    [1,9,4,8,0,0,0,2,0],
	    [2,0,0,9,0,0,6,0,0],
	    [7,0,0,0,8,5,2,0,9],
	    [4,0,9,0,1,6,8,0,7],
	    [5,0,0,0,0,2,3,0,6]
	]

	let originalGrid = [
		[3,0,0,0,2,9,0,0,4],
	    [0,0,0,5,7,8,0,3,2],
	    [0,0,2,0,0,0,0,0,0],
	    [0,7,0,0,5,0,0,0,1],
	    [1,9,4,8,0,0,0,2,0],
	    [2,0,0,9,0,0,6,0,0],
	    [7,0,0,0,8,5,2,0,9],
	    [4,0,9,0,1,6,8,0,7],
	    [5,0,0,0,0,2,3,0,6]
	]

	let hGrid = [
		[r1c1, r1c2, r1c3, r1c4, r1c5, r1c6, r1c7, r1c8, r1c9],
		[r2c1, r2c2, r2c3, r2c4, r2c5, r2c6, r2c7, r2c8, r2c9],
		[r3c1, r3c2, r3c3, r3c4, r3c5, r3c6, r3c7, r3c8, r3c9],
		[r4c1, r4c2, r4c3, r4c4, r4c5, r4c6, r4c7, r4c8, r4c9],
		[r5c1, r5c2, r5c3, r5c4, r5c5, r5c6, r5c7, r5c8, r5c9],
		[r6c1, r6c2, r6c3, r6c4, r6c5, r6c6, r6c7, r6c8, r6c9],
		[r7c1, r7c2, r7c3, r7c4, r7c5, r7c6, r7c7, r7c8, r7c9],
		[r8c1, r8c2, r8c3, r8c4, r8c5, r8c6, r8c7, r8c8, r8c9],
		[r9c1, r9c2, r9c3, r9c4, r9c5, r9c6, r9c7, r9c8, r9c9]
	]

	// Create new board object 
	let temp = new Board(tempGrid)
	let player;

	function startGame() {
		if ((name.value == "") || (age.value == "") || (isNaN(age.value))) {
			message.innerHTML = "User Input Error!"
		} else {
			message.innerHTML = ""
			userOut.style.display = "block"
			form.style.display = "none"
		}
		player = new User(name.value, age.value, colour.value, skill.value)
		myBody.style.backgroundColor = player.colour
		oName.innerHTML = "Name: " + player.name
		oAge.innerHTML = "Age: " + player.age
		oSkill.innerHTML = "Skill: " + player.skill
	}

	// Display grid
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (tempGrid[i][j] == 0) {
				hGrid[i][j].innerHTML = " "
				hGrid[i][j].classList.add("touchable")
			} else {
				hGrid[i][j].style.backgroundColor = "#AEC6CF"
				hGrid[i][j].innerHTML = tempGrid[i][j]
				hGrid[i][j].classList.add("untouchable")
			}
			hGrid[i][j].classList.add(i)
			hGrid[i][j].classList.add(j + 9)
		}
	}

	function helpMe() {
		helpText.innerHTML = "Click on and empty box to type in any number from 1 to 9<br>The solve button will attempt to solve the board as it is<br>The reset button will reset the board"
	}

	// Solve grid
	function solveSudoku() {
		resetBut.disabled = true
		let count = 1;
		if (temp.solve()) {
			for (let i = 0; i < 9; i++) {
				for (let j = 0; j < 9; j++) {
					setTimeout(() => {	
						hGrid[i][j].style.border = "1.5px solid #77DD77"
						hGrid[i][j].innerHTML = temp.grid[i][j]	
					}, count * 50)
					count++
				}
			}
		} else {
			message.innerHTML = "Sudoku board is incorrect!"
		}
		setTimeout(() => {
			resetBut.disabled = false
		}, count * 50)
	}

	// Reset Grid
	function resetGrid() {
		temp.grid = originalGrid
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				hGrid[i][j].style.border = "1.5px solid #000000"
				if (temp.grid[i][j] == 0) {
					hGrid[i][j].innerHTML = " "
					hGrid[i][j].classList.add("touchable")
				} else {
					hGrid[i][j].style.backgroundColor = "#AEC6CF"
					hGrid[i][j].innerHTML = temp.grid[i][j]
					hGrid[i][j].classList.add("untouchable")
				}
				hGrid[i][j].classList.add(i)
				hGrid[i][j].classList.add(j + 9)
			}
		}
	}

	// Change cell of grid
	function changeCell(cell) {
		document.onkeydown = function(event) {
			if (!cell.classList.contains("untouchable")) {
				let num = event.key
				if (["1","2","3","4","5","6","7","8","9"].includes(num)) {
					cell.innerHTML = num
					tempGrid[cell.classList.item(1)].splice([cell.classList.item(2) - 9], 1, num)
				}				
			}
		}
	}
})






