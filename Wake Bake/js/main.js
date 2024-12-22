(function () {
    // бургер
    document.addEventListener('click', burgerInt)

    function burgerInt(e) {
        const burgerIcon = e.target.closest('.burger-icon')

        const burgerNavLink = e.target.closest('.list__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return


        if (!document.body.classList.contains('body--open-menu')) {
            document.body.classList.add('body--open-menu')
        } else {
            document.body.classList.remove('body--open-menu')
        }



    }

    // модалка
    const modal = document.querySelector('.modal')
    const modalBtn = document.querySelector('.about__img-button')


    modalBtn.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--open-modal')
    }
    function closeModal(e) {
        e.preventDefault()


        const target = e.target
        if (target.closest('.modal__cancel') || (target.classList.contains('modal'))) {
            document.body.classList.remove('body--open-modal')
        }
    }

    // табы
    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTub)


    function toggleTub(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return

        e.preventDefault()

        if (tabControl.classList.contains('tab-controls__item--active')) return

        const tabContentID = tabControl.getAttribute('href')
        document.querySelector('.tab-content--show').classList.remove('tab-content--show')
        document.querySelector(tabContentID).classList.add('tab-content--show')

        document.querySelector('.tab-controls__item--active').classList.remove('tab-controls__item--active')
        tabControl.classList.add('tab-controls__item--active')

    }

    // Аккордеон

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        })
    })


    // слайдер-свайпер

 new  Swiper('.galerey__slider', {
        spaceBetween: 15,
        slidesPerView: 1.5,
        pagination: {
            el: '.galerey__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.galerey__next',
            prevEl: '.galerey__prev',
        },

        breakpoints: {
            1101: {
                slidesPerView: 4,
            },
            801: {
                spaceBetween: 32,
            },
            601: {
                slidesPerView: 3,
            }
        }

    });





    new Swiper('.testimonials__slider', {

        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        breakpoints:{
        901:{
            slidesPerView: 1.5,
        },
        1201:{
            slidesPerView: 2.1,
        }
    }
    });


}

)()



