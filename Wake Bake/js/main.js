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


})()