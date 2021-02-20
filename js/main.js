const modaltriggers = document.querySelectorAll(".popup-trigger")
const modalclosetrigger = document.querySelector(".popup-modal_close")

modaltriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const { popupTrigger } = trigger.dataset
      const popupModal = 
      document.querySelector(`[data-popup-modal="${popupTrigger}"]`)
  
      popupModal.classList.add('is--visible')

    modalclosetrigger.addEventListener('click', () => {
        popupModal.classList.remove('is--visible')
     })
     
    })
  })

const radio = document.querySelectorAll('.radio');
const pledge = document.querySelector('.input_pledge');


radio.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const {popupTrigger} = trigger.dataset
        document.querySelector(`[data-rdn-btn="one"]`)
        .classList.remove('visible')
        document.querySelector(`[data-rdn-btn="two"]`)
        .classList.remove('visible')
        document.querySelector(`[data-rdn-btn="three"]`)
        .classList.remove('visible')
        document.querySelector(`[data-rdn-btn="four"]`)
        .classList.remove('visible')
            const popupModal = 
        document.querySelector(`[data-rdn-btn="${popupTrigger}"]`)
        popupModal.classList.add('visible')
        
    })
})


const btn = document.querySelectorAll('.btn-continue')
const success = document.querySelector('.success_modal')

btn.forEach(trigger => {
    trigger.addEventListener('click', () => {
        success.classList.add('success')

    document.getElementById('btn-success').addEventListener('click', function(){
        success.classList.remove('success')
        document.querySelector(`[data-popup-modal="one"]`)
        .classList.remove('is--visible')
        document.querySelector(`[data-rdn-btn="one"]`)
        .classList.remove('visible')
        document.querySelector(`[data-rdn-btn="two"]`)
        .classList.remove('visible')
        document.querySelector(`[data-rdn-btn="three"]`)
        .classList.remove('visible')
        document.querySelector(`[data-rdn-btn="four"]`)
        .classList.remove('visible')
    })
    })
})
