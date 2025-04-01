'use strict'
window.addEventListener('beforeunload', function(){
    localStorage.setItem('MyLibrary', JSON.stringify(myLibrary))
})

const addCard = document.querySelector('#add-card');

let storedCards = JSON.parse(localStorage.getItem('MyLibrary'));
console.log(localStorage.getItem('MyLibrary'))
console.log(storedCards)
for (let book of storedCards){
    console.log(book)
    const newCard = document.createElement('div')
    const cardHtml = `
<div class="card-inner">
                    <div class="top-left"></div>
                    <div class="top-right"></div>
                    <div class="bottom-left"></div>
                    <div class="bottom-right"></div>

                    <div class="front-card">
                        <div style="background-image: url(${book.backgroundImage});" class="background-image"></div>
                        <div class="book-title-container">
                            <h1 id="book-title">My Hero Academia</h1>
                        </div>
                        <div class="card-content">
                            <div class="text-container">
                                <img class="icon" src="icons/author.svg" alt="">
                                <p id="book-author" class="book-text">${book.author}</p>
                            </div>
                            <div class="text-container">
                                <img class="icon" src="icons/pages.svg" alt="">
                                <p id="book-pages">${book.pages}</p>
                            </div>
                            
                            <div class="text-container">
                                <img class="icon" src="icons/check.svg" alt="">
                                <p id="book-read">Read</p>
                            </div>
                            
                            <div class="mark-read-container">
                                <p>Mark as Read</p>
                                <img onclick = "changeReadStatus(this)" id="icon-read" src="icons/checkbox.svg" alt="">
                            </div>
                        </div>
                        <div class="id-container">
                            <p>ID</p>
                            <p id="book-id">${book.id}</p>
                        </div>
                    </div>
                    <div class="back-card"> 
                        <button type="button" class="delete-card" onclick = this.parentElement.parentElement.parentElement.remove()>delete</button>
                        <div class="top-left"></div>
                        <div class="top-right"></div>
                        <div class="bottom-left"></div>
                        <div class="bottom-right"></div>
                    </div>
                </div>
            </div>
`

    newCard.innerHTML = cardHtml;
    newCard.className = 'card'
    addCard.insertAdjacentElement('beforebegin', newCard)
    book.element = newCard
    myLibrary.push(book)
}