//lvl 96
let total = []
let arr1 = []
function capToFront(a){
    total = []
    arr1 = a.split('')
    for(let i of arr1){
        if(i.toUpperCase() === i){
            total[total.length] = i
        }
    }
    for(let i of arr1){
        if(i.toLowerCase() === i){
            total[total.length] = i
        }
    }
    return total.join('')
}
console.log(capToFront('cAKe')) //AKce
//lvl97
function ascDesNone(a, b){
    if(b === 'Asc'){
        total = a.sort(function(a,b){return a-b})
    }else if(b === 'Des'){
        total = a.sort(function(a,b){return b-a})
    }else if(b === 'None'){
        total = a
    }else{
        total = 'Incorrect Command'
    }
    return total
}
console.log(ascDesNone([4, 3, 2, 1], 'Asc')) //[1, 2, 3, 4]
console.log(ascDesNone([4, 56, 23], 'Des')) //[56, 23, 4]
console.log(ascDesNone([8, 6, 9], 'None')) //[8, 6, 9]
//lvl98
function indexMultiplier(a){
    if(a.length == 0){
        total = 0
    }else{
        total = 0
        for(let i in a){
            total += a[i] * i
        }
    }
    return total
}
console.log(indexMultiplier([])) //0
console.log(indexMultiplier([1, 6, 7, 4])) //32
//lvl99
function isSpecialArray(a){
    total = true
    for(let i in a){
        if(i%2 != a[i]%2){
            total = false
        }
    }
    return total
}
console.log(isSpecialArray([2, 3, 4, 7])) //true
console.log(isSpecialArray([2, 3, 4, 8, 6])) //false
//lvl100
function isObject(a){
    return typeof(a) == 'object' || typeof(a) == 'function'
}
console.log(isObject(function(a){return a-20})) //true
console.log(isObject(new RegExp(([0-9])))) //true
console.log(isObject(new Number(26))) //true
console.log(isObject('')) //false
//Тесты
// 1)
//как расшифровывается DOM?
//Ответ: Document Object Model

// 2)
//для чего нужен DOM?
//Для взаимодействия с документом: изменение элементов, их стилей, атрибутов, и т.д.

// 3)
//измените содержимое тега 'p' на 'Новый текст'
{/* <p id="txt">Some text</p> */}
// document.getElementById('txt').innerHTML = 'Новый текст'

// 4)
//выведите в консоли содержимое тега 'p'
{/* <p id="txt">Some text</p> */}
console.log(document.getElementById('txt').innerHTML)

// 5)
//получите доступ к элементу с помощью (get...)
{/* <div class="master"></div> */}
// document.getElementsByClassName('master')
//или
// document.querySelectorAll('.master')

// 6)
//получите доступ к элементу с помощью (get...)
{/* <div id="master"></div> */}
// document.getElementById('master')

// 7)
//получите доступ к элементу с помощью (get...)
{/* <div></div> */}
// document.getElementsByTagName('div')

// 8)
//получите доступ к элементу с помощью (query...) через имя атрибута
{/* <div title="someText"></div> */}
// document.querySelectorAll('div').title

// 9)
//получите доступ к элементу с помощью (query...) через имя и значение атрибута
{/* <div title="someText"></div> */}
// document.querySelectorAll('div').title

// 10)
//получите доступ к элементу с помощью (query...) через тег, имя и значение атрибута
{/* <div title="someText"></div> */}
// document.querySelectorAll('div').title

// 11)
//получите доступ к элементу с помощью (query...) через имя класса
{/* <div class="someText"></div> */}
// document.querySelectorAll('.someText')

// 12)
//получите доступ к элементу с помощью (query...) через имя идентификатора
{/* <div id="someText"></div> */}
// document.querySelector('#someText')

// 13)
//получите доступ к элементу с помощью (query...) через тег
{/* <div></div> */}
// document.querySelectorAll('div')

// 14)
//измените значение атрибута 'type' на 'number' с помощью DOM метода
//<input type="text">
document.querySelectorAll('input')[0].type = 'number'
document.querySelectorAll('input')[0].setAttribute('type', 'number')

// 15)
//измените фоновый цвет блока div на красный с помощью DOM метода
{/* <div id='block'></div> */}
document.getElementById('block').style.backgroundColor = 'red'

// 16)
//добавьте атрибут 'title' со значением 'message' для блока нижу с помощью DOM метода
{/* <div></div> */}
document.querySelectorAll('div')[0].title = 'message'
document.querySelectorAll('div')[0].setAttribute('title', 'message')

// 17)
//с помощью какого метода DOM можно создать элемент в javascript?
// .createElement()

// 18)
//с помощью какого метода DOM можно удалить элемент в javascript?
// .removeChild()

// 19)
//с помощью какого метода DOM можно добавить элемент в javascript?
// .append() или .appendChild()

// 20)
//с помощью какого метода DOM можно заменить элемент в javascript?
// .replaceChild(новый элемент, старый элемент)

// 21)
//с помощью какого метода DOM можно записать текст в элемент в javascript?
//.innerText или .innerHTML