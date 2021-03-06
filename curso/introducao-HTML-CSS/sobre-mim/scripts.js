
let modalOverlay = document.querySelector('.modal-overlay')
let cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function(){
        
        let videoID = card.getAttribute('id')

        modalOverlay.classList.add('active')

        modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoID}`

    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ""
})

