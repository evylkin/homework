// аккардеон
document.querySelectorAll('.accordion-list__control').forEach((e) => {
    
    e.addEventListener('click', () => {
        let content = e.nextElementSibling;

        if(content.style.maxHeight){
            document.querySelectorAll('.accordion-list__content').forEach((e) => 
                e.style.maxHeight = null)
        } 
        
        else{
            document.querySelectorAll('.accordion-list__content').forEach((e) =>
                e.style.maxHeight = null ) 
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
    // e.preventDefault()
}
)
document.querySelector('.accordion-list__control').addEventListener('click', function(){
    document.querySelector('.accordion-list__control').classList.toggle('accordion-list__item--opened')
})

// бургер

document.getElementById('burger').addEventListener('click', function(){
    document.querySelector('.body').classList.toggle('body--oppened-menu')
})