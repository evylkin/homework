(function(){

document.addEventListener('click',burgerInt)

function burgerInt(e){
const burgerIcon = e.target.closest('.burger-icon')

const burgerNavLink = e.target.closest('.list__link')

if(! burgerIcon && !burgerNavLink) return
if(document.documentElement.clientWidth > 900)return


if(!document.body.classList.contains('body--open-menu') ){
    document.body.classList.add('body--open-menu')
} else{
    document.body.classList.remove('body--open-menu')
}



}

const modal = document.querySelector('.modal')
const modalBtn = document.querySelector('.about__img-button')


modalBtn.addEventListener('click', openModal)
modal.addEventListener('click', closeModal)

function openModal(e){
    e.preventDefault()
    document.body.classList.toggle('body--open-modal')
}
function closeModal(e){
    e.preventDefault()


    const target = e.target
    if(target.closest('.modal__cancel')|| (target.classList.contains('modal'))){
        document.body.classList.remove('body--open-modal')
    }
}

const tabControls = document.querySelector('.tab-controls')

tabControls.addEventListener('click', toggleTub)


function toggleTub(e) {

    const tabControl = e.target.closest('.tab-controls__link')

    if(!tabControl) return

    e.preventDefault()

    if(tabControl.classList.contains('tab-controls__item--active')) return

    const tabContentID = tabControl.getAttribute('href')
    document.querySelector('.tab-content--show').classList.remove('tab-content--show')
    document.querySelector(tabContentID).classList.add('tab-content--show')

document.querySelector('.tab-controls__item--active').classList.remove('tab-controls__item--active')
    tabControl.classList.add('tab-controls__item--active')
    
}



})()



