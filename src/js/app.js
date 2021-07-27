import '../scss/app.scss'
import 'bootstrap'
import {DATA} from './data'

const btn = document.querySelector('.search__btn')
const input = document.querySelector('.search__input')
const field = document.querySelector('.field__body')
let result = []

const fetchData = async () => {
    const response = await fetch('http://127.0.0.1:3008/pages')
    result = await response.json()
    
    return response
}
fetchData()


btn.onclick = function(){
    const value = input.value
    result = result.data.filter((el) => el.title.startsWith(value))
    result.map((item) => {
        field.insertAdjacentHTML('beforeend', `
            <div>${item.title}</div>
        `)
    })
}

//Сделать при нажатии на enter чтобы отрабатывал поиск

//Получаем данные из макуна асинхронно
//Наполняем DATA 
//Выводим их на сайт
//Поиск по дате