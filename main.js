let offset = 0
let counter = 0
const pagination = document.querySelectorAll(".slider-pagination>li>div")

const sliderRow = document.querySelector(".slider-row")



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
        sliderRow.style.transform = `translateX(${offset}px)`
    } else {
        offset += 500
        counter--
        changeCounter(counter)
        sliderRow.style.transform = `translateX(${offset}px)`
    }
})
                                                                                    // next
document.getElementById('next').addEventListener('click', ()=> {
    if(offset >= -1499) {
        offset -= 500
        sliderRow.style.transform = `translateX(${offset}px)`
        counter++
        changeCounter(counter)
    } else {
        offset = 0
        counter = 0
        changeCounter(counter)
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
        } else if (e.target.classList == 'dot dot2') {
            counter = 1
            sliderRow.style.transform = `translateX(-500px)`
            changeCounter(counter)
        } else if (e.target.classList == 'dot dot3') {
            counter = 2
            sliderRow.style.transform = `translateX(-1000px)`
            changeCounter(counter)
        } else if (e.target.classList == 'dot dot4') {
            counter = 3
            sliderRow.style.transform = `translateX(-1500px)`
            changeCounter(counter)
        }
    })
 })



changeCounter(counter)

