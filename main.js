let offset = 0
let counter = 0
const pagination = document.querySelectorAll(".slider-pagination>li>div")
const sliderRow = document.querySelector(".slider-row")
let containerWidth = document.querySelector('.slider').offsetWidth
let pictureWidth = document.querySelectorAll('.slider-img') 


//Изменяю размеры слайдов
window.addEventListener('resize', function() {
    containerWidth = document.querySelector('.slider').offsetWidth
    resizeSlides(containerWidth)
  })
//Изменяю размеры слайдов
function resizeSlides(containerWidth) {
    pictureWidth.forEach((i)=> {
        i.style.width = `${containerWidth}px`
        i.style.height = `${containerWidth}px`
    }) 

    
}

function renderDescription(counter) {
    let bottom = document.querySelector('.bottom')
    if (bottom.firstChild){
        bottom.removeChild(bottom.firstChild)
    }
    let newDesc = document.createElement('h1')
    newDesc.classList.add('desc')

    if (counter == 0){
        newDesc.innerText = 'Это'
        document.querySelector('.bottom').prepend(newDesc)
    } else if (counter == 1){
        newDesc.innerText = 'очень'
        document.querySelector('.bottom').prepend(newDesc)
    } else if (counter == 2){
        newDesc.innerText = 'грустный'
        document.querySelector('.bottom').prepend(newDesc)
    } else if (counter == 3){
        newDesc.innerText = 'мем'
        document.querySelector('.bottom').prepend(newDesc)
    }
}

function changeCounter(counter) {
    pagination.forEach((i) => i.classList.remove('dot-active'))
    pagination[counter].classList.add('dot-active')
}

                                                                                    // prev
document.getElementById('prev').addEventListener('click', ()=> {
    if(offset == 0) {
        offset = -1500
        counter = 3
        changeCounter(counter)
        renderDescription(counter)
        sliderRow.style.transform = `translateX(${offset}px)`
    } else {
        offset += 500
        counter--
        changeCounter(counter)
        renderDescription(counter)
        sliderRow.style.transform = `translateX(${offset}px)`
    }
})
                                                                                    // next
document.getElementById('next').addEventListener('click', ()=> {
    if(offset > -1500) {
        offset -= 500
        sliderRow.style.transform = `translateX(${offset}px)`
        counter++
        changeCounter(counter)
        renderDescription(counter)
    } else {
        offset = 0
        counter = 0
        changeCounter(counter)
        renderDescription(counter)
        sliderRow.style.transform = `translateX(${offset}px)`
    }
})

//Табы по точкам


 pagination.forEach((el) => {
    el.addEventListener('click', (e)=>{
        
        if (e.target.classList == 'dot dot1') {
            counter = 0
            sliderRow.style.transform = `translateX(0px)`
            changeCounter(counter)
            renderDescription(counter)
        } else if (e.target.classList == 'dot dot2') {
            counter = 1
            sliderRow.style.transform = `translateX(-500px)`
            changeCounter(counter)
            renderDescription(counter)
        } else if (e.target.classList == 'dot dot3') {
            counter = 2
            sliderRow.style.transform = `translateX(-1000px)`
            changeCounter(counter)
            renderDescription(counter)
        } else if (e.target.classList == 'dot dot4') {
            counter = 3
            sliderRow.style.transform = `translateX(-1500px)`
            changeCounter(counter)
            renderDescription(counter)
        }
    })
 })

renderDescription(counter)
changeCounter(counter)
resizeSlides(containerWidth)

