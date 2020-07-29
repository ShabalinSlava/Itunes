import { videoPlayerInit } from './videoPlayer.js'
import { radioPlayerInit } from './radioPlayer.js'
import { musicPlayerInit } from './musicPlayer.js'

const playerBtn = document.querySelectorAll('.player-btn')
const playerBlock = document.querySelectorAll('.player-block')
const temp = document.querySelector('.temp')

// Функции
const deactivationPlayer = () => {
	temp.style.display = 'none'
	playerBtn.forEach((item) => {
		item.classList.remove('active')
	})
	playerBlock.forEach((item) => {
		item.classList.remove('active')
	})
}

// Методы
playerBtn.forEach((btn, i) => {
	btn.addEventListener('click', () => {
		deactivationPlayer()
		btn.classList.add('active')
		playerBlock[i].classList.add('active')
	})
})

// Вызовы функций
videoPlayerInit()
radioPlayerInit()
musicPlayerInit()