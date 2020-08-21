let modalOverlay = document.querySelector('.modal-overlay')
let cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function(){
        let pageId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${pageId}`
    })
}

document.querySelector('#close').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modalOverlay.firstElementChild.classList.remove("maximize");
    modalOverlay.querySelector('iframe').src = ""
})
    
document.querySelector('#max').addEventListener('click', function(){
    modalOverlay.firstElementChild.classList.add("maximize");
})