const tabsContent = document.querySelectorAll('.tabs__content-item')
const tabsNav = document.querySelectorAll('.tabs__header-item')

tabsNav.forEach(item => {
    item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.getElementById(tabId);

        if(!currentBtn.classList.contains('active')) {
            tabsNav.forEach(item => {
                item.classList.remove('active')
            })
    
            tabsContent.forEach(item => {
             item.classList.add('none')
            })
    
            currentBtn.classList.add('active')
            currentTab.classList.remove('none')
        }
    });
})


// Swiper 

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.slide__btn_next',
      prevEl: '.slide__btn_prev',
    },
  });


// burger 

const burgerBtn = document.querySelector('.burger')
const pageOverlay = document.querySelector('.page')

burgerBtn.addEventListener('click', (elem) => {
    burgerBtn.classList.toggle('active');
    pageOverlay.classList.toggle('overlay')
})